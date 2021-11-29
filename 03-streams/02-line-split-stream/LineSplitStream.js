const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.store = "";
  }

  _transform(chunk, encoding, callback) {
    const lines = (this.store + chunk.toString()).split(os.EOL);
    this.store = lines.pop();
    for (let i = 0; i < lines.length; i++) {
      this.push(lines[i]);
    }
    callback(null);
  }

  _flush(callback) {
    this.push(this.store);
    this.store = "";
    return callback();
  }
}

module.exports = LineSplitStream;
