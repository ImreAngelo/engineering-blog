import { CSSProperties } from "react";
import List from "./list";
import "./header.css";
import Avatar from "../avatar";

type HeaderStyleOptions = {
    color?: string;
    categories?: string[];
}

export default async function Header({ 
    title, 
    publishedAt,
    options: {
        color = "red",
        categories = ["Uncategorized"]
    } = {},
    style
}: {
    title: string | null,
    publishedAt: string | null,
    options?: HeaderStyleOptions,
    style?: CSSProperties
}) {
    return (
        <div style={{
            backgroundColor: color,
            color: "black",
            padding: "1rem"
        }}>
            <div style={{
                margin: "0 auto",
                ...style
            }}>
                <List list={categories}/>
                <h1 style={{
                    fontSize: "2.625rem",
                    lineHeight: "3.4rem",
                    padding: "0"
                }}>{title ?? "Uten tittel"}</h1>
                <div>
                    <Avatar />
                </div>
                <p>Published: {publishedAt ?? "Unknown date"}</p>
            </div>
        </div>
    )
}