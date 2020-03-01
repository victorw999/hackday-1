const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb://heroku_81hwr9dc:b4h84mp6gl3n7enkpdgiko35qu@ds133252.mlab.com:33252/heroku_81hwr9dc'

// connects our back end code with the database
mongoose.connect(dbRoute, { 
  useNewUrlParser: true,
  useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/get', (req, res) => {
  
});

// create new collection:
router.post('/post', (req, res) => {
  
});


// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));