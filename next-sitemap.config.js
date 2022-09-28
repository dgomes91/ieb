/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://ieb.app.br/',
    generateRobotsTxt: true,
    sitemapSize: 7000,  // (optional)
    // ...other options
  }