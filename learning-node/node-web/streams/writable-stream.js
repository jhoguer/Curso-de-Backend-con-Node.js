const { Writable } = require('stream');

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log('Server say:', chunk.toString());
    callback();
  }
});

process.stdin.pipe(writableStream);