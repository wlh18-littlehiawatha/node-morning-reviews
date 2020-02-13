require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:id', ctrl.getOneUser)
app.post('/api/users', ctrl.createUser)
app.put('/api/users/:id', ctrl.updateUser)
app.delete('/api/users/:id', ctrl.deleteUser)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log(`Hey Andy let's do this thing set`)
  app.listen(SERVER_PORT, () =>
    console.log(`Server running on port ${SERVER_PORT}`)
  )
})
