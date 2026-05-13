import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Mock login for now
    if (email === 'test@test.com' && password === 'password') {
      login({ name: 'Test Student', email }, 'mock-jwt-token');
      navigate('/');
    } else {
      setError('Invalid credentials. Use test@test.com / password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-secondary)'}}>
      <div className="card fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-center text-gray mb-4">Login to AI College Survival Assistant</p>
        
        {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleSubmit} className="flex-col gap-4">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full" style={{ width: '100%' }}>Login</button>
        </form>
        
        <p className="text-center mt-4 text-gray">
          Don't have an account? <Link to="/register" style={{ color: 'var(--accent-color)' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
