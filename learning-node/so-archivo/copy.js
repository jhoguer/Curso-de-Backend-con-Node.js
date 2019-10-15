const fs = require('fs');

fs.copyFile('../node-web/streams/big', 'BIG.txt', err => {
  if (err) {
    console.log(err)
  }
  console.log("El archivo fue copiado....");
})