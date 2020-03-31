const express = require('express')
const users = require('../users.json')


const app = express()

// console.log('app', app)
const PORT = 4545

app.get(`/api/users`, (req, res) => {
   res.status(200).send(users)
}) // this can be called whatever you want. It is something that you make up but should follow RESTful/CRUD principles.

// app.get(`/api/users/:id`, getSomething)

app.get ('/api/users/:id', (req,res) => {
   const {id} = req.params
   console.log(req.params)
   if(!id){
      return res.status(404).send('Unable to find resource')
   }
   const user = users.find(user => {
      return user.id === +id
   })

   if(!user){
      return res.status(500).send(`User not found.`)
   }

   res.status(200).send(user)
})

app.listen(PORT, () => console.log(`Take us to warp ${PORT}!`))

