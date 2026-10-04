import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {blogPlugin} from '@imreangelo/blog-core'

export default defineConfig({
	name: 'default',
	title: 'Template',

	projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
	dataset: 'production',

	plugins: [
		structureTool(), 
		visionTool(), 
		// presentationTool({
		// 	previewUrl: {initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN, previewMode: {enable: '/api/draft-mode/enable'}},
		// 	resolve: blogPresentationResolve({basePath: '/blog'}),
		blogPlugin()
	],
})
