import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log("Env variable will be printed here", process.env.VITE_TESTING);
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001'
        }
      }
    },
    preview: {
      port: 3000,
      host: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001'
        }
      }
    },

  })
};
