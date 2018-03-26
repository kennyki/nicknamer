const glob = require('glob')
const path = require('path')
const fs = require('fs')

const FOLDERS = [
  'data/adjectives',
  'data/nouns'
]
const OUTPUT_FILE = 'nicknames.json'

function getData(dir) {
  return new Promise((resolve, reject) => {
    glob(`${dir}/*.json`, (error, files) => {
      if (error) {
        return reject(error)
      }

      const data = []

      files.forEach((file) => {
        const list = require(path.resolve(file))

        data.push(...list)
      })

      resolve(data)
    })
  })
}

function createNames(adjectives, nouns) {
  const names = []

  adjectives.forEach((adjective) => {
    nouns.forEach((noun) => {
      names.push(`${adjective} ${noun}`)
    })
  })

  return names
}

function randomizeNames(names) {
  // https://stackoverflow.com/a/12646864/940030
  for (let i = names.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = names[i]

    names[i] = names[j]
    names[j] = temp
  }

  return names
}

function writeNames(names) {
  return new Promise((resolve, reject) => {
    const content = {
      count: names.length,
      list: names
    }

    fs.writeFile(OUTPUT_FILE, JSON.stringify(content, null, 2), 'utf8', (error) => {
      if (error) {
        reject(error)
      } else {
        resolve(content)
      }
    })
  })
}

const promises = FOLDERS.map((folder) => {
  return getData(folder)
})

Promise.all(promises).then((results) => {
  return createNames(results[0], results[1])
}).then((names) => {
  return randomizeNames(names)
}).then((names) => {
  return writeNames(names)
}).then((content) => {
  console.log(`Generated ${content.count} nicknames at randomized position to ${OUTPUT_FILE}`)
})
