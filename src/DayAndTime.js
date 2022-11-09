import React from 'react'

export default function DayAndTime(props){

  let months= [
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
    "December"
  ];
    let days = [
        "Sunday",
        "Monday",
        "Tuersday",
        "Wednesday",
        "Thusday",
        "Friday",
        "Saturday"
      ];
      let month = months[props.date.getMonth()];
      let day = days[props.date.getDay()];
      let hours = props.date.getHours();
      if (hours <10){
        hours = `0${hours}`
      }
      let minutes = props.date.getMinutes();
      if (minutes <10){
        minutes = `0${minutes}`
      }
console.log(props.date);

    return(
        <div className="DayAndTime">
          {month}  {day}  {hours}:{minutes}
        </div>
    );
}