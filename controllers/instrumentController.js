var Instrument = require('../models/instruments');

//Display list of all Instruments.
exports.instrument_list = function(req,res) {
    res.send('NOT implemented: Instrument list');
};

//Display detail page for a specific Instrument.
exports.instrument_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: instrument details' + req.params.id);
};

//Display Instrument create form on GET.
exports.instrument_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Instrument create GET');
};

//Handle Instrument create on POST
exports.instrument_create_post = function(req, res) {
    res.send('Not implemented: Instrument create POST');
};

//Display Instrument delete form on GET.
exports.instrument_delete_get = function(req, res) {
    res.send('Not implemented: instrument delete GET');
};

//Handle Instrument delete on POST.
exports.instrument_delete_post = function(req, res) {
    res.send('Not implemented: instrument delete POST');
};

//Display Instrument update form on GET.
exports.instrument_update_get = function(req,res) {
    res.send('Not implemented: instrument update GET');
};

//Handle Instrument update on post.
exports.instrument_update_post = function(req,res) {
    res.send('Not implemented: instrument update POST');
};
