class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }

      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let numberString = value.toString();
    if (numberString.length === 1) {
      return `0${numberString}`;
    } else {
      return `${numberString}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let stringMinutes = this.computeTwoDigitNumber(minutes);
    let stringSeconds = this.computeTwoDigitNumber(seconds);
    return `${stringMinutes}:${stringSeconds}`;
  }
}
