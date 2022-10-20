import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "analogPage",
  title: "Analog Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Analog Hero Image",
      type: "image",
    },
    {
      name: "intro",
      title: "Analog Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
