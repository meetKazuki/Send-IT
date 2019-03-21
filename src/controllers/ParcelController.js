import parcelDB from '../models/parcelsModel';

class ParcelController {
  static createParcel(req, res) {
    const {
      destination, pickupLocation, weight,
    } = req.body;
    const id = parcelDB.length + 1;
    const parcelData = {
      id,
      createdOn: new Date(),
      createdBy: 8,
      weight,
      destination,
      pickupLocation,
      status: 'pending',
    };

    parcelDB.push(parcelData);
    res.status(201).json({
      status: 201,
      data: [{ id, message: 'Created parcel order successfully' }],
    });
  }

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
