const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true
});


app.post('/api/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    title: req.body.title,
    question: req.body.question,
    response: req.body.response,
    background: req.body.background
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/',
  limits: {
    fileSize: 10000000
  }
});

const itemSchema = new mongoose.Schema({
  name: String,
  title: String,
  question: String,
  response: String,
  background: String
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);


// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//TODO: edit items
app.put('/api/items/:id',async(req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });

    item.title = req.body.title;
    item.name = req.body.name;
    item.question = req.body.question;
    item.response = req.body.response;
    item.background = req.body.background;

    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
