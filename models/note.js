const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.set('strictQuery', false)

mongoose.connect(url)
.then(result => {
    console.log('connected to MongoDB')
})
.catch(error => {
    console.log('Error connecting to MonogDB: ', error.message)
})

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true
    },
    important: Boolean,
})

noteSchema.set('toJSON', {
    transform: (document, returnedObjects) => {
        returnedObjects.id = returnedObjects._id.toString()
        delete returnedObjects._id
        delete returnedObjects.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)