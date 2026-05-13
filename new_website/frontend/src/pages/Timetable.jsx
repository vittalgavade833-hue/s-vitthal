import React, { useState } from 'react';

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedule = {
    Monday: [
      { time: '09:00 AM - 10:00 AM', subject: 'Data Structures', room: 'Lab 1', type: 'Lab' },
      { time: '10:00 AM - 11:30 AM', subject: 'Web Development', room: 'Room 302', type: 'Lecture' },
      { time: '12:30 PM - 01:30 PM', subject: 'Computer Networks', room: 'Room 205', type: 'Lecture' }
    ],
    Tuesday: [
      { time: '10:00 AM - 12:00 PM', subject: 'Mathematics III', room: 'Room 101', type: 'Lecture' },
      { time: '01:00 PM - 03:00 PM', subject: 'Web Development', room: 'Lab 3', type: 'Lab' }
    ],
    Wednesday: [
      { time: '09:00 AM - 10:30 AM', subject: 'Database Systems', room: 'Room 405', type: 'Lecture' },
      { time: '11:00 AM - 12:00 PM', subject: 'Data Structures', room: 'Room 302', type: 'Lecture' }
    ],
    Thursday: [
      { time: '09:00 AM - 12:00 PM', subject: 'Computer Networks', room: 'Lab 2', type: 'Lab' },
      { time: '02:00 PM - 04:00 PM', subject: 'Database Systems', room: 'Lab 4', type: 'Lab' }
    ],
    Friday: [
      { time: '10:00 AM - 11:00 AM', subject: 'Mathematics III', room: 'Room 101', type: 'Lecture' },
      { time: '11:00 AM - 12:30 PM', subject: 'Web Development', room: 'Room 302', type: 'Lecture' }
    ]
  };

  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold mb-4">Class Timetable</h1>
      <p className="text-gray mb-8">View your weekly schedule and class locations.</p>

      <div className="card mb-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`btn ${selectedDay === day ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: '20px', padding: '0.5rem 1.5rem' }}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-6">{selectedDay}'s Schedule</h2>
        
        <div className="flex flex-col gap-4">
          {schedule[selectedDay].length > 0 ? (
            schedule[selectedDay].map((slot, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-color rounded-lg" style={{ borderColor: 'var(--border-color)', borderLeft: '4px solid var(--accent-color)' }}>
                <div className="mb-2 md:mb-0">
                  <h3 className="font-bold text-lg">{slot.subject}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="text-sm text-gray font-medium">{slot.room}</span>
                    <span className="text-sm" style={{ color: slot.type === 'Lab' ? '#f59e0b' : 'var(--accent-color)' }}>• {slot.type}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <span className="font-bold bg-secondary py-1 px-3 rounded-full text-sm" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    {slot.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray py-8">No classes scheduled for this day. Enjoy your free time!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
