// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));


const fs = require('fs');


app.get('/', function (req, res) {
    res.send('Per vedere i prodotti, aggiungere alla fine della barra di ricerca /api/products');
    });

app.get('/api/products', (req, res) => {
  fs.readFile('api/products/products.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Errore durante la lettura del file JSON:', err);
      return res.status(500).send('Errore interno del server');
    }

    const productsData = JSON.parse(data);
    console.log(typeof productsData);
    res.setHeader('Content-Type', 'application/json');
    res.json(productsData);
  });
});


const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port,  () => {console.log('Example app listening on port 3000!');});