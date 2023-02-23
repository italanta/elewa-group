const SitemapGenerator = require('sitemap-generator');
const path = require('path')

const generator = SitemapGenerator('http://localhost:4200', {
    filepath: path.join(__dirname, 'sitemap.xml'),
    maxEntriesPerFile: 50000,
    maxDepth: 0,
    // filepath: './dist/sitemap.xml',
    priorityMap: [1.0, 0.8, 0.6],
})

generator.on('done', () => {
    console.log('The sitemap has been generated');
})

//Paths are addded at this point
const urls = [
    { urls: '/Activities', changefreq: 'weekly', priority: 0.8 },
    { urls: '/home', changefreq: 'daily', priority: 1.0 },
    { urls: '/About-us', changefreq: 'monthly', priority: 0.6 },
    { urls: '/Social-impact', changefreq: 'monthly', priority: 0.6 },
    { urls: '/Invest', changefreq: 'monthly', priority: 0.6 },
    { urls: '/News', changefreq: 'dailyly', priority: 0.8 },
    { urls: '/Contact', changefreq: 'monthly', priority: 0.6 }
];

generator.start()