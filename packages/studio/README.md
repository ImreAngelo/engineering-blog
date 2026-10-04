# @engineering-blog/studio

Sanity Studio plugin that adds the blog schema (posts, authors, categories, rich body content) and the input plugins it relies on.

```sh
pnpm add @engineering-blog/studio
```

```ts
// sanity.config.ts
import {defineConfig} from 'sanity'
import {blogPlugin} from '@engineering-blog/studio'

export default defineConfig({
  // ...
  plugins: [blogPlugin()],
})
```

Requires `sanity` ^6.17.

Fetch content on the frontend with [`@engineering-blog/queries`](https://www.npmjs.com/package/@engineering-blog/queries).
