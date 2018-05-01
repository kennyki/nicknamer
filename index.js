const db = require('./nicknames.json')
const count = db.count
const list = db.list

module.exports = {
  count,
  list,
  get (config = {}) {
    let list = this.list

    if (config.exclude && config.exclude.length) {
      const excludeMap = config.exclude.reduce((map, n) => {
        map[n] = true
        return map
      }, {})

      list = list.filter(n => !excludeMap[n])
    }

    const randomIx = Math.floor(Math.random() * Math.floor(this.count))
    const nickname = list[randomIx]

    return nickname
  }
}
