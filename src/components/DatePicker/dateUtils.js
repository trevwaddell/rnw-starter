// Maybe turn this into a Class?

export const classNames = classObject => {
  return Object.keys(classObject).reduce((classes, className) => {
    if (classObject[className] === true) {
      return classes === "" ? className : `${classes} ${className}`;
    }
    return `${classes}`;
  }, "");
};

function chunkArray(arr, chunk_size) {
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunk_size));
  }

  return results;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Not using
// function minusDays(date, days) {
//   const result = new Date(date);
//   result.setDate(result.getDate() - days);
//   return result;
// }

export const getMonthFromDate = date => {
  return date.getMonth();
};

export const getYearFromDate = date => {
  return date.getFullYear();
};

export const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

export const minusMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() - months);
  return result;
};

export const getCalendarWeekDays = date => {
  let weekDays = [];
  let result = new Date(date);
  result.setDate(result.getDate() - result.getDay());
  for (let i = 0; i < 7; i++) {
    weekDays.push(new Date(result));
    result = addDays(result, 1);
  }
  return weekDays;
};

// Calendar Component Actions
export const changeDate = date => state => {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return {
    month,
    day,
    year
  };
};

function getCalendarMonthDays(month, year) {
  let calDays = [];
  const monthFirst = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const start =
    monthFirst.getDay() > 0
      ? new Date(year, month, 0 - (monthFirst.getDay() - 1))
      : monthFirst;
  const end =
    monthEnd.getDay() != 6
      ? new Date(year, month + 1, 6 - monthEnd.getDay())
      : monthEnd;

  let currentDate = start;

  while (currentDate <= end) {
    calDays = [...calDays, currentDate];
    currentDate = addDays(currentDate, 1);
  }
  return calDays;
}

export const isToday = date => {
  const today = new Date();
  return date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0);
};

export const isSelected = (date1, date2) => {
  return date1.setHours(0, 0, 0, 0) == date2.setHours(0, 0, 0, 0);
};

export const getCalendarWeeks = (year, month) => {
  return chunkArray(getCalendarMonthDays(month, year), 7);
};
