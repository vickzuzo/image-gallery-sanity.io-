import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "75hh8oxb",
  dataset: "production",
  apiVersion: "2022-01-02",
  useCdn: true,
  token:
    "sk0l5MigQJAWejCJp9ZjjbYVsq1nT9kAvDsaCkJcMTzHYmh47VYmRnpYbMR74iZsEWY2HRIOTOZyzUNNvNovMaNTscc0dqlAOzUI2hKJDna4yOhgn73vHZz3Xm4rFsAwulC15Jf65GhZ44FFNuNQsTTs71YhHC1MOc4W2oZJsjR7FLD9wuVD",
});

// sanity_project_id

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
