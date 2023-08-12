import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";

function App(){

    const [notes, updateNotes] = useState([]);

    function addNote(newNote){
        updateNotes((prevNotes)=>{
            return [...prevNotes, newNote]
        });
    }

    function deleteNote(id){
        updateNotes((prevNotes)=>{
            return prevNotes.filter((prevNote, index)=>{
                return index!==id;
            });
        })
    }

    return <div>
            <Header />
            <Input addNote={addNote}/>
            {notes.map( (note, index) => {
                return <Note key={index} id={index} deleteNote={deleteNote} title={note.title} content={note.content} />;
            }
            )}
                
            <Footer />
           </div>

}

export default App;