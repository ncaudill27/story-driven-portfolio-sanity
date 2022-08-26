export default {
  title: "Decorated Text",
  name: "decoratedText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      marks: {
        decorators: [{ title: "Emphasis", value: "em" }],
        annotations: [],
      },
      lists: [],
    },
  ],
};
