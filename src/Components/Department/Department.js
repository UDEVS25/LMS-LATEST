import React, { useState } from 'react';
import './Department.css';

const Departments = () => {
  // Departments List
  const [departments] = useState([
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Mathematics' },
    { id: 3, name: 'Physics' },
  ]);

  // Existing Students
  const [students] = useState([
    { id: 1, name: 'John Doe', rollNumber: 101, department: 'Computer Science' },
    { id: 2, name: 'Jane Smith', rollNumber: 102, department: 'Mathematics' },
    { id: 3, name: 'Alice Johnson', rollNumber: 103, department: 'Physics' },
    { id: 4, name: 'Michael Brown', rollNumber: 104, department: 'Mathematics' },
    { id: 5, name: 'Emily Davis', rollNumber: 105, department: 'Computer Science' },
    { id: 6, name: 'Liam Wilson', rollNumber: 106, department: 'Computer Science' },
    { id: 7, name: 'Sophia Taylor', rollNumber: 107, department: 'Physics' },
    { id: 8, name: 'William Moore', rollNumber: 108, department: 'Mathematics' },
    { id: 9, name: 'Olivia Thomas', rollNumber: 109, department: 'Physics' },
    { id: 10, name: 'James Lee', rollNumber: 110, department: 'Computer Science' },
    { id: 11, name: 'Charlotte Harris', rollNumber: 111, department: 'Mathematics' },
    { id: 12, name: 'Henry Martin', rollNumber: 112, department: 'Physics' },
    { id: 13, name: 'Amelia White', rollNumber: 113, department: 'Computer Science' },
    { id: 14, name: 'Elijah Garcia', rollNumber: 114, department: 'Mathematics' },
    { id: 15, name: 'Isabella Robinson', rollNumber: 115, department: 'Physics' },
  ]);

  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const handleViewStudents = (departmentId) => {
    setSelectedDepartmentId(departmentId);
  };

  const getStudentsByDepartment = (departmentName) => {
    return students.filter((student) => student.department === departmentName);
  };

  return (
    <div className="departments-section">
      <h2>🏫 Departments</h2>

      {/* Department List */}
      <div className="department-list">
        <h3>📋 Available Departments</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>View Students</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>
                  <button
                    onClick={() => handleViewStudents(department.id)}
                    style={{
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    📚 View Students
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Department Students */}
      {selectedDepartmentId && (
        <div className="student-list">
          <h3>
            👨‍🎓 Students in{' '}
            {departments.find((d) => d.id === selectedDepartmentId)?.name}
          </h3>
          <ul>
            {getStudentsByDepartment(
              departments.find((d) => d.id === selectedDepartmentId)?.name
            ).length > 0 ? (
              getStudentsByDepartment(
                departments.find((d) => d.id === selectedDepartmentId)?.name
              ).map((student) => (
                <li key={student.id}>
                  {student.rollNumber} - {student.name}
                </li>
              ))
            ) : (
              <li>No students found in this department.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Departments;
