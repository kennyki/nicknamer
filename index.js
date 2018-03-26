const db = require('./nicknames.json')
const count = db.count
const list = db.list

module.exports = {
  count,
  list,
  get () {
    const randomIx = Math.floor(Math.random() * Math.floor(this.count))
    const nickname = this.list[randomIx]

    return nickname
  }
}
