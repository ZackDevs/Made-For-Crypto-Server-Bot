const mongoose = require('mongoose')

const idsSchema = mongoose.Schema({
    guildId: {
        required: true,
        type: String,
    },
    ids: {
        required: true,
        type: Array,
    }
})



module.exports = mongoose.model('ids', idsSchema)