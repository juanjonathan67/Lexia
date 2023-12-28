import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const User = require('./models/userModel')
const secret = process.env.SECRET_KEY as jwt.Secret;

interface JwtPayload {
  username: string,
}

async function updateProgress(req: any) {
  const { progress } = req.body;
  const token = req.headers["x-access-token"];
  
  let decoded = null;
  
  try {
    decoded = jwt.verify(token, "RPLexia") as JwtPayload;
    console.log(decoded);
  } catch (error) {
    console.log(error);
    return { error: "Invalid token"}; 
  }
  
  const user = await User.findOneAndUpdate({ username: decoded.username }, {progress: progress}, {
    new: true
  });    

  if(!user){
    return { error: "User not found"};
  }else{
    console.log(user);
    return { message: "Progress updated successfully", progress: user.progress};
  }
}

export default { updateProgress };