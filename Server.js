const mongoose = require('mongoose');

// Do Connection Between MongoDB and Express
mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
  }
).then(
  ()=>{
    console.log('Connection Successfull');
  }
).catch((e)=>{
  console.log(e);
})

// Macking Schema in MongoDB using Mongoose

const thingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

// Creating Model using Mongoose in Express

const Tank = mongoose.model('Tank', thingSchema);

// Creating First Document 

const fDoc = new Tank({
  title: "First Document",
  userId: 001,
  price: 1500,
})

fDoc.save();