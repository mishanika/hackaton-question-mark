import React, { useEffect, useState } from "react";
import "./Calendar.scss";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const Calendar = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [dayNumbers, setDayNumbers] = useState<number[]>([]);
  const defaultDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const getWeeks = () => {
    let tempDays = [] as Array<number>;
    let weekDay = defaultDate.getDay() - 1;
    console.log(weekDay);
    if (weekDay > 0) {
      for (let y = 0; y < weekDay; y++) {
        tempDays.unshift(new Date(new Date().getFullYear(), new Date().getMonth(), -y).getDate());
      }
    }
    console.log(tempDays);

    for (let y = 1; y < days.length * 6 - weekDay + 1; y++) {
      tempDays.push(new Date(new Date().getFullYear(), new Date().getMonth(), y).getDate());
    }

    setDayNumbers(tempDays);
  };

  useEffect(() => {
    getWeeks();
  }, []);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-title">Applayed challenges </div>
      <div className="calendar">
        <div className="calendar-header">
          <div className="arrow-container">
            {" "}
            <div className="arrow left"></div>
          </div>
          {month[new Date().getMonth()]} {new Date().getFullYear()}
          <div className="arrow-container">
            <div className="arrow right"></div>
          </div>
        </div>
        <div className="calendar-main">
          <div className="calendar-days">
            {days.map((item) => (
              <span>{item} </span>
            ))}
          </div>
          <div className="calendar-numbers">
            {dayNumbers.map((item) => (
              <span>{item < 10 ? `0${item}` : item} </span>
            ))}
          </div>
        </div>
      </div>
      <div className="challenge">
        <div className="activity-circle">
          <DirectionsRunIcon />
        </div>
        <div className="challenge-inner-wrapper">
          <span className="activity-name">Active running without obstacles</span>
          <div className="date-more-wrapper">
            <div className="date">29.03.2023</div>
            <div className="more">
              More <div className="arrow right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
