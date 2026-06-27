import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          const normalizedPath = filename.replace(/\\/g, '/');
          if (normalizedPath.includes('src/styles/')) {
            return content;
          }
          const variablesPath = path.resolve(__dirname, 'src/styles/_variables.scss').replace(/\\/g, '/');
          const mixinsPath = path.resolve(__dirname, 'src/styles/_mixins.scss').replace(/\\/g, '/');
          return `
            @use "${variablesPath}" as variables;
            @use "${variablesPath}" as *;
            @use "${mixinsPath}" as mixins;
            @use "${mixinsPath}" as *;
            ${content}
          `;
        }
      }
    }
  }
})

