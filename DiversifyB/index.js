require('dotenv').config(); 
const express = require('express'); 
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
// Database connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5173; 
app.listen(port, () => console.log(`Listening to port ${port}...`)); 
