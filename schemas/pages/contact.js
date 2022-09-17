export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "brettPortrait",
      title: "Self Portrait",
      type: "mainImage",
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
      media: "heroBanner",
    },
  },
};
