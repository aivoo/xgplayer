class Speed {
  constructor () {
    // milliseconds
    this._firstCheckpoint = 0;
    this._lastCheckpoint = 0;
    this._intervalBytes = 0;
    this._lastSecondBytes = 0;

    this._now = Date.now;
  }

  reset () {
    this._firstCheckpoint = this._lastCheckpoint = 0;
    this._intervalBytes = 0;
    this._lastSecondBytes = 0;
  }

  addBytes (bytes) {
    if (this._firstCheckpoint === 0) {
      this._firstCheckpoint = this._now();
      this._lastCheckpoint = this._firstCheckpoint;
      this._intervalBytes += bytes;
    } else if (this._now() - this._lastCheckpoint < 1000) {
      this._intervalBytes += bytes;
    } else { // duration >= 1000
      this._lastSecondBytes = this._intervalBytes;
      this._intervalBytes = bytes;
      this._lastCheckpoint = this._now();
    }
  }

  get currentKBps () {
    this.addBytes(0);

    let durationSeconds = (this._now() - this._lastCheckpoint) / 1000;
    if (durationSeconds === 0) durationSeconds = 1;
    return (this._intervalBytes / durationSeconds) / 1024;
  }

  get lastSecondKBps () {
    this.addBytes(0);

    if (this._lastSecondBytes !== 0) {
      return this._lastSecondBytes / 1024;
    } else { // lastSecondBytes === 0
      if (this._now() - this._lastCheckpoint >= 500) {
        // if time interval since last checkpoint has exceeded 500ms
        // the speed is nearly accurate
        return this.currentKBps;
      } else {
        // We don't know
        return 0;
      }
    }
  }
}

export default Speed;