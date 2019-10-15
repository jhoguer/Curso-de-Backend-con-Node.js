const { Transform } = require('stream');

const transforCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk
                .toString()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice().toLowerCase())
                .join("")
    );
    callback()
  }
})

process.stdin.pipe(transforCamelCase).pipe(process.stdout);