import React, { useState } from "react";
import "./Timetable.css";

const Timetable = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  // Sample data for semesters and departments
  const semesters = [
    { semester: 1, department: "Computer Science" },
    { semester: 2, department: "Computer Science" },
    { semester: 3, department: "Software Engineering" },
    { semester: 4, department: "Software Engineering" },
    { semester: 5, department: "Information Technology" },
    { semester: 6, department: "Information Technology" },
    { semester: 7, department: "Artificial Intelligence" },
    { semester: 8, department: "Artificial Intelligence" },
  ];

  // Sample timetable data
  const timetableData = {
    1: [
      { time: "9:00 AM - 10:00 AM", subject: "Math" },
      { time: "10:00 AM - 11:00 AM", subject: "Programming" },
      { time: "11:00 AM - 12:00 PM", subject: "Physics" },
    ],
    2: [
      { time: "9:00 AM - 10:00 AM", subject: "Data Structures" },
      { time: "10:00 AM - 11:00 AM", subject: "English" },
      { time: "11:00 AM - 12:00 PM", subject: "Database" },
    ],
    3: [
      { time: "9:00 AM - 10:00 AM", subject: "Operating Systems" },
      { time: "10:00 AM - 11:00 AM", subject: "Linear Algebra" },
      { time: "11:00 AM - 12:00 PM", subject: "Discrete Mathematics" },
    ],
    4: [
      { time: "9:00 AM - 10:00 AM", subject: "Computer Networks" },
      { time: "10:00 AM - 11:00 AM", subject: "Software Engineering" },
      { time: "11:00 AM - 12:00 PM", subject: "Probability and Statistics" },
    ],
    5: [
      { time: "9:00 AM - 10:00 AM", subject: "Web Development" },
      { time: "10:00 AM - 11:00 AM", subject: "Artificial Intelligence" },
      { time: "11:00 AM - 12:00 PM", subject: "Human-Computer Interaction" },
    ],
    6: [
      { time: "9:00 AM - 10:00 AM", subject: "Machine Learning" },
      { time: "10:00 AM - 11:00 AM", subject: "Cloud Computing" },
      { time: "11:00 AM - 12:00 PM", subject: "Mobile App Development" },
    ],
    7: [
      { time: "9:00 AM - 10:00 AM", subject: "Big Data Analytics" },
      { time: "10:00 AM - 11:00 AM", subject: "Internet of Things" },
      { time: "11:00 AM - 12:00 PM", subject: "Cyber Security" },
    ],
    8: [
      { time: "9:00 AM - 10:00 AM", subject: "Final Year Project" },
      { time: "10:00 AM - 11:00 AM", subject: "Research Methods" },
      { time: "11:00 AM - 12:00 PM", subject: "Entrepreneurship" },
    ],
  };
  

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="timetable-container">
      <h2>Semester Timetables</h2>
      <table className="semester-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {semesters.map((sem, index) => (
            <tr key={index}>
              <td>{sem.semester}</td>
              <td>{sem.department}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => setSelectedSemester(sem.semester)}
                >
                  View Timetable
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<br />
<hr />
<br />
      {selectedSemester && timetableData[selectedSemester] && (
        <div className="semester-timetable">
          <h3>
            Timetable for Semester {selectedSemester} -{" "}
            {semesters.find((sem) => sem.semester === selectedSemester).department}
          </h3>
          <div className="timetable">
            <div className="header-row">
              <div className="header-cell">Time</div>
              {days.map((day, index) => (
                <div className="header-cell" key={index}>
                  {day}
                </div>
              ))}
            </div>
            {timetableData[selectedSemester].map((period, index) => (
              <div className="row" key={index}>
                <div className="cell">{period.time}</div>
                {days.map((day, dayIndex) => (
                  <div className="cell" key={dayIndex}>
                    {period.subject}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
