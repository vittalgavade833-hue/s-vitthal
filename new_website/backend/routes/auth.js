import express from 'express';

const router = express.Router();

// Mock Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash password & save user to DB here
    res.status(201).json({ message: 'User registered successfully', user: { name, email }, token: 'mock-jwt-token' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Mock Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check credentials against DB here
    if (email === 'test@test.com' && password === 'password') {
      res.json({ message: 'Login successful', user: { name: 'Test Student', email }, token: 'mock-jwt-token' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
