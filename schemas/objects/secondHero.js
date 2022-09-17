export default {
  name: "secondHero",
  title: "Second Hero",
  type: "object",
  description:
    'Optional image. If set this will turn into a "Dual Hero" on the frontend',
  fields: [
    {
      name: "secondHeroImage",
      type: "mainImage",
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
