class Clock {
  padZero (num) {
    return num < 10 ? '0' + num : '' + num;
  }

  getHours (hour) {
    const referenceHour = hour % 24 >= 0 ? 0 : 24;
    const currentHour = hour % 24 + referenceHour;
    return this.padZero(currentHour);
  }

  getMinutes (minutes) {
    const referenceMinute = minutes >= 0 ? 0 : 60;
    const currentMinute = minutes % 60 + referenceMinute;
    return this.padZero(currentMinute);
  }

  getHoursFromMinutes (minutes) {
    return Math.floor(minutes / 60);
  }
}

class At {
  constructor (hours, minutes) {
    this.clock = new Clock();
    this.setMinutes(minutes);
    this.setHours(hours);
  }

  setMinutes (minutes, addMinutes = 0) {
    this.minutes = minutes + addMinutes;
  }

  setHours (hours) {
    const hoursFromMinutes = this.clock.getHoursFromMinutes(this.minutes);
    this.hours = hours + hoursFromMinutes;
  }

  toString () {
    this.hourString = this.clock.getHours(this.hours);
    this.minuteString = this.clock.getMinutes(this.minutes).toString();
    return this.hourString.concat(':').concat(this.minuteString);
  }

  plus (addMinutes) {
    this.setMinutes(this.minutes, addMinutes);
    this.setHours(this.hours);
    return this.toString();
  }

  minus (removeMinutes) {
    this.setMinutes(this.minutes, 0 - removeMinutes);
    this.setHours(this.hours);
    return this.toString();
  }

  equals (time) {
    return this.toString() === time;
  }
}

const at = (hours, minutes = 0) => new At(hours, minutes);

module.exports.at = at;
