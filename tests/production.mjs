import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { preview } from 'vite';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import menu from '../src/menu.json' with {type:'json'};

// Run after npm run build. Set CHROME_BIN to test with system Chrome.
const server = await preview({preview:{host:'127.0.0.1',port:0}});
const browser = await chromium.launch({executablePath:process.env.CHROME_BIN || undefined,args:['--enable-unsafe-swiftshader']});
const url = 'http://127.0.0.1:'+server.httpServer.address().port;
const resultsDir = 'test-results';
await mkdir(resultsDir,{recursive:true});
const entries = menu.flatMap(s=>s.groups.flatMap(([,items])=>items));
assert.equal(entries.filter(([,price])=>price!==null).length,176);
const failures=[];
async function at(page,selector) {
  const host=page.locator(selector).first();
  await host.evaluate(node => node.scrollIntoView({block:'center',behavior:'instant'}));
  return host;
}
async function painted(locator) {
  await locator.evaluate(async canvas => {
    const ctx = canvas.getContext('2d');
    for (let attempt=0; attempt<90; attempt++) {
      await new Promise(requestAnimationFrame);
      const sample = document.createElement('canvas');
      sample.width=80; sample.height=48;
      const reader=sample.getContext('2d');
      reader.drawImage(ctx.canvas,0,0,80,48);
      const bytes=reader.getImageData(0,0,80,48).data;
      if (new Set(new Uint32Array(bytes.buffer)).size > 3) return;
    }
    throw Error('Canvas produced a uniform frame');
  });
}
async function audit(page,label){
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
  for(const v of result.violations) failures.push(label+' '+v.id+' '+v.nodes.slice(0,4).map(n=>n.target.join('>')+' '+(n.any[0]?.message??'')).join(' '));
}
try {
 for(const width of [360,390,768,1280,1440]){
  const context=await browser.newContext({viewport:{width,height:width<600?844:900}});
  const page=await context.newPage();
  page.setDefaultTimeout(10000);
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  page.on('response',r=>{if(r.status()>=400) errors.push(r.status()+' '+r.url())});
  try {
   await page.goto(url);await page.evaluate(()=>document.fonts.ready);
   await page.waitForFunction(()=>document.fonts.check('16px Kalam') && document.fonts.check('36px "Oleo Script"'));
   assert.ok(await page.locator('.hero-photo').evaluate(img=>img.naturalWidth>0));
   assert.equal(await page.locator('html').evaluate(n=>n.scrollWidth<=innerWidth),true);
   await painted(page.frameLocator('[data-scene="flow"] iframe').locator('canvas'));
   await page.locator('.metal-slot').hover();
   const metal=page.frameLocator('.metal-slot iframe');
   await page.locator('.hero-acts [data-slide]').first().hover();
   await page.waitForFunction(()=>getComputedStyle(document.querySelector('.hero-acts [data-slide]').children[1]).opacity==='1');
   assert.match(await metal.locator('#btn').getAttribute('href'),/wa.me\/255767644444/);
   assert.ok(await metal.locator('canvas').evaluate(n=>Boolean(n.getContext('webgl2'))));
   assert.ok(await page.locator('.metal-slot a').evaluate(n=>getComputedStyle(n).color !== 'rgba(0, 0, 0, 0)' && n.textContent.trim()==='Book a table'));
   if(width===360 || width===1440) await page.screenshot({path:resultsDir+'/hero-'+width+'.png'});
   if(width<741){
     await page.locator('#navToggle').click();await page.locator('#mobileNav a[href="#cafe"]').click();
     assert.equal(await page.locator('#navToggle').getAttribute('aria-expanded'),'false');
   } else {
     await page.locator('.dock-nav a').first().hover();
     assert.equal(await page.locator('.dock-nav').getAttribute('data-dock-state'),'active');
   }
   const opener=page.locator('.menu-invite button');
   await opener.click();
   assert.equal(await page.locator('.menu-entry').count(),entries.length);
   assert.equal(await page.locator('.house-signature').count(),18);
   assert.equal(await page.locator('#menuClose').evaluate(n=>document.activeElement===n),true);
   await page.keyboard.press('Shift+Tab');
   assert.ok(await page.locator('#menuDialog').evaluate(n=>n.contains(document.activeElement)));
   await page.getByRole('button',{name:'Coffee & tea',exact:true}).click();
   await page.locator('#menuSearch').fill('cocoa');
   assert.equal(await page.locator('.menu-entry').count(),1);
   await page.locator('#menuSearch').fill('unmatched-query');await page.locator('.menu-noresults').waitFor();
   await page.keyboard.press('Escape');
   assert.equal(await opener.evaluate(n=>n===document.activeElement),true);
   await opener.click();
   if(width===390) {await page.screenshot({path:resultsDir+'/menu-390.png'});await audit(page,'menu')}
   await at(page,'.menu-cloth');
   const cloth=page.frameLocator('.menu-cloth iframe').locator('canvas');
   await cloth.waitFor();
   await cloth.evaluate(canvas=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
   assert.ok(await cloth.evaluate(canvas=>canvas.width>1 && Boolean(canvas.getContext('webgl2')||canvas.getContext('webgl'))));
   if(width===1280)await cloth.screenshot({path:resultsDir+'/cloth.png'});
   await page.locator('#menuClose').click();
   assert.equal(await page.locator('.menu-cloth iframe').count(),0);
   await at(page,'.gallery-heading');
   await painted(page.frameLocator('.gallery-heading iframe').locator('canvas'));
   for(const [kind,count] of [['filmstrip',20],['wave',6]]){
     const sel='[data-scene="'+kind+'"]';await at(page,sel);
     const frame=page.frameLocator(sel+' iframe');
     await frame.locator('.card[aria-current="true"]').waitFor();
     assert.equal(await frame.locator('.card').count(),count);
     const before=await frame.locator('[aria-current="true"]').getAttribute('data-index');
     await page.locator('[data-controls="'+kind+'"] button').last().click();
     await page.waitForFunction(({sel,before})=>document.querySelector(sel+' iframe')?.contentDocument?.querySelector('[aria-current=true]')?.dataset.index!==before,{sel,before});
     if(width===1280)await page.locator(sel).screenshot({path:resultsDir+'/'+kind+'.png'});
   }
   await page.getByRole('button',{name:'Breakfast',exact:true}).click();
   assert.equal(await page.locator('[data-scene=filmstrip] article').count(),5);
   await at(page,'.drinks-photo');await painted(page.locator('.condensation canvas'));
   await at(page,'.garden-drift');await painted(page.frameLocator('.garden-drift iframe').locator('canvas'));
   await at(page,'.curved-gallery');
   await page.locator('.gallery__canvas').waitFor();
   if(width===1280)await page.locator('.curved-gallery').screenshot({path:resultsDir+'/gallery.png'});
   const photo=page.locator('#photoTrack button').first();await photo.click();
   assert.ok(await page.locator('#lightboxImage').evaluate(n=>n.complete && n.naturalWidth>0));await page.keyboard.press('Escape');
   assert.equal(await photo.evaluate(n=>n===document.activeElement),true);
   assert.ok(await page.locator('.visit-actions a').first().evaluate(a=>a.href.includes('maps.app.goo.gl/')));
   await page.locator('.newsletter-footer__form').scrollIntoViewIfNeeded();
   assert.equal(await page.locator('.newsletter-footer__form').getAttribute('href'),'mailto:hello@hugamug.tz');
   await page.emulateMedia({reducedMotion:'reduce'});
   await at(page,'.hero');await page.waitForFunction(()=>!document.querySelector('iframe'));
   assert.equal(await page.locator('.hero-acts a[href*="wa.me"]').isVisible(),true);
   await page.getByRole('button',{name:'All 20',exact:true}).click();
   assert.equal(await page.locator('[data-scene=filmstrip] article').count(),20);
   assert.ok(await page.locator('img[src^="/photos/"]').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>{i.loading='eager';return i.decode()}));return imgs.every(i=>i.naturalWidth>0)}));
   if(width===1440)await audit(page,'page');
   console.log(width+'px — interaction checks completed');
  }catch(error){console.error(width+'px '+error.message);failures.push(width+'px '+error.message)}
  finally {failures.push(...errors.map(e=>width+'px '+e));await context.close()}
 }
 const touch = await browser.newContext({isMobile:true,hasTouch:true,deviceScaleFactor:2,viewport:{width:390,height:844}});
 const page = await touch.newPage();
 await page.addInitScript(() => {
   const getContext = HTMLCanvasElement.prototype.getContext;
   HTMLCanvasElement.prototype.getContext = function(type,...options) {
     return type.includes('webgl') ? null : getContext.call(this,type,...options);
   };
 });
 await page.goto(url);
 await page.locator('#navToggle').tap();
 await page.locator('#mobileNav [data-open-menu]').tap();
 await at(page,'.menu-cloth');
 await page.waitForFunction(()=>document.querySelector('.menu-cloth span').checkVisibility() && !document.querySelector('.menu-cloth iframe'));
 await page.keyboard.press('Escape');
 assert.equal(await page.locator('#navToggle').evaluate(n=>n===document.activeElement),true);
 await at(page,'.curved-gallery');
 await page.locator('#photoTrack button').first().tap();
 assert.ok(await page.locator('#lightbox').isVisible());
 await touch.close();
 console.log('Touch navigation, focus restoration and WebGL fallback checks completed');
} finally {await browser.close();await new Promise(resolve=>server.httpServer.close(resolve))}
if(failures.length){console.error([...new Set(failures)].join('\n'));process.exitCode=1}
