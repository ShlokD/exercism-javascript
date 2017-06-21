function CircularBuffer(maxSize) {

  var readIndex = 0;
  var writeIndex = 0;
  var buffer = new Array(maxSize);

  function read() {
    if(buffer[readIndex]) {
      var data = buffer[readIndex];
      buffer[readIndex] = null;
      readIndex = step(readIndex);
      return data;
    } else {
      throw new BufferEmptyException();
    }
  }

  function writeToBuffer(data) {
    if(data) {
      buffer[writeIndex] = data;
      writeIndex = step(writeIndex);
    }
  }

  function write(data) {
      if(buffer[writeIndex]) {
        throw new BufferFullException()
      } else {
        writeToBuffer(data);
      }
  }

  function forceWrite(data) {
      if(buffer[writeIndex]) {
        readIndex = step(readIndex);
      }
      writeToBuffer(data);
  }

  function step(index) {
    return (index + 1) % maxSize;
  }

  function clear() {
    readIndex = 0;
    writeIndex = 0;
    buffer =  new Array(maxSize)
  }
  return {
    read: read,
    write: write,
    clear: clear,
    forceWrite: forceWrite
  }

};

function BufferEmptyException() {
  this.name = "BufferEmptyException";
  this.message = "Buffer is empty.";
};

function BufferFullException() {
  this.name = "BufferFullException";
  this.message = "Buffer is full.";
};

module.exports = {
  circularBuffer: function(capacity) {
    return new CircularBuffer(capacity);
  },

  bufferEmptyException: function() {
    return new BufferEmptyException();
  },

  bufferFullException: function() {
    return new BufferFullException();
  }
}
