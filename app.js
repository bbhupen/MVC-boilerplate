const mongoose = require('mongoose')
const process = require('process');
const expressLayouts = require('express-layouts')
require('dotenv').config();
const path = require('path')


const MONGOURI = process.env.MONGOURI
const PORT = process.env.PORT || 9001


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(MONGOURI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }


const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts);




//for user routes
const userRoute = require('./routes/userRoute')
app.use('/', userRoute)

//for admin routes
const adminRoute = require('./routes/adminRoute')
app.use('/admin', adminRoute)

app.get('*', function(req, res){
    res.send('What where are you, it\'s a 404', 404);
  });


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://127.0.0.1:${PORT}`)    })
})
