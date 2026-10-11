import { client } from '@/sanity/client';
// import { headers } from 'next/headers';

// TODO: Date on build, not on revalidate
const now = new Date();

export default async function sitemap() {
    // headers(); // BUG: Workaround to force ISR
    const url = "localhost"; // TODO: Get from env

	const blogposts = await client.getPosts().then(r => (r.map((post) => ({
		url: `https://${url}/${post.slug.current}/`,
		// lastModified: new Date(post.modified) // TODO: Add a 'last modified' field
        lastModified: post.publishedAt
	}))));

	return [
		{ url: `https://${url}/`, lastModified: now },
		...blogposts
	]
}

export const maxDuration = 2;
export const revalidate = 60;