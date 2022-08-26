import React from "react";
import { AiOutlineHome } from "react-icons";

export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroBanner",
      title: "Title",
      type: "mainImage",
    },
    {
      name: "leadParagraph",
      title: "Lead Paragraph",
      type: "decoratedText",
    },
    {
      name: "featuredWork",
      title: "Featured Work",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "heroBanner",
    },
  },
};
