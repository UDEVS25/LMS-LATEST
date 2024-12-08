import React, { useState } from 'react';
import './Student.css';

const Students = () => {
  const [students, setStudents] = useState([
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
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    rollNo: '',
    department: 'Computer Science',
    year: '1', // Default to Year 1
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    const departmentRollNumbers = students
      .filter((student) => student.department === newStudent.department)
      .map((student) => parseInt(student.rollNo));

    const maxRollNo = departmentRollNumbers.length > 0 ? Math.max(...departmentRollNumbers) : 0;
    const uniqueRollNo = maxRollNo + 1;

    const isRollNoUnique =
      !students.some(
        (student) =>
          student.rollNo === newStudent.rollNo && student.department === newStudent.department
      );

    const finalRollNo = isRollNoUnique ? newStudent.rollNo : uniqueRollNo.toString();

    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    setStudents([
      ...students,
      { id: newId, name: newStudent.name, rollNo: finalRollNo, department: newStudent.department, year: newStudent.year },
    ]);

    setNewStudent({ name: '', rollNo: '', department: 'Computer Science', year: '1' }); // Reset to default
    setIsModalOpen(false); // Close the modal
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.includes(searchTerm) ||
    student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="students-section">
      <h2>📚 Students Section</h2>

      {/* Search Student */}
      <div className="search-student">
        <input
          type="text"
          placeholder="🔍 Search by name, roll number, or department"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Button to Add New Student */}
      <button className="add-student-btn" onClick={() => setIsModalOpen(true)}>
        ➕ Add New Student
      </button>

      {/* Modal to Add New Student */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>➕ Add New Student</h3>
            <form onSubmit={addStudent}>
              <div className="form-group">
                <label>👤 Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleChange}
                  placeholder="Enter student's name"
                  required
                />
              </div>
              <div className="form-group">
                <label>🆔 Roll Number:</label>
                <input
                  type="text"
                  name="rollNo"
                  value={newStudent.rollNo}
                  onChange={handleChange}
                  placeholder="Enter roll number"
                  required
                />
              </div>
              <div className="form-group">
                <label>🏛️ Department:</label>
                <select
                  name="department"
                  value={newStudent.department}
                  onChange={handleChange}
                  required
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>
              <div className="form-group">
                <label>📅 Year:</label>
                <select
                  name="year"
                  value={newStudent.year}
                  onChange={handleChange}
                  required
                >
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                </select>
              </div>
              <button type="submit">✨ Add Student</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>❌ Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Student List */}
      <div className="student-list">
        <h3>👨‍🎓 Registered Students</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Department</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && <p>No students found.</p>}
      </div>
    </div>
  );
};

export default Students;
