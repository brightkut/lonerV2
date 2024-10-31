import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return; // Ignore this warning
        warn(warning);
      },
    },
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
