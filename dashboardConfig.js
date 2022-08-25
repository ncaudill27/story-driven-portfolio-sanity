export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "62ffe00e1f6b4b27cbbbc098",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-portfolio-studio-qz582nqm",
                  apiId: "501626c4-1382-494b-90f2-7f7931b730cb",
                },
                {
                  buildHookId: "62ffe00f3a95cb27b050e5a3",
                  title: "Portfolio Website",
                  name: "sanity-gatsby-portfolio-web-oou6ya68",
                  apiId: "173b1169-3ed8-410c-8e52-6c441c1a5d62",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "Sanity CMS GitHub repo",
            value: "https://github.com/ncaudill27/brett-davis-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-portfolio-web-oou6ya68.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    {
      name: "project-users",
    },
  ],
};
