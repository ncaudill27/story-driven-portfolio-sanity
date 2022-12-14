export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "contactImage",
      title: "Self Portrait",
      type: "image",
    },
    {
      name: "bio",
      title: "Bio",
      type: "decoratedText",
    },
    {
      name: "contactPoints",
      type: "contactPoints",
      title: "Contact Points",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "contactImage",
    },
  },
};
