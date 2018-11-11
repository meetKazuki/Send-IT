import ReflectionModel from '../models/Reflection';

const Reflection = {
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({ message: 'All fields are required' });
    }
    const reflection = ReflectionModel.create(req.body);
    return res.status(201).send(reflection);
  },
  getAll(req, res) {
    const reflections = ReflectionModel.findAll();
    return res.status(200).send(reflections);
  },
  getOne(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({ message: 'reflection not found' });
    }
    return res.status(200).send(reflection);
  },
  update(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({ message: 'reflection not found' });
    }
    const updateReflection = ReflectionModel.update(req.params.id, req.body);
    return res.status(200).send(updateReflection);
  },
  delete(req, res) {
    const reflection = ReflectionModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({ message: 'reflection not found' });
    }
    const ref = ReflectionModel.delete(req.params.id);
    return res.status(204).send(ref);
  },
};

export default Reflection;
