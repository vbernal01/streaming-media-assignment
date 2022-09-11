const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getHTML = (request, response, pageName) => {
  if (pageName === 'index') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
  } else if (pageName === 'page2') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page2);
    response.end();
  } else if (pageName === 'page3') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(page3);
    response.end();
  }
};

module.exports.getHTML = getHTML;
