import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, XCircle } from 'lucide-react';

const Attendance = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Web Development', total: 20, attended: 18 },
    { id: 2, name: 'Data Structures', total: 15, attended: 10 },
  ]);
  const [newSubject, setNewSubject] = useState('');

  const addSubject = (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return;
    setSubjects([...subjects, { id: Date.now(), name: newSubject, total: 0, attended: 0 }]);
    setNewSubject('');
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter(s => s.id !== id));
  };

  const updateAttendance = (id, type) => {
    setSubjects(subjects.map(s => {
      if (s.id === id) {
        if (type === 'present') {
          return { ...s, total: s.total + 1, attended: s.attended + 1 };
        } else if (type === 'absent') {
          return { ...s, total: s.total + 1 };
        }
      }
      return s;
    }));
  };

  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold mb-4">Attendance Calculator</h1>
      <p className="text-gray mb-8">Track your classes and maintain the required 75% attendance.</p>

      <form onSubmit={addSubject} className="flex gap-4 mb-8">
        <input 
          type="text" 
          className="form-input flex-1" 
          placeholder="Enter subject name..." 
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <Plus size={20} /> Add Subject
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map(subject => {
          const percentage = subject.total === 0 ? 0 : Math.round((subject.attended / subject.total) * 100);
          const isSafe = percentage >= 75;

          return (
            <div key={subject.id} className="card flex flex-col relative">
              <button 
                onClick={() => removeSubject(subject.id)} 
                className="absolute top-4 right-4 text-gray hover:text-red-500"
                style={{ background: 'transparent' }}
              >
                <Trash2 size={20} />
              </button>
              
              <h3 className="font-bold text-xl mb-4 pr-8">{subject.name}</h3>
              
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm text-gray mb-1">Attended / Total</p>
                  <p className="font-bold">{subject.attended} / {subject.total}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray mb-1">Percentage</p>
                  <p className={`text-2xl font-bold ${isSafe ? 'text-accent' : 'text-red-500'}`} style={{ color: isSafe ? 'var(--accent-color)' : '#ef4444' }}>
                    {percentage}%
                  </p>
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <button 
                  onClick={() => updateAttendance(subject.id, 'present')} 
                  className="btn flex-1 bg-green-100 text-green-700 hover:bg-green-200"
                  style={{ backgroundColor: '#dcfce7', color: '#15803d' }}
                >
                  <CheckCircle size={18} /> Present
                </button>
                <button 
                  onClick={() => updateAttendance(subject.id, 'absent')} 
                  className="btn flex-1 bg-red-100 text-red-700 hover:bg-red-200"
                  style={{ backgroundColor: '#fee2e2', color: '#b91c1c' }}
                >
                  <XCircle size={18} /> Absent
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Attendance;
