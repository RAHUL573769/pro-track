import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import SingleCalender from "./SingleCalender";
import moment from "moment";

const Calender = () => {
  const localizer = momentLocalizer(moment);
  const [tasks, setTask] = useState([]);
  useEffect(() => {
    fetch("calender.json")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <DayPicker mode="single" selected={date} onSelect={setDate} />;
      <p className="text-center">My Work For {format(date, "PP")}</p>
      {console.log(tasks)}
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calender;
