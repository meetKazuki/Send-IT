import UserModel from '../models/UserModel';

const User = {
  create(req, res) {
    if (!req.body.name || !req.body.email || !req.body.gender || !req.body.address) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const user = UserModel.create(req.body);
    return res.status(201).send(user);
  },

  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },

  getOne(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    return res.status(200).send(user);
  },

  update(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    const updateUser = UserModel.update(req.params.id, req.body);
    return res.status(200).send(updateUser);
  },

  delete(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'user not found' });
    }
    const userRef = UserModel.delete(req.params.id);
    return res.status(204).send(userRef);
  },
};

export default User;
