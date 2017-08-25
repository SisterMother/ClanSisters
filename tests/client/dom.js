var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

/*
IMPORTANT NOTE: PLEASE USE JSDOM VERSION "9.12.0", AS THE CURRENT VERSION WILL BREAK THIS BUILD. 

*/


global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};