import express from 'express';
import userController from '../controllers/UserController.js';

const router = express.Router();

router.route('/user')
  .post((req, res) => userController.create(req, res))

router.route('/user/:id')
  .get((req, res) => userController.findOne(req, res))
  .put((req, res) => userController.update(req, res))
  .delete((req, res) => userController.delete(req, res))

export default router;