import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User model
interface IUser {
  username: string;
  password: string;
}

const User = mongoose.model<IUser>('user_cred', new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
}));


async function login(req: any){
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return { error: 'Invalid credentials' };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = jwt.sign({ username }, 'XXX', { expiresIn: '1h' });
    return { token };
  } else {
    return { error: 'Invalid credentials' };
  }
}

async function register(req: any){
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username: username, email: email, password: hashedPassword });
  await newUser.save();
  return { message: 'User registered successfully' };
}

export default {login, register}