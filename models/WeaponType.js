const mongoose = require('mongoose');

const WeaponTypeScheme = new mongoose.Schema({
    weaponType: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('WeaponType', WeaponTypeScheme);