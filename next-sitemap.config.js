/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://azws.it',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  alternateRefs: [
    { href: 'https://azws.it', hreflang: 'en' },
    { href: 'https://azws.it/it', hreflang: 'it' },
  ],
}
