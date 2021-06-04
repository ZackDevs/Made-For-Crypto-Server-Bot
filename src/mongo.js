const mongoose = require('mongoose')
const { mongoURI } = require('../slappey.json')

module.exports = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        useFindAndModify: false,

    })
    return mongoose
}