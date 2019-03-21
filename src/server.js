import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to SendIt!',
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
