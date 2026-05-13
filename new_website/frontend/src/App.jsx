import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Chatbot from './pages/Chatbot';
import Notes from './pages/Notes';
import Assignments from './pages/Assignments';
import Timetable from './pages/Timetable';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
const Placeholder = ({ title }) => <div className="card fade-in"><h1 className="text-2xl font-bold">{title}</h1><p className="mt-4 text-gray">This module is under development.</p></div>;

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="notes" element={<Notes />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="timetable" element={<Timetable />} />
              <Route path="chatbot" element={<Chatbot />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
