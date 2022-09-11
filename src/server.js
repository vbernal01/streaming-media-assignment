const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getHTML(request, response, 'index');
      break;
    case '/party.mp4':
      mediaHandler.getAudio(request, response, 'party.mp4', 'video/mp4');
      break;
    case '/page2':
      htmlHandler.getHTML(request, response, 'page2');
      break;
    case '/bling.mp3':
      mediaHandler.getAudio(request, response, 'bling.mp3', 'audio/mpeg');
      break;
    case '/page3':
      htmlHandler.getHTML(request, response, 'page3');
      break;
    case '/bird.mp4':
      mediaHandler.getAudio(request, response, 'bird.mp4', 'video/mp4');
      break;
    default:
      htmlHandler.getHTML(request, response, 'index');
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1;${port}`);
});
