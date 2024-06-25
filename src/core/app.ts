import express from 'express';
import userRoutes from '../routes/userRoutes';
import { ApiError } from '../entities/ApiError';

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send('Something went wrong');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
