import {defineConfig} from 'tsdown'

// CSS is left to the consuming Next.js app: imports are kept external and the
// stylesheets are copied next to the output so CSS modules keep working.
export default defineConfig({
  entry: ['src/index.tsx'],
  format: 'esm',
  dts: true,
  unbundle: true,
  deps: {neverBundle: [/\.css$/]},
  copy: [
    {from: 'src/text.module.css', to: 'dist'},
    {from: 'src/codeblock/code.module.css', to: 'dist/codeblock'},
  ],
})
