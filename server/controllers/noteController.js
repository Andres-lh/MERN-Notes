import Notes from '../models/noteModel.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find({userId: req.userId});
        res.status(200).json(notes);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

export const createNotes = async (req, res) => {
    const {title, content, date} = req.body;
    try {
        const newNote = new Notes({
            title,
            content, 
            date,
            userId: req.user.id,
            name: req.user.name
        });
        
        await newNote.save();
        res.json({msg: "Note created"});
         
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id);
        res.json(note);
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export const deleteNote = async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id)
        res.json({msg: "Note deleted"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export const updateNote = async (req, res) => {
    const {title, content, date} = req.body;
    try { 
        await Notes.findByIdAndUpdate({_id: req.params.id},{title, content, date})
        res.json({msg: "Note updated"});
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}

