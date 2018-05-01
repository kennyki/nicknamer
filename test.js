const nicknamer = require('./index')
const generateCount = 10
const firstBatch = []

console.log('=============================================')
console.log(`Testing generation of ${generateCount} nicknames:`)
console.log('=============================================')

for (let i = 0; i < generateCount; i++) {
  let nickname = nicknamer.get()
  firstBatch.push(nickname)
  console.log(nickname)
}

console.log('=============================================')
console.log(`Testing generation of another ${generateCount} nicknames excluding the first batch:`)
console.log('=============================================')

for (let i = 0; i < generateCount; i++) {
  let nickname = nicknamer.get({
    exclude: firstBatch
  })

  if (firstBatch.indexOf(nickname) === -1) {
    console.log(nickname)
  } else {
    console.error(`${nickname} (CLASHED)`)
  }
}
