import minBlockCount from "./minimumBlockCount.utils";

export default {
  name: "collectionPages",
  title: "Collection Introductions",
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
