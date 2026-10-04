// Studio config used only by `sanity schema extract` to produce schema.json for TypeGen.
import {defineConfig} from 'sanity'
import {blogPlugin} from './index'

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'typegen',
  dataset: 'production',
  plugins: [blogPlugin()],
})
