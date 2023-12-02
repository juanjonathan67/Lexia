import mongoose from 'mongoose'

const connectDB = async () =>{
  try{
    mongoose.connect(
      'mongodb+srv://backend:CkwhMVefHzzGvQR8@lexia.qpa1cem.mongodb.net/backend'
    );
  }catch(error){
    console.log(error);
  }
}


export default { connectDB }