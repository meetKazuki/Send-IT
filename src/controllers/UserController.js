import userDB from '../models/usersModel';

class UserController {
  static getAllUsers(req, res) {
    res.status(200).json({
      status: 200,
      data: [...userDB],
    });
  }
}

export default UserController;
