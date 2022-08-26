export default {
  name: "mainImage",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  validation: (Rule) => Rule.required().error("Must have a main image."),
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "title",
    },
  },
};
