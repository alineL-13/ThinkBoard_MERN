import mongoose from "mongoose";

// 1 - create a schema
// 2 - create a model based on the schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, 
{timestamps: true} //o prórpio mongoose vai criar os campos createdAt e updatedAt automaticamente
);

const Note = mongoose.model("Note", noteSchema);

export default Note;