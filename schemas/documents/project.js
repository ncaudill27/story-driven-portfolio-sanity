import HeroInput from "../../components/heroInput";

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
      validation: (Rule) => [
        Rule.required(),
        Rule.max(70).warning("Shorter names are usually better."),
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: {
        source: "name",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hero",
      title: "Hero",
      type: "image",
      description: "This field acts as a preview and is set automatically.",
      inputComponent: HeroInput,
    },
    {
      name: "brief",
      title: "Brief Description",
      type: "decoratedText",
      description:
        "This will be the summary of the project seen from its preview on the home screen. In addition to being a value that will help SEO.",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "elements",
      title: "Elements of shoot",
      type: "array",
      of: [{ type: "element" }],
      validation: (Rule) =>
        Rule.custom((elements) => {
          return elements.length > 0
            ? true
            : {
                message: "Add at least 3 elements for a better story view.",
                elements,
              };
        }),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: "Drag and drop multiple image files below.",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
  ],
};
