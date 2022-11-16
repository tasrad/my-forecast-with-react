import React from 'react'

export default function DayAndTime(props){
    let days = [
        "Sunday",
        "Monday",
        "Tuersday",
        "Wednesday",
        "Thusday",
        "Friday",
        "Saturday"
      ];
      let dayNumber = props.date.getDay();
      let day = days[dayNumber];
      let hours = props.date.getHours();
      if (hours <10){
        hours = `0${hours}`
      };
      let minutes = props.date.getMinutes();
      if (minutes <10){
        minutes = `0${minutes}`
      };
    return(
        <span className="DayAndTime">
        {day}  {hours}:{minutes}
        </span>
    );
}