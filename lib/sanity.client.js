import SanityClientConstructor from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = new SanityClientConstructor({
  projectId: process.env.SANITY_PROJECT_ID || "teukbrl8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
