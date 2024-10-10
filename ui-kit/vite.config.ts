import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      name: 'ui-kit',
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'lib/main.ts'),
        'mantine/core': resolve(__dirname, 'lib/mantine/core.ts'),
      },
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './lib'),
    },
  },
})
