import parcelDB from '../models/parcelsModel';

class ParcelController {
  static getAllParcels(req, res) {
    res.status(200).json({
      status: 200,
      data: [...parcelDB],
    });
  }

  static getAParcel(req, res) {
    const data = parcelDB.filter(
      recordObj => Number(req.params.id) === recordObj.id,
    );
    res.status(200).json({
      status: 200,
      data,
    });

    /* const id = parseInt(req.params.id, 10);

    let parcelFromDB;

    parcelDB.map((parcel) => {
      if (parcel.id === id) parcelFromDB = parcel;
    });

    if (parcelFromDB) {
      return res.status(200).json({
        status: 200,
        data: parcelFromDB,
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'parcel does not exist',
    }); */
  }
}

export default ParcelController;
