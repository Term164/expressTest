const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('give passsword as arugment')
    process.exit(1)
}

const passsword = process.argv[2]

const url = `mongodb+srv://fullstack:${passsword}@cluster0.xyo3x8m.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is easy',
    important: true,
})

/*
note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})
*/

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})