const express = require('express');
const tourControllers = require("../controllers/tourController")
const tourRouters = express.Router();

// tourRouters.param("id",tourControllers.paramsController);

tourRouters.route('/').get(tourControllers.getTours).post(tourControllers.checkParams,tourControllers.postTour);

tourRouters.route('/:id').get(tourControllers.getRouteById).patch(tourControllers.updateTours).delete(tourControllers.deleteTour)

module.exports = tourRouters;