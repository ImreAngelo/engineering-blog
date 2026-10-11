import type { BlockContent } from "@engineering-blog/queries";
import { portableTextComponents } from "..";
import { PortableText } from "next-sanity"

type Props = {
    body: BlockContent | null,
    // components: // TODO: Add support for adding custom components
}

export default function PostBody({ body } : Props) {
    return Array.isArray(body) && <PortableText value={body} components={portableTextComponents} />;
}