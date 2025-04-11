import user from '../models/UserModel.js'; 

const userController = {

  create: async (req, res) => {
    try {
      const result = await user.create(req.body);
      res.status(201).create(result);
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const result = await user.findOne(req.params.id);
      res.status(200).json(result);
    }
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  
  },

  update: async (req, res) => {
    try {
      const result = await user.findByOne({id: req.params.id}, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await user.findOneAndDelete({id: req.params.id});
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default userController;
