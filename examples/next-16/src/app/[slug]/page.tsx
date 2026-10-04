import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import { POST_QUERY, type POST_QUERY_RESULT } from "@engineering-blog/queries";
import Link from "next/link";
import { portableTextComponents } from "@engineering-blog/wrapper-next";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<POST_QUERY_RESULT>(POST_QUERY, await params, options);
  // const postImageUrl = post.
  //   ? urlFor(post.image)?.width(550).height(310).url()
  //   : null;
  return post ? (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {/* {postImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )} */}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {post.publishedAt ?? "Unknown date"}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
    </main>
  ) : (
    <main>
      TODO: Post not found error page!
    </main>
  );
}