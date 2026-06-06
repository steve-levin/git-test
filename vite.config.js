import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        properties: resolve(__dirname, 'properties/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        brokerage: resolve(__dirname, 'services/brokerage/index.html'),
        consulting: resolve(__dirname, 'services/consulting/index.html'),
        propertyManagement: resolve(__dirname, 'services/property-management/index.html'),
        news: resolve(__dirname, 'news/index.html'),
        staff: resolve(__dirname, 'staff/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
})
