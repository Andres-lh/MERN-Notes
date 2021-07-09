import Notes from '../models/noteModel.js';

export const getNotes = async (req, res, next) => {
    try {
        const notes = await Notes.find({userId: req.user.id});
        res.status(200).json({ success: true, notes});
    } catch (error) {
        next(error);
    }
}

export const createNotes = async (req, res, next) => {
    const {title, content, date} = req.body;
    try {
        const newNote = new Notes({
            title,
            content, 
            date,
            userId: req.user.id,
            name: req.user.id
        });
        
        await newNote.save();
        res.json({msg: "Note created"});
         
    } catch (error) {
        next(error);
    }
}

export const getNote = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.id);
        res.json(note);
    } catch (error) {
        next(error);
    }
}

export const deleteNote = async (req, res, next) => {
    try {
        await Notes.findByIdAndDelete(req.params.id)
        res.json({msg: "Note deleted"})
    } catch (error) {
        next(error);
    }
}

export const updateNote = async (req, res, next) => {
    const {title, content, date} = req.body;
    try { 
        await Notes.findByIdAndUpdate({_id: req.params.id},{title, content, date})
        res.json({msg: "Note updated"});
    } catch (error) {
        next(error);
    }
}

