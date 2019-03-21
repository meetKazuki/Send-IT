import uuid from 'uuid';

class Parcel {
  constructor() {
    this.parcels = [];
  }

  create(data) {
    const newParcel = {
      id: uuid.v4(),
      weight: data.weight,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
    };
    this.parcels.push(newParcel);
    return newParcel;
  }

  findOne(id) {
    return this.parcels.find(parcel => parcel.id === id);
  }

  findAll() {
    return this.parcels;
  }

  update(id, data) {
    const parcel = this.findOne(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels[index].weight = data['weight'] || parcel.weight;
    this.parcels[index].pickupLocation = data['pickupLocation'] || parcel.pickupLocation;
    this.parcels[index].destination = data['destination'];
    return this.parcels[index];
  }

  delete(id) {
    const parcel = this.findOne(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels.splice(index, 1);
    return {};
  }
}

export default new Parcel();
