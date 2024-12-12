import React, { useState } from 'react';
import './Report.css';

const students = [
    { id: 1, name: 'John Doe', rollNo: '101', department: 'Computer Science', year: '1' },
    { id: 2, name: 'Jane Smith', rollNo: '102', department: 'Mathematics', year: '2' },
    { id: 3, name: 'Alice Johnson', rollNo: '103', department: 'Physics', year: '4' },
    { id: 4, name: 'Michael Brown', rollNo: '104', department: 'Mathematics', year: '2' },
    { id: 5, name: 'Emily Davis', rollNo: '105', department: 'Computer Science', year: '1' },
    { id: 6, name: 'Liam Wilson', rollNo: '106', department: 'Computer Science', year: '3' },
    { id: 7, name: 'Sophia Taylor', rollNo: '107', department: 'Physics', year: '3' },
    { id: 8, name: 'William Moore', rollNo: '108', department: 'Mathematics', year: '4' },
    { id: 9, name: 'Olivia Thomas', rollNo: '109', department: 'Physics', year: '2' },
    { id: 10, name: 'James Lee', rollNo: '110', department: 'Computer Science', year: '4' },
    { id: 11, name: 'Charlotte Harris', rollNo: '111', department: 'Mathematics', year: '3' },
    { id: 12, name: 'Henry Martin', rollNo: '112', department: 'Physics', year: '2' },
    { id: 13, name: 'Amelia White', rollNo: '113', department: 'Computer Science', year: '3' },
    { id: 14, name: 'Elijah Garcia', rollNo: '114', department: 'Mathematics', year: '1' },
    { id: 15, name: 'Isabella Robinson', rollNo: '115', department: 'Physics', year: '4' },
];

const results = {
    '101': { GPA: 3.8, subjects: ['Math', 'Programming', 'Physics'], remarks: 'Excellent performance!' },
    '102': { GPA: 3.6, subjects: ['Statistics', 'Algebra', 'Calculus'], remarks: 'Good effort!' },
    '103': { GPA: 3.9, subjects: ['Quantum Physics', 'Astrophysics', 'Thermodynamics'], remarks: 'Outstanding!' },
    '104': { GPA: 3.4, subjects: ['Linear Algebra', 'Differential Equations', 'Geometry'], remarks: 'Needs improvement in core concepts.' },
    '105': { GPA: 3.7, subjects: ['Data Structures', 'Operating Systems', 'Networking'], remarks: 'Solid academic progress!' },
    '106': { GPA: 3.5, subjects: ['Software Engineering', 'Database Systems', 'Machine Learning'], remarks: 'Consistent performance.' },
    '107': { GPA: 3.3, subjects: ['Optics', 'Electrodynamics', 'Thermodynamics'], remarks: 'Good understanding, focus on clarity.' },
    '108': { GPA: 3.8, subjects: ['Abstract Algebra', 'Real Analysis', 'Topology'], remarks: 'Impressive work on theoretical subjects.' },
    '109': { GPA: 3.6, subjects: ['Classical Mechanics', 'Mathematical Physics', 'Modern Physics'], remarks: 'Great grasp of concepts!' },
    '110': { GPA: 3.9, subjects: ['AI', 'Cloud Computing', 'Advanced Algorithms'], remarks: 'Excellent problem-solving skills!' },
    '111': { GPA: 3.5, subjects: ['Complex Analysis', 'Probability', 'Number Theory'], remarks: 'Strong analytical skills.' },
    '112': { GPA: 3.4, subjects: ['Geophysics', 'Thermal Physics', 'Materials Science'], remarks: 'Keep pushing for better clarity.' },
    '113': { GPA: 3.7, subjects: ['Web Development', 'Cybersecurity', 'Mobile Applications'], remarks: 'On track to becoming a skilled developer.' },
    '114': { GPA: 3.2, subjects: ['Linear Algebra', 'Intro to Programming', 'Discrete Mathematics'], remarks: 'Needs more focus on fundamentals.' },
    '115': { GPA: 3.9, subjects: ['Nuclear Physics', 'Particle Physics', 'Computational Physics'], remarks: 'Phenomenal academic performance!' }
};


const Report = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [filteredStudents, setFilteredStudents] = useState(students);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);

        if (year) {
            const filtered = students.filter((student) => student.year === year);
            setFilteredStudents(filtered);
        } else {
            setFilteredStudents(students);
        }
    };

    const handleViewResult = (student) => {
        setSelectedStudent(student);
    };

    return (
        <div className="report-container">
            {selectedStudent ? (
                <div className="result-card">
                    <h2>Results for {selectedStudent.name}</h2>
                    <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
                    <p><strong>Department:</strong> {selectedStudent.department}</p>
                    <p><strong>GPA:</strong> {results[selectedStudent.rollNo]?.GPA || 'N/A'}</p>
                    <p><strong>Subjects:</strong></p>
                    <ul>
                        {(results[selectedStudent.rollNo]?.subjects || []).map((subject, index) => (
                            <li key={index}>{subject}</li>
                        ))}
                    </ul>
                    <p className="remarks"><strong>Remarks:</strong> {results[selectedStudent.rollNo]?.remarks || 'No remarks'}</p>
                    <button onClick={() => setSelectedStudent(null)} className="back-button">
                        Back
                    </button>
                </div>
            ) : (
                <>
                    <h2>Report Section</h2>
                    <select className="year-dropdown" value={selectedYear} onChange={handleYearChange}>
                        <option value="">All Years</option>
                        <option value="1">Year 1</option>
                        <option value="2">Year 2</option>
                        <option value="3">Year 3</option>
                        <option value="4">Year 4</option>
                    </select>

                    <div className="students-list">
                        <ul>
                            {filteredStudents.map((student) => (
                                <li key={student.id} className="student-list-item">
                                    {student.name} (Roll No: {student.rollNo}, Department: {student.department})
                                    <button
                                        className="view-result-button"
                                        onClick={() => handleViewResult(student)}
                                    >
                                        View Result
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Report;
