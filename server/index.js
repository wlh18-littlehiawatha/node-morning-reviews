const express = require('express')
const ctrl = require('./controller')

const app = express()
const port = 4338

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:id', ctrl.getOneUser)

app.listen(port, () => console.log(`Server running on port ${port}`))
