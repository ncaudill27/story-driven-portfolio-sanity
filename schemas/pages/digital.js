import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "digitalPage",
  title: "Digital Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Digital Hero Image",
      type: "image",
    },
    {
      name: "intro",
      title: "Digital Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
