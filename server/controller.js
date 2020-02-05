const users = require('../users.json')

module.exports = {
  getAllUsers: (req, res) => {
    res.status(200).send(users)
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
}
