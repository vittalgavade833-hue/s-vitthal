import React, { useState } from 'react';
import { Upload, FileText, Download, Trash2 } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Web Dev Unit 1', subject: 'Web Development', date: '2023-10-25', size: '2.4 MB' },
    { id: 2, title: 'Data Structures Trees', subject: 'Data Structures', date: '2023-10-28', size: '1.8 MB' },
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    // Mock upload
    const newNote = {
      id: Date.now(),
      title: 'New Uploaded Note',
      subject: 'General',
      date: new Date().toISOString().split('T')[0],
      size: '1.1 MB'
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Study Notes</h1>
          <p className="text-gray">Upload, download, and organize your study materials.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Upload Notes</h2>
          <form onSubmit={handleUpload} className="flex flex-col gap-4">
            <div className="border-2 border-dashed border-color rounded-lg p-8 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors" style={{ borderColor: 'var(--accent-color)', backgroundColor: 'var(--bg-secondary)' }}>
              <Upload size={40} color="var(--accent-color)" className="mb-2" />
              <p className="font-bold">Click to browse or drag file here</p>
              <p className="text-sm text-gray mt-1">PDF, DOCX, or PPTX (Max 10MB)</p>
            </div>
            <button type="submit" className="btn btn-primary w-full" style={{ width: '100%' }}>
              Upload File
            </button>
          </form>
        </div>

        <div className="card lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Your Files</h2>
          <div className="flex flex-col gap-3">
            {notes.map(note => (
              <div key={note.id} className="flex items-center justify-between p-4 border border-color rounded-lg hover:bg-gray-50 transition-colors" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                    <FileText size={24} color="var(--accent-color)" />
                  </div>
                  <div>
                    <h4 className="font-bold">{note.title}</h4>
                    <p className="text-sm text-gray">{note.subject} • {note.size} • {note.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-secondary" style={{ padding: '0.5rem' }}>
                    <Download size={18} />
                  </button>
                  <button onClick={() => deleteNote(note.id)} className="btn btn-secondary text-red-500 hover:text-red-700" style={{ padding: '0.5rem', color: '#ef4444' }}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {notes.length === 0 && (
              <p className="text-center text-gray py-8">No notes uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
