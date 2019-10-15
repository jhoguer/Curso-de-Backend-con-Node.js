const fs = require("fs");

  const file = process.argv[2];

  if (!file) {
    throw new Error('Debes indicar el archivo que quieres leer')
  }

  const content = fs.readFile(file, (err, content) => {
    if (err) {
      return console.log(err);
    }
    console.log(content.toString());

    const lines = content.toString().split("\n").length;
    console.log(lines);
  })

