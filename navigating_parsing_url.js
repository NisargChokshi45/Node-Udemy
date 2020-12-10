const open = require('open');
const { parse } = require('path');
const url = require('url');

const urlValue = 'https://nisarg-chokshi.netlify.app/';

const parseUrl = url.parse(urlValue);
console.log("HREF: ", parseUrl.href);
console.log("Host: ", parseUrl.host);
console.log("Protocol: ", parseUrl.protocol);

// Opens the URL in browser
open(urlValue);
console.log("Opening the Website ... !");