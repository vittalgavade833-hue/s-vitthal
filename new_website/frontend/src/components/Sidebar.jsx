import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, BookOpen, Calendar, CheckSquare, 
  MessageSquare, Award, User, LogOut 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <CheckSquare size={20} /> },
    { name: 'Notes', path: '/notes', icon: <BookOpen size={20} /> },
    { name: 'Assignments', path: '/assignments', icon: <Calendar size={20} /> },
    { name: 'Timetable', path: '/timetable', icon: <Calendar size={20} /> },
    { name: 'AI Chatbot', path: '/chatbot', icon: <MessageSquare size={20} /> },
    { name: 'Quiz', path: '/quiz', icon: <Award size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span>AI Survival Assist</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={() => {
              if (window.innerWidth <= 768) toggleSidebar();
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-color" style={{ borderTop: '1px solid var(--border-color)'}}>
        <button onClick={logout} className="nav-item w-full flex text-left" style={{ background: 'transparent', width: '100%'}}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
