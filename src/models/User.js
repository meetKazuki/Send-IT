import uuid from 'uuid';

class User {
  /**
   * class ctor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }

  /**
   * @returns {object} user object
   */
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

  /**
   * @params {uuid} id
   * @returns {object} user object
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  /**
   * @returns {object} return all users
   */
  findAll() {
    return this.users;
  }

  /**
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].name = data['name'] || user.name;
    this.users[index].email = data['email'] || user.email;
    this.users[index].gender = data['gender'] || user.gender;
    this.users[index].address = data['address'] || user.address;
    return this.users[index];
  }

  /**
   * @param {uuid} id
   */
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}

export default new User();
