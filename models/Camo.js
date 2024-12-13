const mongoose = require('mongoose');

const CamoScheme = new mongoose.Schema({
    camoName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    weaponTypes: {
        type: mongoose.SchemaTypes.Array,
        required: true
    },
    camoType: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    camoRequirement: {
        type: mongoose.SchemaTypes.String,
        required: true
    }
});

module.exports = mongoose.model('Camo', CamoScheme);