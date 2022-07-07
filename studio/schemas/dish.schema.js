export const Dishes= {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "dish_image",
      title: "Dish Image",
      type: "image",
      required: true,
    },
    {
      name: "Price",
      title: "Price",
      type: "number",
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
  ],
};
