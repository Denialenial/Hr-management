const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employees');
const vehicleRoutes = require('./routes/vehicles');
const connectDB = require('./mongoose'); // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 5003; // Change the port number here

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect Database
connectDB();

// Routes
app.use('/employees', employeeRoutes);
app.use('/vehicles', vehicleRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
