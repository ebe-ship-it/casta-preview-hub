import { createTopDockController } from './threeui/topDockController';
import slide from './threeui/sliding-text.html?raw';

export function enhanceControls() {
  const dock = document.querySelector('.dock-nav');
  for (const link of dock.children) link.dataset.dockItem = '';
  createTopDockController(dock, () => ({ proximity: 90, spring: .16, damping: .72, widthGrowth: 8, heightGrowth: 2, drop: 2 }));
  for (const control of document.querySelectorAll('main [data-open-menu], .hero-acts>a, .experiences a, .visit-actions a')) {
    const label = control.textContent.trim();
    control.dataset.slide = '';
    control.innerHTML = slide;
    control.children[0].textContent = control.children[1].textContent = label;
  }
}

const titles = { filmstrip:'Featured dishes', wave:'Signature dishes', metal:'Table reservations', cloth:'Woven café linen', flow:'', drift:'', heading:'' };
const motion = matchMedia('(prefers-reduced-motion: reduce)');
export function observeEffect(host) {
  let visible = false, active = false, generation = 0, cleanup;
  const kind = host.dataset.scene || host.dataset.effect;
  const dialog = document.querySelector('#menuDialog');
  function stop() {
    active = false;
    generation++;
    cleanup?.();
    cleanup = null;
    host.classList.remove('scene-active');
  }
  async function start() {
    active = true;
    const ticket = ++generation;
    const current = () => generation === ticket;
    try {
      if (kind === 'gallery') {
        const [{createRoot}, {createElement}, {Gallery}] = await Promise.all([import('react-dom/client'), import('react'), import('./threeui/Gallery.tsx')]);
        if (!current()) return;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('webgl');
        if (!context) return;
        context.getExtension('WEBGL_lose_context')?.loseContext();
        const root = createRoot(host);
        root.render(createElement(Gallery,{speed:.36}));
        cleanup = () => root.unmount();
      } else if (kind === 'condensation') {
        const {createCondensationRenderer} = await import('./threeui/condensationRenderer');
        if (!current()) return;
        const canvas = document.createElement('canvas');
        host.append(canvas);
        const effect = createCondensationRenderer(canvas, () => ({speed:.6,dropAmount:innerWidth<720?.45:.75,opacity:1}));
        const size = () => effect.resize(host.clientWidth,host.clientHeight);
        const observer = new ResizeObserver(size);
        observer.observe(host); size();
        let frame;
        const render = time => {effect.render(time); frame=requestAnimationFrame(render)};
        frame = requestAnimationFrame(render);
        cleanup = () => { cancelAnimationFrame(frame); observer.disconnect(); effect.dispose(); canvas.remove() };
      } else {
        const frame = document.createElement('iframe');
        frame.title = titles[kind] || 'Decorative café animation';
        if (!titles[kind] || kind === 'cloth') { frame.tabIndex = -1; frame.setAttribute('aria-hidden','true') }
        frame.src = '/scenes/' + kind + '.html' + (host.dataset.category ? '?category=' + encodeURIComponent(host.dataset.category) : '');
        cleanup = () => frame.remove();
        host.append(frame);
      }
      host.classList.add('scene-active');
    } catch (error) { stop(); console.warn('Café effect unavailable:',kind,error.message) }
  }
  function sync() {
    const show = visible && !motion.matches && !document.hidden && (dialog.open === dialog.contains(host)) && !document.querySelector('#lightbox').open;
    if (show && !active) start();
    if (!show && active) stop();
  }
  new IntersectionObserver(([entry]) => {visible = entry.isIntersecting; sync()}).observe(host);
  for (const event of ['visibilitychange','cafe-overlay']) document.addEventListener(event,sync);
  motion.addEventListener('change',sync);
  host.addEventListener('reload-scene', () => {stop();sync()});
}
