import { CSSProperties } from "react";
import List from "./list";
import "./header.css";
import Avatar from "../../../../../packages/wrapper-next/src/components/Avatar";
import { Author } from "@engineering-blog/next";
import { client } from "@/sanity/client";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

type HeaderStyleOptions = {
    color?: string;
    categories?: string[];
}

export default async function Header({ 
    title, 
    publishedAt,
    author,
    options: {
        color = "red",
        categories = ["Uncategorized"]
    } = {},
    style
}: {
    title: string | null,
    publishedAt: string | null,
    author: Author
    options?: HeaderStyleOptions,
    style?: CSSProperties
}) {
    const date = (new Date(publishedAt!)).toDateString();

    return (
        <div style={{
            backgroundColor: color,
            color: "black",
            padding: "1rem"
        }}>
            <div style={{
                margin: "0 auto",
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
                ...style
            }}>
                <List list={categories}/>
                <h1 style={{
                    fontSize: "2.625rem",
                    lineHeight: "3.4rem",
                    padding: "0"
                }}>{title ?? "Uten tittel"}</h1>
                <div style={{
                    display: "flex",
                    gap: "0.88rem",
                }}>
                    <div style={{ width: "32px", height: "32px", flexShrink: 0 }}>
                        <Avatar image={urlFor(author.image!)?.url()}/>
                    </div>
                    <span>
                        <p>Written by {author.name}</p>
                        <p>{/*author.position*/} on {date}</p>
                    </span>
                </div>
                {/* <p>Published: {publishedAt ?? "Unknown date"}</p> */}
            </div>
        </div>
    )
}


const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? createImageUrlBuilder({ projectId, dataset }).image(source)
		: null;
