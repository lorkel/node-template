const fs = require('fs')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000;
const path = require('path')
const parser = require('body-parser')

const { conn } = require('./utils/conn')

const dotenv = require('dotenv')
dotenv.config()

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

app.use(requireHTTPS);
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

const apiRouter = require('./routes/v1')
app.use('/api/v1', apiRouter)

// catchall handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
