const addDays = (date, days) => {
  const res = new Date(date.valueOf());
  res.setDate(date.getDate() + days);
  return res;
};

const subtractDays = (date, days) => {
  const res = new Date(date);
  res.setDate(date.getDate() - days);
  return res;
};

const formatWeek = (monday, sunday) => {
  const mon = `${monday.getDate()}-${
    monday.getMonth() + 1
  }-${monday.getFullYear()}`;
  const sun = `${sunday.getDate()}-${
    sunday.getMonth() + 1
  }-${sunday.getFullYear()}`;

  const monShort = `${monday.getDate()} ${monday.toLocaleString("en-us", {
    month: "long",
  })}`;
  const sunShort = `${sunday.getDate()} ${sunday.toLocaleString("en-us", {
    month: "long",
  })}`;

  const week = {
    monday,
    sunday,
    toDatabase: `${mon}-${sun}`,
    toString: `${monShort} - ${sunShort}`,
  };
  return week;
};

// const getDayWithLongMonth = (day) => {

// }

export const getCurrentWeek = () => {
  const date = new Date();

  const daysToMonday = date.getDay() - 1;
  const monday = subtractDays(date, daysToMonday);

  const daysToSunday = 7 - date.getDay();
  const sunday = addDays(date, daysToSunday);

  return formatWeek(monday, sunday);
};

export const getWeek = (week, previousOrNext) => {
  if (previousOrNext === undefined) return getCurrentWeek();

  let daysToAdd;
  if (previousOrNext === "previous") {
    daysToAdd = -7;
  } else if (previousOrNext === "next") {
    daysToAdd = 7;
  } else {
    return null;
  }

  const monday = addDays(week.monday, daysToAdd);
  const sunday = addDays(week.sunday, daysToAdd);

  const res = formatWeek(monday, sunday);
  return res;
};

export const formatWeekData = (employees, shifts, week) => {
  const body = [];
  employees.forEach((e) => {
    const row = [];
    const fullName = `${e.firstName} ${e.lastName}`;
    row.push({ col: 0, data: fullName });
    if (shifts[e.id]) {
      shifts[e.id].forEach((shift) => {
        row.push({ col: shift.col, data: `${shift.begin}:${shift.end}` });
      });
    }
    body.push(row);
  });

  const getHeadData = ({ monday }) => {
    const head = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    for (let i = 0; i < 7; i++) {
      const dayDate = addDays(monday, i);
      const day = `${dayDate.getDate()}`.padStart(2, "0");
      const month = `${dayDate.getMonth() + 1}`.padStart(2, "0");
      const res = `${day}.${month}`;
      head[i] = `${head[i]} ${res}`;
    }
    return head;
  };
  const head = getHeadData(week);
  const data = {
    head,
    body,
  };
  return data;
};
