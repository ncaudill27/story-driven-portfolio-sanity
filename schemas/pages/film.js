import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "filmPage",
  title: "Film Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Film Hero Image",
      type: "image",
    },
    {
      name: "intro",
      title: "Film Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
