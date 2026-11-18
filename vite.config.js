import { defineConfig } from 'vite';
const scenes = ['flow','drift','heading','filmstrip','wave','metal','cloth'];
export default defineConfig({build:{rollupOptions:{input:['index.html', ...scenes.map(name => 'scenes/' + name + '.html')]}}});
