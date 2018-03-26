const nicknamer = require('./index')
const generateCount = 10

console.log(`Testing random generation of ${generateCount} nicknames:`)
console.log('=============================================')

for (let i = 0; i < generateCount; i++) {
  console.log(nicknamer.get())
}

console.log('=============================================')
