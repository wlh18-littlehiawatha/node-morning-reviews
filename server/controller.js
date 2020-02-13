const users = require('../users.json')

let id = users[users.length - 1].id + 1

module.exports = {
  getAllUsers: (req, res) => {
    const db = req.app.get('db')
    db.get_all_users().then(users => {
      res.status(200).send(users)
    })
  },

  getOneUser: (req, res) => {
    const { id } = req.params

    if (!id) {
      return res.status(404).send('Unable to find resource')
    }

    const user = users.find(user => user.id === +id)

    if (!user) {
      return res.status(500).send('Unable to find user')
    }

    res.status(200).send(user)
  },

  createUser: (req, res) => {
    const { first_name, last_name, email } = req.body.newUser

    const db = req.app.get('db')

    db.create_user([email, last_name]).then(newUser => {
      res.status(200).send(newUser)
    })
  },

  updateUser: (req, res) => {
    const { updatedUser } = req.body
    const { id } = req.params

    const index = users.findIndex(element => element.id === +id)

    users[index] = { ...users[index], ...updatedUser }

    res.status(200).send(users)
  },

  deleteUser: (req, res) => {
    const { id } = req.params

    const index = users.findIndex(element => element.id === +id)

    users.splice(index, 1)

    res.status(200).send(users)
  },
}
