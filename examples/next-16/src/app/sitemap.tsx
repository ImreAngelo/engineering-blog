import { client } from '@/sanity/client';

// TODO: Date on build, not on revalidate
const now = new Date();

export default async function sitemap() {
    const url = "https://localhost"; // TODO: Get from env

	const blogposts = await client.getPosts().then(r => (r.map((post) => ({
		url: `${url}/${post.slug.current}/`,
		// TODO: Add a 'last modified' field in post
        lastModified: post.publishedAt,
	}))));

	return [
		{ url: `${url}/`, lastModified: now },
		...blogposts
	]
}

export const maxDuration = 2;
export const revalidate = 60;