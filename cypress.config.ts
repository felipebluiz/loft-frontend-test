import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
