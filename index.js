const express = require('express')
const app = express()
const port = 5000
const bodyParser=require('body-parser');
const config=require('./config/key');
const {User} = require("./models/User");

//application/x=-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true})); 
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log('error...'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    return res.status(200).json({ success: true, savedUser });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
