const { Duplex } = require('stream');

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    //console.log('Server say:', chunk.toString());
    callback();
  },
  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null);
      return;
    }
    setTimeout(() => {
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 200)
  }
})

duplexStream.currentCharCode = 65;
process.stdin.pipe((duplexStream).pipe(process.stdout));