import { createClientWithBlog } from "@engineering-blog/next";
// import { createClient } from "next-sanity";

// withBlog(createClient(
export const client = createClientWithBlog({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});