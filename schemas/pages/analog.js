import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "analogPage",
  title: "Analog Page",
  type: "document",
  fields: [
    {
      name: "analogHero",
      title: "Analog Hero Image",
      type: "mainImage",
    },
    {
      name: "analogIntro",
      title: "Analog Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
