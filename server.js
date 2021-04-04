const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get(('/cartList/:page', (req, res) => {
  const page  = req.params.page;
fs.readFile(`./public/database/items${page}.json`, 'utf8', (err, data) => {
res.send(data);
});
});

app.post('/cartList', (req, res) => {
    console.log('post cartList');
    const filePath = './public/database/items3.json';


fs.readFile(filePath, 'utf8', (err, data) => {
console.log(err);
console.log(req.body);
const List = JSON.parse(data || {});
const amountOfData = Object.keys(list).length;
const newID = offset + amountOfData +1;
const newItem = req.body;
newItem.id = newID;
list[newID] = newItem;
console.log(list);
fs.writeFile(filePath, JSON.stringify(list), (err) => {
  if (err) {
    console.log(err);
  }
  res.send(list);
  })
})
});

app.listen(4000, () => {
  console.log('Server started');
  });
