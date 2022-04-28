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

const addingData = async ()=>{

  try {
    const fDoc = new Tank({
      title: "5nd Document",
      userId: 005,
      price: 1900,
    })
    
    const checkData = await fDoc.save();

  } catch (error) {
    console.log(error);
  }

}

addingData();