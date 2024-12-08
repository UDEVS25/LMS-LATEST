import React, { useState } from 'react';
import './ExamSettings.css';

const ExamSettings = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [examDate, setExamDate] = useState('');
  const [examTime, setExamTime] = useState('');

  // Dummy courses for repeating subjects
  const courses = [
    { courseName: 'Mathematics', courseCode: 'MTH101' },
    { courseName: 'Computer Science', courseCode: 'CS101' },
    { courseName: 'Physics', courseCode: 'PHY101' },
    { courseName: 'Chemistry', courseCode: 'CHEM101' },
    { courseName: 'English', courseCode: 'ENG101' },
  ];

  // Dummy date sheets for two semesters
  const dateSheet1 = [
    { courseName: 'Mathematics', examDate: '2024-01-15', time: '10:00 AM' },
    { courseName: 'Computer Science', examDate: '2024-01-16', time: '2:00 PM' },
  ];

  const dateSheet2 = [
    { courseName: 'Physics', examDate: '2024-06-15', time: '10:00 AM' },
    { courseName: 'Chemistry', examDate: '2024-06-16', time: '2:00 PM' },
  ];

  return (
    <div className="exam-settings">
      <h2>Exam Settings</h2>

      {/* Repeating subjects and course table */}
      <section>
        <h3>Repeating Subjects</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.courseCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Date Sheets */}
      <section>
        <h3>Semester 1 Date Sheet</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Exam Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {dateSheet1.map((exam, index) => (
              <tr key={index}>
                <td>{exam.courseName}</td>
                <td>{exam.examDate}</td>
                <td>{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Semester 2 Date Sheet</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Exam Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {dateSheet2.map((exam, index) => (
              <tr key={index}>
                <td>{exam.courseName}</td>
                <td>{exam.examDate}</td>
                <td>{exam.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Option for taking exam online or onsite */}
      <section>
        <h3>Exam Mode</h3>
        <label>
          <input
            type="radio"
            name="examMode"
            value="online"
            checked={isOnline}
            onChange={() => setIsOnline(true)}
          />
          Online
        </label>
        <label>
          <input
            type="radio"
            name="examMode"
            value="onsite"
            checked={!isOnline}
            onChange={() => setIsOnline(false)}
          />
          Onsite
        </label>

        {isOnline && (
          <div className="online-options">
            <label>
              Select Exam Date:
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
              />
            </label>
            <label>
              Select Exam Time:
              <input
                type="time"
                value={examTime}
                onChange={(e) => setExamTime(e.target.value)}
              />
            </label>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExamSettings;
