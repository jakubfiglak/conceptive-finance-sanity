import { FcBusinessContact as icon } from "react-icons/fc";

export default {
  name: "contact",
  title: "Contact",
  type: "document",
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
