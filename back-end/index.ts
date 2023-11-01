import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import connectDB from './src/config/connectDB'
import loginRoutes from './src/routes/loginRoutes'

const app = express();
const PORT = 11111;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB.connectDB();

//Routes
app.use("/", loginRoutes);

// Start server
const listen = () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
app.listen(PORT, listen);