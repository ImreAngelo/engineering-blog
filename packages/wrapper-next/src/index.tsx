import {createClient, type ClientConfig, type FilteredResponseQueryOptions, type PortableTextComponents, type SanityClient} from "next-sanity"
import {POST_QUERY, POSTS_QUERY, type POST_QUERY_RESULT, type POSTS_QUERY_RESULT} from "@engineering-blog/queries"
import CodeBlock from "./codeblock"
import LatexBlock from "./latex"

import PostBody from "./components/PostBody"

export {CodeBlock, LatexBlock, PostBody}

export type Post = NonNullable<POST_QUERY_RESULT>
// export type Posts = NonNullable<POSTS_QUERY_RESULT>

export const portableTextComponents: PortableTextComponents = {
	types: {
		code: ({value}) => <CodeBlock value={value} />,
		latex: ({value}) => <LatexBlock value={value} />
	},
}

/// Extends SanityClient
export type BlogClient = SanityClient & {
	getPost(params: Promise<{ slug: string; }>, options?: FilteredResponseQueryOptions): Promise<POST_QUERY_RESULT>;
	getPosts(options?: FilteredResponseQueryOptions): Promise<POSTS_QUERY_RESULT>;
}

export function withBlog(client: SanityClient): BlogClient {
	return Object.assign(client, {
		getPost: async (params: Promise<{ slug: string; }>, options: FilteredResponseQueryOptions = {}) =>
			client.fetch<POST_QUERY_RESULT>(POST_QUERY, await params, options),
		getPosts: (options: FilteredResponseQueryOptions = {}) =>
			client.fetch(POSTS_QUERY, {}, options),
	})
}

/// Equivalent to withBlog(createClient(config));
export function createClientWithBlog(config: ClientConfig): BlogClient {
	return withBlog(createClient(config))
}