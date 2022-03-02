var express = require('express');
var router = express.Router();

//Require controller modules.
var instrument_controller = require('../controllers/instrumentController');
/// INSTRUMENT ROUTES ///


//GET catalog home page.
router.get('/', instrument_controller.index);

//GET request for creating a Instrument. NOTE This must come before routes that display INSTRUMENT(uses, id).
router.get('instrument/create', instrument_controller.instrument_create_get);

//POST request for creating Instrument.
router.post('/instrument/create', instrument_controller.instrument_create_post);

//GET request to delete Instrument.
router.get('instrument/:id/delete', instrument_controller.instrument_delete_get);

//POST request to delete Instrument
router.get('instrument/:id/delete', instrument_controller.instrument_delete_post);

//GET request to update Instrument.
router.get('/instrument/:id/update', instrument_controller.instrument_update_get);

//POST request to update Instrument.
router.get('/instrument/:id/update', instrument_controller.instrument_update_post);

//GET request for one instrument.
router.get('/instrument/:id', instrument_controller.instrument_detail);

//GET request for list of all Instruments.
router.get('/instruments', instrument_controller.instrument_list);

module.exports = router;