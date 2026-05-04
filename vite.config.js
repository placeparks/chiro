import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const schedulerUrl = env.VITE_SCHEDULER_URL || ''

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: schedulerUrl
        ? {
            '/api/scheduler': {
              target: schedulerUrl,
              changeOrigin: true,
              followRedirects: true,
              secure: true,
              rewrite: (path) => path.replace(/^\/api\/scheduler/, ''),
            },
          }
        : undefined,
    },
  }
})
