import "server-only"

import type {PortableTextComponents} from "next-sanity"
import CodeBlock from "./codeblock"
import LatexBlock from "./latex"

export {CodeBlock, LatexBlock}

export const portableTextComponents: PortableTextComponents = {
	types: {
		code: ({value}) => <CodeBlock value={value} />,
		latex: ({value}) => <LatexBlock value={value} />
	},
}
