export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroBanner",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "leadParagraph",
      title: "Lead Paragraph",
      type: "decoratedText",
    },
    {
      name: "featuredWork",
      title: "Featured Work",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "heroBanner",
    },
  },
};
