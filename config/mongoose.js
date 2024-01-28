// const mongoose = require('mongoose');

// // connecting mongoose to its default server and ecommerceDB
// mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB', {
//     useNewUrlParser: true,useUnifiedTopology:true
// },).then(() => console.log('Connected Successfully'))
// .catch((err) => { console.log(err); });

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// // db.once('open', function(){
// //     console.log('Connected to Database :: MongoDB');
// // });

// // module.exports = db;

const mongoose = require('mongoose');





mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;