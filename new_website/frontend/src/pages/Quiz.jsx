import React, { useState } from 'react';
import { Award, CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const availableQuizzes = [
    {
      id: 1,
      title: 'Web Development Basics',
      subject: 'Web Development',
      questions: [
        { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyperlink Text Module Language'], answer: 0 },
        { q: 'Which tag is used for the largest heading in HTML?', options: ['<head>', '<h6>', '<h1>'], answer: 2 },
        { q: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets'], answer: 1 }
      ]
    },
    {
      id: 2,
      title: 'Data Structures Quiz 1',
      subject: 'Data Structures',
      questions: [
        { q: 'Which data structure uses LIFO?', options: ['Queue', 'Stack', 'Tree'], answer: 1 },
        { q: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n^2)', 'O(log n)'], answer: 2 }
      ]
    }
  ];

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (optionIndex) => {
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === activeQuiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < activeQuiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
  };

  if (activeQuiz) {
    if (showResults) {
      const percentage = Math.round((score / activeQuiz.questions.length) * 100);
      return (
        <div className="fade-in max-w-2xl mx-auto" style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <div className="card text-center p-8">
            <Award size={64} color="var(--accent-color)" className="mx-auto mb-4" style={{ margin: '0 auto 1rem' }} />
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="text-gray mb-6">You finished the {activeQuiz.title} quiz.</p>
            
            <div className="text-6xl font-bold mb-8" style={{ color: percentage >= 50 ? '#10b981' : '#ef4444' }}>
              {percentage}%
            </div>
            
            <p className="mb-8">You scored {score} out of {activeQuiz.questions.length}.</p>
            
            <button onClick={resetQuiz} className="btn btn-primary w-full max-w-xs mx-auto" style={{ maxWidth: '20rem', width: '100%' }}>
              Back to Quizzes
            </button>
          </div>
        </div>
      );
    }

    const q = activeQuiz.questions[currentQuestion];

    return (
      <div className="fade-in max-w-2xl mx-auto" style={{ maxWidth: '40rem', margin: '0 auto' }}>
        <div className="mb-4 flex justify-between items-center text-gray">
          <button onClick={resetQuiz} style={{ background: 'none', color: 'inherit' }}>← Exit</button>
          <span>Question {currentQuestion + 1} of {activeQuiz.questions.length}</span>
        </div>
        
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-8">{q.q}</h2>
          
          <div className="flex flex-col gap-4">
            {q.options.map((opt, idx) => {
              let btnClass = 'btn-secondary text-left justify-start';
              let icon = null;
              
              if (selectedAnswer !== null) {
                if (idx === q.answer) {
                  btnClass = 'bg-green-100 border-green-500 text-green-700 text-left justify-start';
                  icon = <CheckCircle size={20} className="ml-auto" />;
                } else if (idx === selectedAnswer && idx !== q.answer) {
                  btnClass = 'bg-red-100 border-red-500 text-red-700 text-left justify-start';
                  icon = <XCircle size={20} className="ml-auto" />;
                }
              }

              return (
                <button 
                  key={idx}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswer(idx)}
                  className={`btn w-full p-4 border rounded-lg transition-all ${btnClass}`}
                  style={{ width: '100%', display: 'flex', alignItems: 'center' }}
                >
                  {opt}
                  {icon && <span style={{ marginLeft: 'auto' }}>{icon}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold mb-4">Practice Quizzes</h1>
      <p className="text-gray mb-8">Test your knowledge and prepare for exams with these practice tests.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableQuizzes.map(quiz => (
          <div key={quiz.id} className="card flex flex-col h-full" style={{ height: '100%' }}>
            <Award size={32} color="var(--accent-color)" className="mb-4" />
            <h3 className="font-bold text-xl mb-2">{quiz.title}</h3>
            <p className="text-gray mb-6 flex-1">{quiz.subject} • {quiz.questions.length} Questions</p>
            <button onClick={() => startQuiz(quiz)} className="btn btn-primary w-full mt-auto" style={{ width: '100%' }}>
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
