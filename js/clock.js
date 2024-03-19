const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

const getDate = () => {
  const dayDict = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
  };

  const currentDay = new Date();

  const year = String(currentDay.getFullYear());
  const month = String(currentDay.getMonth() + 1).padStart(2, "0");
  const day = String(currentDay.getDate());
  let weekDay = currentDay.getDay();
  const len = Object.keys(dayDict).length;

  for (let i = 0; i < len; i++) {
    if (i === weekDay) {
      weekDay = dayDict[i];
      break;
    }
  }

  date.innerText = `${year}.${month}.${day} | ${weekDay}`
};

const getClock = () => {
  const currentDay = new Date();
  const hours = String(currentDay.getHours()).padStart(2, "0");     // padStart() function is only available for String type
  const minutes = String(currentDay.getMinutes()).padStart(2, "0");
  const seconds = String(currentDay.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
getDate();
setInterval(getClock, 1000);
setInterval(getDate, 1000);