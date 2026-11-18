import {preview} from 'vite';
import {launch} from 'chrome-launcher';
import lighthouse from 'lighthouse';
const server=await preview({preview:{host:'127.0.0.1',port:0}});
const chrome=await launch({chromePath:process.env.CHROME_BIN,chromeFlags:['--headless','--no-sandbox','--enable-unsafe-swiftshader','--disable-dev-shm-usage']});
try {
  const result=await lighthouse('http://127.0.0.1:'+server.httpServer.address().port,{
    port:chrome.port, logLevel:'error',onlyCategories:['performance'],disableFullPageScreenshot:true
  });
  const {categories,audits,runtimeError}=result.lhr;
  if(runtimeError)throw Error(runtimeError.message);
  console.log(JSON.stringify({
    mobilePerformance:Math.round(categories.performance.score*100),
    LCP_ms:Math.round(audits['largest-contentful-paint'].numericValue),
    TBT_ms:Math.round(audits['total-blocking-time'].numericValue),
    CLS:audits['cumulative-layout-shift'].numericValue
  }));
} finally {await chrome.kill();await new Promise(resolve=>server.httpServer.close(resolve))}
