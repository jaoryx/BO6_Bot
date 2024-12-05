const mongoose = require('mongoose');

const CamoScheme = new mongoose.Schema({
    camoName: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    camoRequirement: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Wamo', CamoScheme);