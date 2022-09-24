import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "digitalPage",
  title: "Digital Page",
  type: "document",
  fields: [
    {
      name: "digitalHero",
      title: "Digital Hero Image",
      type: "mainImage",
    },
    {
      name: "digitalIntro",
      title: "Digital Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
