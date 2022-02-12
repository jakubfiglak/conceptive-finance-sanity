import { FcTemplate as icon } from "react-icons/fc";
import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "offerCard",
  title: "Offer Card",
  type: "document",
  icon,
  fields: [
    orderRankField({ type: "offerCard" }),
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
  ],
};
