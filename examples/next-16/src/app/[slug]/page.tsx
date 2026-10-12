import { Metadata, ResolvingMetadata } from "next";
import { PostBody } from "@engineering-blog/next";
import { client } from "@/sanity/client";
import Header from "@/components/header";

const options = { next: { revalidate: 30 } };

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const post = await client.getPost(params, options);
 
	return {
		title: post?.title,
		// description: post?.short, // TODO: Add short description(s)
	}
}

export default async function PostPage({ params, searchParams }: Props) {
	const post = await client.getPost(params, options);
	// TODO: Handle missing author etc. and default/fallbacks
    const author = await client.getAuthor(post?.author?._id ?? "admin");

	return post ? (
		<main>
			<Header {...post} author={author!} options={{
				color: post.category?.backgroundColor?.hex ?? '#aa0000',
				categories: [post.category?.title || ""]
			}} style={{
				maxWidth: "768px",
			}}>
				{/* <Title>{post.title}</Title> */}
				{/* <Line>
						<Author/>
						<
					</Line> */}
			</Header>
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
				<PostBody {...post}/>
			</div>
		</main>
	) : (
		<main>
			TODO: Error page for post not found!
		</main>
	);
}