import express from 'express';
import User from './src/controllers/User';

const app = express();

// initialize express app
app.use(express.json());

// server port
const port = process.env.PORT || 3000;

// test endpoint is working
app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Signal locked. First Endpoint LIVE' });
});

// users endpoint
app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);

// launch app and listen to specified port
app.listen(port, () => { console.log(`Running SendIT on port ${port}`); });
