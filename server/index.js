const express = require('express')
const ctrl = require('./controller')

const app = express()
const port = 4338

app.use(express.json())

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:id', ctrl.getOneUser)
app.post('/api/users', ctrl.createUser)
app.put('/api/users/:id', ctrl.updateUser)
app.delete('/api/users/:id', ctrl.deleteUser)

app.listen(port, () => console.log(`Server running on port ${port}`))
