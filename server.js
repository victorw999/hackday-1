require('dotenv').config();
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request')

const API_PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
const router = express.Router();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router.get('/get', (req, res) => {
  
// });

app.post('/', (req, res) => {
  var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: "Hi! :wave: \n I'm your new bot."
  }};
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
        // Sends welcome message
        res.json();
      });
  });

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));