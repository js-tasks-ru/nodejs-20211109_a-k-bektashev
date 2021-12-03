const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limit = options.limit;
    this.encoding = options.encoding;
    this.dataTransferred = 0;
  }

  _transform(chunk, encoding, callback) {
    let err = null;
    if ((this.dataTransferred + chunk.byteLength) > this.limit) {
      err = new LimitExceededError();
    } else {
      this.dataTransferred += chunk.byteLength;
    }
    callback(err, chunk);
  }
}

module.exports = LimitSizeStream;
