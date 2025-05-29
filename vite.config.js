import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ViteFaviconsPlugin from 'vite-plugin-favicon';

const isProdOnGhPages = process.env.VITE_DEPLOY_TARGET === 'GH_PAGES';

export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "favicon.ico",
      favicons: {
        path: "/"
      },
    })
  ],
  base: isProdOnGhPages ? '/dunsan_flower/' : '/',
});
