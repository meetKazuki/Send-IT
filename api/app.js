import express from 'express';
import User from './controllers/UserController';
import Parcel from './controllers/ParcelController';

const app = express();
app.use(express.json());

/**
 * User endpoints
 */
app.post('/api/v1/users', User.create);
app.get('/api/v1/users', User.getAll);
app.get('/api/v1/users/:id', User.getOne);
app.put('/api/v1/users/:id', User.update);
app.delete('/api/v1/users/:id', User.delete);

/**
 * Parcel endpoints
 */
app.post('/api/v1/parcels', Parcel.create);
app.get('/api/v1/parcels', Parcel.getAll);
app.get('/api/v1/parcels/:id', Parcel.getOne);
app.put('/api/v1/parcels/:id', Parcel.update);
app.delete('/api/v1/parcels/:id', Parcel.delete);

export default app;
