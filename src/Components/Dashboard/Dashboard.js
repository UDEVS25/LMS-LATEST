import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">LMS Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Students</h3>
          <p>Manage student profiles and performance.</p>
          <button>View Students</button>
        </div>
        <div className="card">
          <h3>Courses</h3>
          <p>View and manage all courses.</p>
          <button>Manage Courses</button>
        </div>
        <div className="card">
          <h3>Exams</h3>
          <p>Set exams and review results.</p>
          <button>Exam Settings</button>
        </div>
        <div className="card">
          <h3>Reports</h3>
          <p>Generate student and course reports.</p>
          <button>Generate Reports</button>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>Send updates and announcements.</p>
          <button>Send Notifications</button>
        </div>
        <div className="card">
  <h3>Timetable</h3>
  <p>Access and organize the class schedules effectively.</p>
  <button>View Timetable</button>
</div>
<div className="card">
  <h3>Fee Structure</h3>
  <p>Check and update student fee details.</p>
  <button>View Fee Structure</button>
</div>
<div className="card">
  <h3>Facilities</h3>
  <p>Explore and manage school facilities and resources.</p>
  <button>Manage Facilities</button>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
