const http = require ('http');

const port = 3000;
const app = http.createServer(function (request, response)
{
    response.writeHead(404, { 'content-type': 'text/html' });
    response.write ('<h1>Hi sayang</h1>');
    response.write ('<p>Cara untuk stop server = ctrl + c</p>')
    response.end ();
});
app.listen(port);
console.log(`This server has been started on port ${port}`);