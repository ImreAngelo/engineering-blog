import {definePlugin} from 'sanity'
import {codeInput} from '@sanity/code-input'
import {colorInput} from '@sanity/color-input'
import {latexInput} from 'sanity-plugin-latex-input'
import { types } from './schema'

export const blogPlugin = definePlugin</*{codeModes?: CodeMode[]} |*/ void>((opts) => ({
  name: 'blog-core',
  plugins: [codeInput(), colorInput(), latexInput()], // {codeModes: opts?.codeModes ?? defaultCodeModes}
  schema: { types: types }
}))

// export {blogPresentationResolve} from './presentation'