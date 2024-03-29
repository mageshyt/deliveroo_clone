import { client } from "./sanity.client";

export const fetchRestaurants = async () => {
  const query = `*[_type == "restaurant"]{
   "image":image.asset->url

    }
`;
  const response = await client.fetch(query);
  console.log(response);
};

export const fetchFeatured = async () => {
  const query = `*[_type == "feature"]{
 name,
  short_description,
  _id,
  
  restaurants[]->{
    ...,
      "image":image.asset->url,
    dishes[]->{
      name,
     "price":Price,
      "image":dish_image.asset->url,
      short_description,
  "id":_id
    },
    "genre":type->name
  }
}`;

  const response = await client.fetch(query);
  return response;
};
