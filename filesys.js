const fs = require('fs')

fs.readFile(('greeting.js'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})