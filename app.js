const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())

// Import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are on home')
})

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, 
  () => {
    console.log('Connected to DB')
  }
);

// Listen
app.listen(3000)