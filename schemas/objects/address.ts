export default {
  title: "Address",
  name: "address",
  type: "object",
  fields: [
    {
      name: "street",
      title: "Street",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "zipcode",
      title: "Zipcode",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
