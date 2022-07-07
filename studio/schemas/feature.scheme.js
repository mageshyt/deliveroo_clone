export const Feature = {
  name: "feature",
  Title: "Feature",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Feature card name",
      type: "string",
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "restaurant" }],
        },
      ],
    },
  ],
};
