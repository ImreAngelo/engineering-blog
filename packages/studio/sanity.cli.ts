import {defineCliConfig} from 'sanity/cli'

// Used for schema extraction only
export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'typegen',
    dataset: 'production',
  },
})
