import { PortableText } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { portableTextComponents } from "@engineering-blog/next";
import { client } from "@/sanity/client";
import Header from "@/components/header";
import Link from "next/link";

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
  // const post = await client.fetch<POST_QUERY_RESULT>(POST_QUERY, await params, options);
  const post = await client.getPost(params, options);
  // const postImageUrl = post.
  //   ? urlFor(post.image)?.width(550).height(310).url()
  //   : null;

  console.log(post?.category?.backgroundColor?.hex);

  return post ? (
    <main>
      <Header {...post} options={{
        color: post.category?.backgroundColor?.hex ?? '#aa0000',
        categories: [post.category?.title || ""]
      }} style={{
        maxWidth: "768px",
      }}/>
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
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: ".9rem",
        margin: "0 auto",
        maxWidth: "768px",
        padding: "1.8rem .6rem"
      }}>
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
    </main>
  ) : (
    <main>
      TODO: Post not found error page!
    </main>
  );
}