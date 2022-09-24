import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "filmPage",
  title: "Film Page",
  type: "document",
  fields: [
    {
      name: "filmHero",
      title: "Film Hero Image",
      type: "mainImage",
    },
    {
      name: "filmIntro",
      title: "Film Intro",
      type: "decoratedText",
      validation: (Rule) => Rule.custom(minBlockCount).warning(),
    },
  ],
};
