/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ozsmarthome.com.au',
    generateRobotsTxt: true,
    generateRobotsTxt: {
        additionalSitemaps: [
            `${
              process.env.SITE_URL || "https://ozsmarthome.com.au"
            }/server-sitemap.xml`,
          ],
    }, // (optional)
    
    // ...other options
  }