const mongoose = require('mongoose');

const WeaponScheme = new mongoose.Schema({
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

module.exports = mongoose.model('Weapon', WeaponScheme);