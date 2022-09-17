export default {
  type: "object",
  name: "contactPoints",
  title: "Contact Points",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  fields: [
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "social",
    },
  ],
};
