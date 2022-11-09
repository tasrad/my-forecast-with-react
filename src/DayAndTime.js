import React, { useState } from 'react'

export default function DayAndTime(){
// const [currentDay, setCurrentDay] = useState("");
//     function getDate(){
//     let date = new Date();
//     let days = [
//         "Sunday",
//         "Monday",
//         "Tuersday",
//         "Wednesday",
//         "Thusday",
//         "Friday",
//         "Saturday"
//       ];
//       setCurrentDay(days[date.getDate()]);
//     }

    return(
        <div className="DayAndTime">
            <p>
                <span id="day">November</span>
                , 
                <span id="mounth">October</span> 
                <span id="number-day">08</span>
                <br />
                 <span>23</span>
                 :
                 <span>30</span>
            </p>
        </div>
    )
}