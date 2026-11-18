import menu from './menu.json';
import {featured, signatures, money} from './dishes';
import {photos} from './photos';
import {enhanceControls, observeEffect} from './effects';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
function action(label, callback) {
  const button = el('button','',label);
  button.type = 'button';
  button.addEventListener('click',callback);
  return button;
}

const categories = ['All 20', ...new Set(featured.map(dish => dish.category))];
const filters = $('#dishFilters');
function drawCards(kind, dishes, category = '') {
  const zone = $('[data-scene="'+kind+'"]');
  const list = zone.querySelector('[data-fallback]');
  list.replaceChildren(...dishes.map(dish => {
    const card = el('article');
    if (dish.image) {
      const image = new Image(); image.alt = dish.name; image.loading = 'lazy'; image.src = dish.image;
      card.append(image);
    }
    card.append(el('h3','',dish.name),el('p','',dish.description),el('strong','',money(dish.price)));
    return card;
  }));
  zone.dataset.category = category;
  zone.dispatchEvent(new Event('reload-scene'));
  list.scrollLeft = 0;
}
for (const category of categories) {
  const button = action(category, () => {
    const all = category === categories[0];
    drawCards('filmstrip',all ? featured : featured.filter(dish => dish.category === category),all ? '' : category);
    for (const other of filters.children) other.setAttribute('aria-pressed',String(other === button));
  });
  button.className = 'chip';
  button.setAttribute('aria-pressed',String(category === categories[0]));
  filters.append(button);
}
drawCards('filmstrip',featured); drawCards('wave',signatures);
for (const group of $$('[data-controls]')) {
  const zone = $('[data-scene="'+group.dataset.controls+'"]');
  [...group.children].forEach((button,index) => button.onclick = () => {
    const frame = zone.querySelector('iframe');
    if(frame) frame.contentWindow.dispatchEvent(new KeyboardEvent('keydown',{key:index?'ArrowRight':'ArrowLeft'}));
    else zone.firstElementChild.scrollBy({left:(index?1:-1)*zone.firstElementChild.firstElementChild.offsetWidth,behavior:'instant'});
  });
}

const dialog = $('#menuDialog'), search = $('#menuSearch'), tabs = $('#menuCats'), result = $('#menuResults'), scroller = $('#menuScroll');
let category = -1;
const live = el('p','sr-only');live.setAttribute('role','status');result.before(live);
function renderMenu() {
  const query = search.value.trim().toLocaleLowerCase();
  result.replaceChildren();
  let count = 0;
  menu.forEach((section, index) => {
    if (category !== -1 && category !== index) return;
    const grid = el('div','menu-groups');
    for (const [label,items] of section.groups) {
      const matches = items.filter(([name,,description]) => [name,description,label,section.title].join(' ').toLocaleLowerCase().includes(query));
      if (!matches.length) continue;
      const group = el('div','menu-group');
      group.append(el('h4','',label));
      for (const [name, price, description] of matches) {
        const article = el('article','menu-entry');
        article.append(el('h5','',name));
        if(price !== null) article.append(el('span','entry-price',(Array.isArray(price)?price:[price]).map(money).join(' / ')));
        if(description) article.append(el('p','',description));
        group.append(article);count++;
      }
      grid.append(group);
    }
    if (!grid.childElementCount) return;
    const node = el('section','menu-section'), head = el('div','menu-section-head');
    head.append(el('h3','',section.title));node.append(head,grid);result.append(node);
  });
  if (!count) result.append(el('p','menu-noresults','No matches. Try a different dish, ingredient or category.'));
  live.textContent = count + ' matching entries';
  [...tabs.children].forEach((button,i) => button.setAttribute('aria-pressed',String(category === i-1)));
  scroller.scrollTo({top:0,behavior:'instant'});
}
['All sections',...menu.map(section => section.title)].forEach((label,i) => tabs.append(action(label,() => {category=i-1;renderMenu()})));
const mobileNav=$('#mobileNav'),toggle=$('#navToggle');
function setNav(open) {
  mobileNav.classList.toggle('open',open);mobileNav.inert=!open;
  toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  toggle.textContent=open?'×':'☰';
}
toggle.onclick = () => setNav(mobileNav.inert);
mobileNav.querySelectorAll('a').forEach(a => a.onclick=() => setNav(false));
document.addEventListener('keydown',event => {
  if(event.key==='Escape' && !mobileNav.inert){setNav(false);toggle.focus()}
});
function overlayChanged() {
  document.body.classList.toggle('modal-open',Boolean(document.querySelector('dialog[open]')));
  document.dispatchEvent(new Event('cafe-overlay'));
}
let opener;
function openMenu(button) {
  opener = mobileNav.contains(button) ? toggle : button;
  setNav(false);category = button.dataset.openMenu==='drinks'?6:-1;
  search.value='';dialog.showModal();renderMenu();overlayChanged();$('#menuClose').focus();
}
$$('[data-open-menu]').forEach(button => button.onclick = () => openMenu(button));
$('#menuClose').onclick = () => dialog.close();
search.oninput = renderMenu;
dialog.addEventListener('keydown',event => {
  if (event.key==='Escape'){event.preventDefault();event.stopPropagation();dialog.close()}
},true);
dialog.onclose = () => {overlayChanged();opener?.focus({preventScroll:true})};

const box = $('#lightbox');
const gallery = $('#photoTrack');
function enlarge(name,key) {
  $('#lightboxImage').src='/photos/'+key+'.webp';$('#lightboxImage').alt=name;
  $('#lightboxCaption').textContent=name;box.showModal();overlayChanged();
}
for (const [name,key] of photos) {
  const figure=el('figure'),button=action('',()=>enlarge(name,key)),img=new Image();
  img.alt=name;img.src='/photos/'+key+'.webp';
  if (['garden','veranda','evening','seafood'].includes(key)) img.src='/photos/'+key+'-small.webp';
  img.loading='lazy';button.setAttribute('aria-label','Enlarge '+name);button.append(img);figure.append(button);gallery.append(figure);
}
$('#lightboxClose').onclick=()=>box.close();
box.onclick=event=>{if(event.target===box)box.close()};
box.onclose=overlayChanged;

enhanceControls();
$$('[data-scene], [data-effect]').forEach(observeEffect);
if('IntersectionObserver' in window){
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){entry.target.classList.add('in');reveal.unobserve(entry.target)}
  }));
  $$('.reveal').forEach(node=>reveal.observe(node));
} else $$('.reveal').forEach(node=>node.classList.add('in'));
