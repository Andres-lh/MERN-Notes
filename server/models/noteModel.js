import mongoose from 'mongoose';


const noteSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required: true 
    },
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now
    }
}, {
    timestamps: true
})

const Notes = mongoose.model('Notes', noteSchema);
export default Notes;