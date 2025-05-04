
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: {
      host: '0.0.0.0',
      clientPort: 443,
      protocol: 'wss',
      timeout: 120000,
      overlay: false,
      path: '@vite/client',
      reconnect: 10
    }
  }
})
