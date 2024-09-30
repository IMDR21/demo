const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes'); // Ensure the path is correct
const userRoute = require('./routes/userRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Fritz Imperial, MIT");
});

// Use authentication routes
app.use('/api/user', authRoutes);
app.use('/api/auth', userRoute);

// Start server
const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});