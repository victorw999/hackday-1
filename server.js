require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

// Creates express app
const app = express();
// The port used for Express server
const PORT = 3000;
// Starts server
app.listen(process.env.PORT || PORT, function() {
  console.log('Bot is listening on port ' + PORT);

  let options = {
    url: 'https://slack.com/api/users.list',
    headers: {
      'content-type': 'application/x-www-form-encoded',
      'authorization': 'bearer ' + process.env.SLACK_AUTH_TOKEN
    },
    // json: {
    //   token: process.env.SLACK_AUTH_TOKEN
    // }
  }
  request.get(options, function(req, res){
    console.log(res.ok)
  })
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/', (req, res) => {
  var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: "Hi! :wave: \n Want some sushi? type '/sushi'"
  }};
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    res.json();
  });
});

app.post('/sushi', (req, res) => {
  var data = {form: {
    token: process.env.SLACK_AUTH_TOKEN,
    channel: "#general",
    text: ":sushi:"
  }};
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    res.json();
  });
});

app.post('/slackbot', (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.json({
    'challenge': req.body.challenge
  })

});

// app.post("/user", (req, res) => {
//   var data = {form: {
//     token: process.env.SLACK_AUTH_TOKEN,
//     channel: "#general",
//     text: "NEW TEST! for /sushi "
//   }};
//   request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
//     // Sends welcome message
//     res.json();
//   });
// });
