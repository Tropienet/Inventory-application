var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstrumentSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 100 },
        price: { type: Number },
        description: { type: String },
        category: { type: String },
        stock: { type: Number },
        url: { type: String }
    }
);





//Export model
module.exports = mongoose.model('Instrument', InstrumentSchema);