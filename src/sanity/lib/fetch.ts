import { createClient } from "next-sanity";


const client = createClient ({
    projectId : "v45r6xjb",
    dataset : "production",
    useCdn : true,
    apiVersion : "2025-01-15"
})
export async function sanityfetch({
    query,
    params = {},
  }: {
    query: string;
    params?: Record<string, any>;
  }) {
    try {
      return await client.fetch(query, params);
    } catch (error) {
      console.error("Sanity fetch error:", error);
      throw new Error("Failed to fetch data from Sanity");
    }
  }