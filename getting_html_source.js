const scrape = require('website-scraper');

const options = {
    urls: ["https://www.bacancytechnology.com/"],
    directory: './../BacancyWebsite'
};

// Fetching data Using async/await
// const result = await scrape(options);

// Fetching data Using promises
// scrape(options).then((result) => { });

// Fetching data Using callback
scrape(options, (err, result) => {
    !err ? console.log(result) : console.log(err);
});