import UserModel from '../models/User';

const User = {
  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  create(req, res) {
    if (!req.body.name && !req.body.email && !req.body.gender && !req.body.address) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const user = UserModel.create(req.body);
    return res.status(201).send(user);
  },

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} user array
   */
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  getOne(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    return res.status(200).send(user);
  },

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} updated user
   */
  update(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    const updateUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updateUser);
  },

  /**
   * @param {object} req
   * @param {object} res
   * @returns {void} status code 204
   */
  delete(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    const userRef = userModel.delete(req.params.id);
    return res.status(204).send(userRef);
  },
};

export default User;
