import {definePlugin} from 'sanity'
import {codeInput} from '@sanity/code-input'
// import {colorInput} from '@sanity/color-input'
// import {latexInput} from 'sanity-plugin-latex-input'
// import {post, author, category, blockContent} from './schema'
import { postType } from './schema/postType'

export const blogPlugin = definePlugin</*{codeModes?: CodeMode[]} |*/ void>((opts) => ({
  name: 'blog-core',
//   plugins: [codeInput({codeModes: opts?.codeModes ?? defaultCodeModes}), colorInput(), latexInput()],
//   schema: {types: [post, author, category, blockContent]},
  plugins: [codeInput()],
  schema: { types: [postType] }
}))

// export {blogPresentationResolve} from './presentation'