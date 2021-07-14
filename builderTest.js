const fs = require('fs');
const pug = require('pug');

// Compile template.pug, and render a set of data
var indexFile = pug.renderFile('./views/index.pug', { pretty: true });
fs.writeFileSync('static_project/index.html', indexFile);
let rawdata = fs.readFileSync('./data/restaurants.json');
let restaurants = JSON.parse(rawdata);
//console.log(restaurants[1]);

for (i in restaurants) {
  var htmlFile = pug.renderFile('./views/restaurant.pug', { pretty: true, title: 'ohmyfood', pageTitle: restaurants[i].title, restaurant: restaurants[i] });
  fs.writeFileSync('static_project/' + restaurants[i].url, htmlFile);
}