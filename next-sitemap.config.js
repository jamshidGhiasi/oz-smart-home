/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.ozsmarthome.com.au",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/private/" },
      { userAgent: "*", allow: "/" },
    ],
  },
  // ...other options
};
