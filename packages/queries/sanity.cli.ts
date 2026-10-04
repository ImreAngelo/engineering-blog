import {defineCliConfig} from 'sanity/cli'

// Used for typegen only
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'typegen',
    dataset: 'production',
  },
  typegen: {
    path: './src/queries/**/*.ts',
    schema: '../studio/schema.json',
    generates: './src/sanity.types.ts',
    overloadClientMethods: false,
  },
})
