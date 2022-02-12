// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import mainImage from "./objects/mainImage";
import seo from "./documents/seo";
import hero from "./documents/hero";
import about from "./documents/about";
import offerCard from "./documents/offerCard";
import pricingCard from "./documents/pricingCard";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    seo,
    hero,
    about,
    offerCard,
    pricingCard,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    mainImage,
  ]),
});
