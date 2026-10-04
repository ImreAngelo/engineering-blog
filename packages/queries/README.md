# @engineering-blog/queries

GROQ queries for the engineering blog, with TypeScript types generated from the schema in [`@engineering-blog/studio`](https://www.npmjs.com/package/@engineering-blog/studio). Releases of the two packages share a version number, so make sure both are on the same version.

```sh
pnpm add @engineering-blog/queries
```

```ts
import {POST_QUERY, type POST_QUERY_RESULT} from '@engineering-blog/queries'

const post = await client.fetch<POST_QUERY_RESULT>(POST_QUERY, {slug})
```

Only need the types? Import from `@engineering-blog/queries/types`. It has no runtime code.
