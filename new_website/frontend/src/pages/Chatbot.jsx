import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your AI Study Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      let botText = "I can help you with that. Can you provide more details?";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botText = "Hello there! Ready to study?";
      } else if (lowerInput.includes('react')) {
        botText = "React is a fantastic library for building user interfaces. Are you working on your CIA project?";
      } else if (lowerInput.includes('schedule') || lowerInput.includes('timetable')) {
        botText = "You can view your full timetable in the Timetable section. You have Web Dev at 10 AM today.";
      } else if (lowerInput.includes('attendance')) {
        botText = "Your attendance is currently 85%. Keep it up!";
      }

      setMessages(prev => [...prev, { id: Date.now(), text: botText, isBot: true }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fade-in flex flex-col" style={{ height: 'calc(100vh - 150px)' }}>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">AI Study Assistant</h1>
        <p className="text-gray">Ask me anything about your studies, schedule, or notes.</p>
      </div>

      <div className="card flex-1 flex flex-col p-0 overflow-hidden" style={{ padding: 0 }}>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4" style={{ maxHeight: '100%', overflowY: 'auto' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[80%] ${msg.isBot ? 'self-start' : 'self-end flex-row-reverse'}`} style={{ maxWidth: '80%', alignSelf: msg.isBot ? 'flex-start' : 'flex-end', flexDirection: msg.isBot ? 'row' : 'row-reverse' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: msg.isBot ? 'var(--accent-color)' : 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: msg.isBot ? '#fff' : 'var(--text-primary)', flexShrink: 0 }}>
                {msg.isBot ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div style={{ backgroundColor: msg.isBot ? 'var(--bg-secondary)' : 'var(--accent-color)', color: msg.isBot ? 'var(--text-primary)' : '#fff', padding: '12px 16px', borderRadius: '12px', borderTopLeftRadius: msg.isBot ? '0' : '12px', borderTopRightRadius: msg.isBot ? '12px' : '0' }}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3 self-start max-w-[80%]" style={{ maxWidth: '80%', alignSelf: 'flex-start' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Bot size={20} />
              </div>
              <div style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', padding: '12px 16px', borderRadius: '12px', borderTopLeftRadius: '0' }}>
                Typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-color" style={{ borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
          <form onSubmit={handleSend} className="flex gap-2">
            <input 
              type="text" 
              className="form-input flex-1" 
              placeholder="Type your message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1rem' }}>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
