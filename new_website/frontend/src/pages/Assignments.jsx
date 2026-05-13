import React, { useState } from 'react';
import { Plus, Check, Clock, AlertCircle } from 'lucide-react';

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Build React UI for CIA-3', subject: 'Web Development', dueDate: '2023-11-10', status: 'pending', priority: 'high' },
    { id: 2, title: 'Graph Traversal Algorithms', subject: 'Data Structures', dueDate: '2023-11-12', status: 'pending', priority: 'medium' },
    { id: 3, title: 'Networking Topology Report', subject: 'Computer Networks', dueDate: '2023-10-30', status: 'completed', priority: 'low' },
  ]);

  const [newTask, setNewTask] = useState('');

  const toggleStatus = (id) => {
    setAssignments(assignments.map(a => 
      a.id === id ? { ...a, status: a.status === 'completed' ? 'pending' : 'completed' } : a
    ));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setAssignments([{ 
      id: Date.now(), 
      title: newTask, 
      subject: 'General', 
      dueDate: 'No Date', 
      status: 'pending', 
      priority: 'medium' 
    }, ...assignments]);
    setNewTask('');
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ef4444'; // red
      case 'medium': return '#f59e0b'; // yellow
      case 'low': return '#10b981'; // green
      default: return 'var(--text-gray)';
    }
  };

  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold mb-4">Assignments & Tasks</h1>
      <p className="text-gray mb-8">Keep track of your upcoming deadlines and project submissions.</p>

      <div className="card mb-8">
        <form onSubmit={addTask} className="flex gap-4">
          <input 
            type="text" 
            className="form-input flex-1" 
            placeholder="Add a new assignment or task..." 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <Plus size={20} /> Add Task
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock size={20} className="text-accent" /> Pending
          </h2>
          <div className="flex flex-col gap-3">
            {assignments.filter(a => a.status === 'pending').map(task => (
              <div key={task.id} className="card p-4 flex items-start justify-between">
                <div className="flex gap-3">
                  <button onClick={() => toggleStatus(task.id)} className="mt-1" style={{ background: 'none', color: 'var(--border-color)' }}>
                    <div style={{ width: '20px', height: '20px', border: '2px solid var(--border-color)', borderRadius: '4px' }}></div>
                  </button>
                  <div>
                    <h4 className="font-bold">{task.title}</h4>
                    <p className="text-sm text-gray mt-1">{task.subject} • Due: {task.dueDate}</p>
                  </div>
                </div>
                <AlertCircle size={18} style={{ color: getPriorityColor(task.priority) }} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Check size={20} style={{ color: '#10b981' }} /> Completed
          </h2>
          <div className="flex flex-col gap-3">
            {assignments.filter(a => a.status === 'completed').map(task => (
              <div key={task.id} className="card p-4 flex items-start justify-between" style={{ opacity: 0.7 }}>
                <div className="flex gap-3">
                  <button onClick={() => toggleStatus(task.id)} className="mt-1" style={{ background: 'none', color: '#10b981' }}>
                    <Check size={20} />
                  </button>
                  <div>
                    <h4 className="font-bold" style={{ textDecoration: 'line-through' }}>{task.title}</h4>
                    <p className="text-sm text-gray mt-1">{task.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
