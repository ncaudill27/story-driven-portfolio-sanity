import minBlockCount from "../../validations/minimumBlockCount.utils";

export default {
  name: "element",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Element",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "decoratedText",
      description:
        "This field will create a little blurb of text to populate the story view.",
      validation: (Rule) => Rule.custom(minBlockCount).warning(
          "Don't be shy, if users made it this far they find your content interesting. Give them what they want!"
        ),
    },
  ],
};
