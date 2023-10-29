import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 11111;

// MongoDB connection
mongoose.connect('mongodb+srv://backend:CkwhMVefHzzGvQR8@lexia.qpa1cem.mongodb.net/backend');

// User model
interface IUser {
  username: string;
  password: string;
}

const User = mongoose.model<IUser>('user_cred', new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register route
const register = async(req: any, res: any) =>  {
  const { username, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username: username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
app.post('/register', register);

// Login route
const login = async(req:any, res:any) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ username }, 'XXX', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
app.post('/login', login);

// Start server
const listen = () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
app.listen(PORT, listen);