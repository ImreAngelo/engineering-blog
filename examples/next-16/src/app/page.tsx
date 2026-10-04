import Link from "next/link";
import { client } from "@/sanity/client";
import { POSTS_QUERY, type POSTS_QUERY_RESULT } from "@engineering-blog/queries";

const options = { next: { revalidate: 30 } };

// TODO: Get posts number n..N
export default async function IndexPage() {
  const posts = await client.fetch<POSTS_QUERY_RESULT>(POSTS_QUERY, {}, options);
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title ?? "Untitled post"}</h2>
              {/* <p>{new Date(post.publishedAt).toLocaleDateString()}</p> */}
              <p>{post.publishedAt ?? "Unknown date"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}