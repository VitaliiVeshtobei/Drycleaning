const { Workshop } = require('../models/workshop');

const createWorkshop = async (req, res, next) => {
  try {
    const { name, description, services } = req.body;
    const workshop = await Workshop.findOne({ name });
    if (!workshop) {
      await Workshop.create({ name, description, services });
      res.status(201).json({ name, description, services });
    }
    return res
      .status(400)
      .json({ message: 'This name worksop created letter' });
  } catch (error) {
    next(error);
  }
};

const deleteWorkshop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const workshop = await Workshop.findByIdAndDelete(id);
    if (!workshop) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json({ message: 'workshop deleted' });
  } catch (error) {
    next(error);
  }
};

const getAllWorkshop = async (req, res, next) => {
  try {
    const workshops = await Workshop.find();
    if (!workshops.length) {
      res.status(200).json({
        message: 'No workshops!',
      });
    }
    res.status(200).json({
      workshops,
    });
  } catch (error) {
    next(error);
  }
};

const deleteService = async (req, res, next) => {
  const { id } = req.params;

  const { serviceName } = req.body;
  try {
    const workshop = await Workshop.findById(id);
    if (!workshop) {
      res.status(200).json({
        message: 'No workshops!',
      });
    }
    const workshopServicesFiltred = workshop.services.filter(
      (item) => item.name !== serviceName
    );
    workshop.services = workshopServicesFiltred;
    await workshop.save();

    res.status(200).json({ message: 'service deleted' });
  } catch (error) {
    next(error);
  }
};
const addService = async (req, res, next) => {
  const { id } = req.params;

  const service = req.body;
  try {
    const workshop = await Workshop.findById(id);
    if (!workshop) {
      res.status(200).json({
        message: 'No workshops!',
      });
    }

    workshop.services.push(service);
    console.log(service);
    await workshop.save();

    res.status(200).json({ message: 'service added' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWorkshop,
  deleteWorkshop,
  getAllWorkshop,
  deleteService,
  addService,
};
