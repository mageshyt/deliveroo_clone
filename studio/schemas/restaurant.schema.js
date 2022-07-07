export const Restaurant = {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Restaurant Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Restaurant Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number",
    },
    {
      name: "lng",
      title: "Longitude",
      type: "number",
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) =>
        Rule.min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
