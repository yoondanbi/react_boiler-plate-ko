const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://danbi:abcd1234@cluster0.bfagune.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err=>console.log('error...'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
