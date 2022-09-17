export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      // TODO add 70 char maximum (if using Twitter)
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: {
        source: "name",
      },
    },
    {
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Analog", value: "analog" },
          { title: "Digital", value: "digital" },
          { title: "Film", value: "film" },
        ],
      },
    },
    {
      name: "hero",
      title: "Hero",
      type: "mainImage",
    },
    {
      name: "secondHero",
      title: "Second Hero",
      type: "secondHero",
    },
    {
      name: "brief",
      title: "Brief Description",
      type: "decoratedText",
      description:
        "This will be the summary of the project seen from its preview on the home screen. In addition to being a value that will help SEO.",
    },
    {
      name: "intro",
      title: "Intro",
      type: "decoratedText",
      description:
        "First paragraph viewers will see when they visit a project. If possible it would be nice to make it different from the Brief description but if not wanted or possible this value will default to a copy of the Brief description.",
    },
    {
      name: "subject",
      title: "Subject",
      type: "decoratedText",
      description:
        "A thoughtful description of the people/place/thing being photographed.",
    },
    {
      name: "elements",
      title: "Elements of shoot",
      type: "array",
      of: [{ type: "element" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "mainImage" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
