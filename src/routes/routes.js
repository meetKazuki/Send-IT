import express from 'express';
import ValidateParcel from '../middleware/validateParcel';
import ParcelController from '../controllers/ParcelController';

const router = express.Router();

/**
 * API v1 endpoints
 */

/**
 * GET endpoints
 */
router.get('/', (req, res) => res.status(200).json({
  status: 200,
  message: 'Welcome to SendIt API v1',
}));

router.get(
  '/parcels',
  ParcelController.getAllParcels,
);
router.get(
  '/parcels/:id',
  ValidateParcel.validateGetRequest,
  ParcelController.getAParcel,
);
router.get(
  '/users/:id/parcels',
  ParcelController.getParcelByUser,
);

/**
 * POST endpoints
 */
router.post(
  '/parcels',
  ValidateParcel.validatePostRequest,
  ParcelController.createParcel,
);

/**
 * API v2 endpoints
 */


export default router;
