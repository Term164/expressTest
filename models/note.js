const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true
    },
    important: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

noteSchema.set('toJSON', {
    transform: (document, returnedObjects) => {
        returnedObjects.id = returnedObjects._id.toString()
        delete returnedObjects._id
        delete returnedObjects.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)
