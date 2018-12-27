import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
  }

  create(data) {
    const newUser = {
      id: uuid.v4(),
      name: data.name,
      email: data.email,
      gender: data.gender,
      address: data.address,
    };
    this.users.push(newUser);
    return newUser;
  }

  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  findAll() {
    return this.users;
  }

  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].name = data['name'] || user.name;
    this.users[index].email = data['email'] || user.email;
    this.users[index].gender = data['gender'] || user.gender;
    this.users[index].address = data['address'] || user.address;
    return this.users[index];
  }

  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}

export default new User();
