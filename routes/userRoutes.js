const express = require('express');
const routers = express.Router();

const userControllers = require("../controllers/userControllers")
routers.route('/').get(userControllers.getAllUsers).post(userControllers.createUser);

routers.route('/:id').get(userControllers.getUser).patch(userControllers.updateUser).delete(userControllers.deleteUser);

module.exports = routers;
