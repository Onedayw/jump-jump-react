const port = 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// make all the files in 'public' available
app.use(express.static('public'));

console.log('App started')

// We are using our packages here
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true}));
app.use(cors());

//You can use this to check if your server is working
app.get('/', (req, res) => {
  res.send("Welcome to your server");
})

app.post('/test', (req, res) => {
  console.log(req.body.x);
  console.log(req.body.y);
})

app.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
})
