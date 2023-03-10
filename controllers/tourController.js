const fs = require('fs');
const Tours = require('../models/tourModels');
exports.checkParams = (req, res, next) => {
  if (!req.body.price || !req.body.name) {
    return res.status(403).json({
      status: 'fail',
      message: "You're name and password shouldn't be empty!",
    });
  }
  console.log('middleware works!');
  next();
};

exports.getTours = async (req, res) => {
  const data = await Tours.find();
  res.status(200).json({
    status: 'success',
    data: {
      data: data
    }
  });
};
exports.postTour = async (req, res) => {
  const newTour = await Tours.create(req.body);
  if(newTour.length===0){
    return res.status(400).json({status: "failed",message: "The Document You Requested Was No Longer Existed!"})
  }
  try{
    res.status(201).json({
      status: 'success',
      data: newTour,
    });
  }catch(err){
    res.status(400).json({
      status: "error",
      message: "Error On Saving The Data!"
    })
  }
};
exports.deleteTour = (req,res)=>{
  Tours.findByIdAndDelete(req.params.id,(err,doc)=>{
    if(err){
      const message = err.message
      return res.status(500).json({
        status: "error",
        message: `The data You Requested Is no longer existed.${message.replaceAll('"',"'")}`
      })
    }else if(!doc){
      return res.status(400).json({
        status: "error",
        message: "The data You Requested Is no longer existed."
      })
    }
    res.status(201).json({
      status: "success",
      requestTime: new Date().toISOString,
      message: "The Document You requested Was Now Deleted.",
      data: {
        data: doc
      }
    })
  })
}

exports.updateTours = async (req, res) => {
  const id = req.params.id
  const data = req.body
  try {
    const tour = await Tours.findByIdAndUpdate(id,data,{new: true,runValidators: true})
    res.status(201).json({
      status: 'success',
      result: tour.lenght,
      requestTime: new Date().toISOString,
      data: {
        tour: tour 
      }
    });
  } catch (error) {
    
  }
};
exports.getRouteById = async (req, res) => {
  const id = req.params.id
  const tour = await Tours.findById(id);
  if(!tour){
    return res.status(400).json({status: "failed",message: "The Document You Requested Was No Longer Existed!"})
  }
  try{
    res.status(200).json({
      status: "success",
      data: {
        tour
      }

    })
  }catch(error){
    console.log(error)
    res.status(400).json({
      status: "failed",
      message: "Error no data found in this parameter or removed!"
    })
  }
};
