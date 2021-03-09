import Notes from '../models/noteModel.js';

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find({userId: req.user.id});
        res.json(notes);
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