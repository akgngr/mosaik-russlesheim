export const prerender = true
//@ts-ignore
import { type QueryParams } from "sanity";
//@ts-ignore
import { sanityClient } from "sanity:client";

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const { result } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { filterResponse: false }
  );

  return {
    data: result,
  };
}
