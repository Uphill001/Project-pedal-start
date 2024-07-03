// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB URI for MongoDB Atlas
const mongoUri = 'mongodb+srv://delusion123:delusion123@projectpedal.x05a1yr.mongodb.net/project123?retryWrites=true&w=majority&appName=ProjectPedal';

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

// Use routes
app.use('/', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
