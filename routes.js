const express = require('express') 
const app = express() 
const bodyParser = require("body-parser")
app.use(bodyParser.json())

const profile = [{
  username: 'azat',
  email: '[reducted]',
  url: 'http://azat.co'
}]
app.get('/profile', (req, res)=>{
if(req.query.id) return res.send(profile[req.query.id])
  res.send(profile)
})
app.post('/profile', (req, res) => {
    profile.push(req.body)
    console.log("created", profile)
  res.sendStatus(201)
})
app.put('/profile', (req, res)=>{
  Object.assign(profile[req.params.id], req.body)
  res.sendStatus(204)
})
app.delete('/profile', (req, res)=>{
  profile ={}
  res.sendStatus(204)
})

app.listen(3000)