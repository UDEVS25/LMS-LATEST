import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import ConfigSettings from './Components/ConfigSettings/ConfigSettings';
import Student from './Components/Student/Student';
import Department from './Components/Department/Department';
import ExamSettings from './Components/ExamSettings/ExamSettings';
import Timetable from './Components/Timetable/Timetable';
import Library from './Components/Library/Library';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config_settings" element={<ConfigSettings />} />
          <Route path="/student" element={<Student />} />
          <Route path="/department" element={<Department />} />
          <Route path="/exam_settings" element={<ExamSettings />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/library" element={<Library />} />
          <Route path="/alerts" element={<h1>Alerts</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
