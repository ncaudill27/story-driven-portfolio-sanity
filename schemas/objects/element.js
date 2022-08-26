export default {
  name: "element",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Element",
    },
    {
      name: "description",
      title: "Description",
      type: "decoratedText",
      description:
        "This field will create a little blurb of text to populate the story view.",
    },
  ],
};
