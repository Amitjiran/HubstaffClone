import express from 'express';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import User from './models/user.js';

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    req.user = decoded; // Attach decoded user info to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token (Expires in 1 hour)
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send the token to the client
    res.status(200).json({
      message: 'Login successful',
      token, // JWT token
      user: { id: user._id, name: user.name, email: user.email } // Basic user info
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected dashboard route
app.get('/dashboard', verifyToken, async (req, res) => {
  try {
    // Fetch user data from the database using the ID from the token
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Welcome to the dashboard!', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route (remove token from client side)
app.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
