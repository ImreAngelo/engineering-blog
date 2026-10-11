import { ReactNode } from "react";
import Link from "next/link";
import separator from "./separator";

export type ListProps<T> = {
    list: T[]
}

export default function List<T extends ReactNode>({ list }: ListProps<T>) {
    return (<nav>
        <ol className="flex list-none">
            <li key={-1} className="list-item"> {/* TODO: Make articles the root of all categories */}
                <Link href={"/"}>Artikler</Link>
                {separator}
            </li>
            { list.map((v, i) => (
                <li key={i} className="list-item">
                    <Link href={`/?category=${v}`}>{v}</Link> {/* TODO: Include category in search */}
                    {(i < list.length - 1) ? (separator) : (<></>)}
                </li>
            ))}
        </ol>
    </nav>)
}