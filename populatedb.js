#! /usr/bin/env node

console.log('This script populates some instruments');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Instrument = require('./models/instruments')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var instruments = []


function instrumentCreate(name, price, description, category, stock, cb) {
    instrumentdetail = {name, price, description, category, stock}

    var instrument = new Instrument(instrumentdetail);

    instrument.save(function (err) {
        if(err) {
            cb(err, null)
            return
        }
        console.log('New Instrument: ' + instrument);
        instruments.push(instrument)
        cb(null, instrument)
    }   );
}

function createInstruments(cb) {
    async.series([
        function(callback) {
            instrumentCreate('Guitar', 50, 'Used for playing music', 'Handheld instruments', 5, callback);
        },
        function(callback) {
            instrumentCreate('Piano', 250, 'Used for playing music', 'Large instrument', 1, callback );
        },
    ],
    // optional callback
    cb)
}




async.series([
    createInstruments
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Instruments '+ instruments);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
