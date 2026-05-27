import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
  include: ['src/**/*.{js,jsx,ts,tsx}'],
  exclude: [
    'src/**/*.test.{js,jsx,ts,tsx}',
    'src/**/*.spec.{js,jsx,ts,tsx}',
    'src/index.{js,jsx,ts,tsx}',
    'src/__tests__/setupTests.{js,ts}',
    'src/**/*.d.ts'
  ],
  thresholds: {
      "statements": 80,
      "branches": 50,
      "functions": 50,
      "lines": 50
  }
},

  },
  
})