import React from 'react';
import { Menu, Sun, Moon, Bell } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="top-navbar">
      <div className="flex items-center gap-4">
        <button className="btn-secondary" onClick={toggleSidebar} style={{ padding: '0.25rem' }}>
          <Menu size={24} />
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="btn-secondary" style={{ borderRadius: '50%', padding: '0.5rem' }}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button className="btn-secondary" style={{ borderRadius: '50%', padding: '0.5rem' }}>
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2">
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
