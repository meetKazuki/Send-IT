import parcelDB from '../models/parcelsModel';

class ValidateParcel {
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
