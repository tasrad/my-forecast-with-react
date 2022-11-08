import React { useState } from 'react'

export default function DayAndTime(){
let [currentDay, setCurrentDay] = useState("");
    function getDate(){
    let date = new Date();
    let days = [
        "Sunday",
        "Monday",
        "Tuersday",
        "Wednesday",
        "Thusday",
        "Friday",
        "Saturday"
      ];
      currentDay (days[date.getDate()]);
    }

    return(
        <div className="DayAndTime">
            <p>
                <span id="day">{setCurrentDay}</span>
                , 
                <span id="mounth">October</span> 
                <span id="number-day">08</span>
                ,
                 <span>23</span>
                 :
                 <span>30</span>
            </p>
        </div>
    )
}