var fs = require("fs");

fs.writeFile('filesys.js',"Hey how are you",function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
});