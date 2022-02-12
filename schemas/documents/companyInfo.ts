import { FcAddressBook as icon } from "react-icons/fc";

export default {
  name: "companyInfo",
  title: "Company Info",
  type: "document",
  icon,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logoBlack",
      title: "Logo Black",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "logoWhite",
      title: "Logo White",
      type: "mainImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
