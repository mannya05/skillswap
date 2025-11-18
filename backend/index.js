// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // loads MONGO_URI and PORT from .env

const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  process.exit(1);
});

// simple test route
app.get('/', (req, res) => res.send('SkillSwap backend is running 🚀'));

// keep user routes wired (you already created routes/userRoutes.js)
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
