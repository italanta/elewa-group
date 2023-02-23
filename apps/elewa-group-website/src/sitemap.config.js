const SitemapGenerator = require('sitemap-generator')

const generator = SitemapGenerator('http://localhost:4200', {
    maxDepth: 0,
    filepath: './dist/sitemap.xml',
    priorityMap: [1.0, 0.8, 0.6],
})

generator.on('done', () => {
    console.log('The sitemap has been generated');
})

//Paths are addded at this point
generator.addURL('http://localhost:4200/activities', {
    priority: 0.8,
    changefreq: 'weekly',
});

generator.addURL('http://localhost:4200/home', {
    priority: 1.0,
    changefreq: 'daily',
});

generator.addURL('http://localhost:4200/about-us', {
    priority: 0.6,
    changefreq: 'monthly',
});

generator.start()