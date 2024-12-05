const mongoose = require('mongoose');

const WeaponScheme = new mongoose.Schema({
    weaponName: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    weaponType: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    camos: {
        type: mongoose.SchemaTypes.Array,
        required: true
    }
});

module.exports = mongoose.model('Weapon', WeaponScheme);