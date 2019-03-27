import parcelDB from '../database/parcels';

class ValidateParcel {
  static validatePostRequest(req, res, next) {
    const {
      pickupLocation, destination, weight,
    } = req.body;

    if (!pickupLocation) {
      return res.status(406).json({
        status: 406,
        error: 'specify where to pickup your parcel',
      });
    }
    if (!destination) {
      return res.status(406).json({
        status: 406,
        error: 'specify the destination of your parcel',
      });
    }
    if (!weight) {
      return res.status(406).json({
        status: 406,
        error: 'weight of parcel must be specified',
      });
    }
    /* if (!latitude) {
      return res.status(406).json({
        status: 406,
        error: 'latitude must be specified',
      });
    } */
    /* if (!longitude) {
      return res.status(406).json({
        status: 406,
        error: 'longitude must be specified',
      });
    } */
    return next();
  }

  static validateGetRequest(req, res, next) {
    const records = parcelDB.filter(record => record.id === Number(req.params.id));
    if (Number.isNaN(Number(req.params.id))) {
      return res.status(406).json({
        status: 406,
        error: 'the ID paramater must be a number',
      });
    }
    if (!records.length) {
      return res.status(404).json({
        status: 404,
        error: 'parcel does not exist',
      });
    }
    return next();
  }
}

export default ValidateParcel;
