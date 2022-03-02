var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstrumentSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 100 },
        price: { type: Double },
        description: { type: String },
        category: { type: String },
        stock: { type: Int32 },
        url: { type: String }
    }
);

InstrumentSchema
.virtual('name')
.get(function () {
    var instrumentName = '';

    return instrumentName;
});

InstrumentSchema
.virtual('price')
.get(function () {
    var instrumentPrice = 0;

    return instrumentPrice;
});

InstrumentSchema
.virtual('description')
.get(function () {
    var instrumentDescription = '';

    return instrumentDescription;
});

InstrumentSchema
.virtual('category')
.get(function () {
    var instrumentCategory = '';

    return instrumentCategory;
});

InstrumentSchema
.virtual('stock')
.get(function () {
    var instrumentStock = 0;

    return instrumentStock;
});

InstrumentSchema
.virtual('url')
.get(function () {
    return '/' + this._id;
});

//Export model
module.exports = mongoose.model('Instrument', InstrumentSchema);