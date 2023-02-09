const express = require('express');

const router = express.Router();

const {
  createWorkshop,
  deleteWorkshop,
  deleteService,
  addService,
  getAllWorkshop,
} = require('../../controllers/workshop');

router.post('/', createWorkshop);
router.delete('/:id', deleteWorkshop);
router.delete('/service-delete/:id', deleteService);
router.post('/service-add/:id', addService);
router.get('/', getAllWorkshop);

module.exports = router;
