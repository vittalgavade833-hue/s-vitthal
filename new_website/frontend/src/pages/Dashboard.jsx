import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Calendar, CheckSquare, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const statCards = [
    { title: 'Current Attendance', value: '85%', icon: <CheckSquare size={32} color="var(--accent-color)" />, link: '/attendance' },
    { title: 'Pending Assignments', value: '3', icon: <Calendar size={32} color="var(--accent-color)" />, link: '/assignments' },
    { title: 'Study Notes', value: '12 Files', icon: <BookOpen size={32} color="var(--accent-color)" />, link: '/notes' },
    { title: 'AI Study Sessions', value: '5 Hrs', icon: <MessageSquare size={32} color="var(--accent-color)" />, link: '/chatbot' },
  ];

  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold mb-4">Welcome back, {user?.name}! 👋</h1>
      <p className="text-gray mb-8">Here's what's happening with your studies today.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, idx) => (
          <Link to={card.link} key={idx}>
            <div className="card flex flex-col justify-center items-center text-center gap-2" style={{ cursor: 'pointer', height: '100%' }}>
              {card.icon}
              <h3 className="text-xl font-bold">{card.value}</h3>
              <p className="text-gray">{card.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Upcoming Classes</h2>
          <ul style={{ listStyle: 'none' }}>
            <li className="flex justify-between p-4 mb-2 border border-color rounded-lg" style={{ borderRadius: '8px', border: '1px solid var(--border-color)'}}>
              <div>
                <h4 className="font-bold">Web Development</h4>
                <p className="text-gray text-sm">Room 302</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-accent">10:00 AM</span>
              </div>
            </li>
            <li className="flex justify-between p-4 mb-2 border border-color rounded-lg" style={{ borderRadius: '8px', border: '1px solid var(--border-color)'}}>
              <div>
                <h4 className="font-bold">Data Structures</h4>
                <p className="text-gray text-sm">Room 105</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-accent">11:30 AM</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Recent Announcements</h2>
          <div className="p-4 mb-2" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)'}}>
            <h4 className="font-bold">CIA-3 Submission</h4>
            <p className="text-sm mt-1">Don't forget to submit your React application for CIA-3 by this Friday.</p>
          </div>
          <div className="p-4 mb-2" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid #f59e0b'}}>
            <h4 className="font-bold">Holiday Notice</h4>
            <p className="text-sm mt-1">College will remain closed on Monday.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
