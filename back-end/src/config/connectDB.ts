import mongoose from 'mongoose'
import 'dotenv/config'

const mongoUrl = process.env.MONGO_URL as string;

const connectDB = async () =>{
  try{
    mongoose.connect(
      mongoUrl
    );
  }catch(error){
    console.log(error);
  }
}


export default { connectDB }