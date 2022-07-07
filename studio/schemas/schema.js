// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import { Dishes } from "./dish.schema";
import category from "./category.schema";
import author from "./author";
import { Restaurant } from "./restaurant.schema";
import { Feature } from "./feature.scheme";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",

  types: schemaTypes.concat([Restaurant, Feature, category, Dishes]),
});
