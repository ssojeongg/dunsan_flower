import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const isProdOnGhPages = process.env.VITE_DEPLOY_TARGET === 'GH_PAGES';

export default defineConfig({
  plugins: [react()],
  base: isProdOnGhPages ? '/dunsan_flower/' : '/',
});
