const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    mp: {
        type: mongoose.SchemaTypes.Array,
        required: true
    },
    zm: {
        type: mongoose.SchemaTypes.Array,
        required: true
    }
});

module.exports = mongoose.model('User', UserScheme);