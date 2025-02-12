import express, { Application } from 'express';
import bodyParser from 'body-parser';
import personRoutes from './routes/personRoutes';

const app: Application = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', personRoutes);

// Start the server
const port: number = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
