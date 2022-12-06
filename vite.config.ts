import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs"

export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync('/Users/kubilayturgut/ssl/kubilayhome-key.pem'),
      cert: fs.readFileSync('/Users/kubilayturgut/ssl/kubilayhome.pem'),
    }
  },
})