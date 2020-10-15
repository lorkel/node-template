const fs = require('fs');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const path = require('path');

server.listen(port, () => {
  console.log('listening on *:'+port);
});

// heroku-specific ssl forwarding
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // if (req.headers.host === 'vcp-staging.herokuapp.com')
    //   return res.redirect(301, 'https://2020.designweeksac.com');
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect('https://' + req.headers.host + req.url);
    else
      return next();
  } else
    return next();
});

app.use(express.static(path.join(__dirname, 'www')));

app.get('/', (req, res) => {
  // res.send('hello world')
  res.sendFile(__dirname + '/www/index.html');
})

app.post('/post', express.json({type: '*/*'}), function(req, res){
  let data = req.body;
  console.log('form data: ')
  console.log(data)

  // res.json({ datakey: 'some value' })
  res.send('successful post');
})

app.get('/get', (req, res) => {
  console.log(req.query);
  res.send('successful get');
})

app.get('/get/:id', function(req, res) {
  io.emit(req.params.id);
  res.send("id is " + req.params.id);
});

io.on('connection', socket => {
  console.log('user connected');

  // socket.on('event', data => { /* … */ });

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});
