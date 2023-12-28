import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const User = require('./models/userModel')
const secret = process.env.SECRET_KEY as jwt.Secret;

async function login(req: any){
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) {
    return { error: 'Invalid credentials' };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign({ username: username }, secret, { expiresIn: '1h' });
    return { token:token, progress:user.progress };
  } else {
    return { error: 'Invalid credentials' };
  }
}

async function register(req: any){
  const { fullname, username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ fullname: fullname, username: username, email: email, password: hashedPassword, progress: 0 });
  await newUser.save();
  return { message: 'User registered successfully' };
}

export default { login, register}