import express from 'express';
import UserController from '../controllers/UserController';
import ParcelController from '../controllers/ParcelController';

const router = express.Router();

router.use(express.json());

/**
 * User endpoints
 */
router.post('/api/v1/users', UserController.create);
router.get('/api/v1/users', UserController.getAll);
router.get('/api/v1/users/:id', UserController.getOne);
router.put('/api/v1/users/:id', UserController.update);
router.delete('/api/v1/users/:id', UserController.delete);

/**
 * Parcel endpoints
 */
router.post('/api/v1/parcels', ParcelController.create);
router.get('/api/v1/parcels', ParcelController.getAll);
router.get('/api/v1/parcels/:id', ParcelController.getOne);
router.put('/api/v1/parcels/:id', ParcelController.update);
router.delete('/api/v1/parcels/:id', ParcelController.delete);

export default router;
