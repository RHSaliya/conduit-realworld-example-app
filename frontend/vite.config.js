import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      exclude: ['js-big-decimal']
    },
    server: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: process.env.DB_TARGET ?? 'http://localhost:3001'
        }
      }
    },
    preview: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: process.env.DB_TARGET ?? 'http://localhost:3001'
        }
      }
    },

  })
};
