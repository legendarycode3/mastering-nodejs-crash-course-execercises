import url from 'url';

//URL STRING
const myURL = 'https://www.google.com/search?q=LegendaryCode';

//URL OBJECT
const urlObject = new URL(myURL);

// URL Methods usage
console.log(urlObject);
console.log(`pathname ${urlObject.pathname}`);
console.log(`Hostname ${urlObject.hostname}`);
console.log(`Hash ${urlObject.hash}`);
console.log(`Password ${urlObject.password}`);
console.log(`Format: ${url.format(urlObject)}`);



const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get('q'));
// RESULT 1:  URLSearchParams { 'q' => 'LegendaryCode' }
// RESULT 2: LegendaryCode



//Geting "Current File" Url
console.log(`Current File: ${import.meta.url}`);
// RESULT:  Current File: file:///C:/Users/hp/Desktop/nodejs-crash-course/urlDemo.js


//Getting the "fillURLToPath()" Url
console.log(`Current Path: ${url.fileURLToPath(import.meta.url)}`);
// RESULT:  Current Path: Current Path: C:\Users\hp\Desktop\nodejs-crash-course\urlDemo.js
// const  __filename = url.fileURLToPath(import.meta.url);
