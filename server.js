const http = require('http');
const fs = require('fs');

//const page  = req.params.page;
//fs.readFile(`./public/database/items${page}.json`, 'utf8', (err, data) => {
//res.send(data);

const server = http.createServer(function (req, res) {
  console.log(req.url)

  let body = null
  try {
    // /img/user.svg
    const ext = req.url.split('.')[1]
    console.log(ext);
    const isSvg = ext === 'svg';
    if (isSvg) {
      res.setHeader('Content-Type', 'image/svg+xml');
    }

    body = fs.readFileSync(`./public${req.url}`)
  } catch (err) {
    body = fs.readFileSync(`./public/index.html`)
  }

  res.end(body)
});

const port = process.env.PORT || 4000;

server.listen(port);

console.log(`Server started on port ${port}!`);
