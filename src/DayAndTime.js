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

      let day = days[props.date.getDay()];
      let hours = props.date.getHours();
      if (hours <10){
        hours = `0${hours}`
      }
      let minutes = props.date.getMinutes();
      if (minutes <10){
        minutes = `0${minutes}`
      }


    return(
        <div className="DayAndTime">
            {day}  {hours}:{minutes}
        </div>
    );
}