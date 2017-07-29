const daysOfWeek = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');

const findDay = (year, month, dayIndex, dayMin, dayMax) => {
  const meetup = new Date(year, month, dayMin);
  while (meetup.getDate() <= dayMax && meetup.getMonth() === month) {
    if (meetup.getDay() === dayIndex) {
      return meetup;
    }

    const meetupDate = new Date(meetup.valueOf());
    meetup.setDate(meetupDate.getDate() + 1);
  }

  throw new Error('Day does not exist');
};

const findLastDay = (year, month, dayIndex) => {
  let meetup = new Date(year, month + 1, 0);
  while (meetup.getMonth() === month) {
    if (meetup.getDay() === dayIndex) {
      return meetup;
    }

    const meetupDate = new Date(meetup.valueOf());
    meetup.setDate(meetupDate.getDate() - 1);
  }

  throw new Error('Day does not exist');
};

const meetupDay = (year, month, day, order) => {
  const dayIndex = daysOfWeek.indexOf(day);
  switch (order) {
    case 'teenth':
      return findDay(year, month, dayIndex, 13, 19);
    case '1st':
      return findDay(year, month, dayIndex, 1, 7);
    case '2nd':
      return findDay(year, month, dayIndex, 8, 14);
    case '3rd':
      return findDay(year, month, dayIndex, 15, 21);
    case '4th':
      return findDay(year, month, dayIndex, 22, 28);
    case '5th':
      return findDay(year, month, dayIndex, 29, 31);
    case 'last':
      return findLastDay(year, month, dayIndex);
  }
};
module.exports = meetupDay;
