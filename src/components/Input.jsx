import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props){

    const [inputNote, updateNote] = useState({title: "", content: ""});

    function inputChange(event){
        const {name: inputName, value: inputValue} = event.target;

        if(inputName==="title"){
            updateNote((prevValue)=>{
                return {
                    title: inputValue,
                    content: prevValue.content
                }
            });
        }
        else{
            updateNote((prevValue)=>{
                return {
                    title: prevValue.title,
                    content: inputValue
                }
            });
        }
    }

    const [isExpanded, updateExpandState] = useState(false);

    function expand(){
        updateExpandState(true);
    }

    return (
        <div>
            <form className="create-note">
                <input onClick={expand} 
                    name="title" 
                    onChange={inputChange} 
                    type="text" 
                    placeholder={(isExpanded)?"Title":"Click to Add a Note"}
                    value={inputNote.title}>
                </input>
                {(isExpanded)?(<textarea name="content" 
                    onChange={inputChange} 
                    placeholder="Note content here..." 
                    value={inputNote.content}>
                </textarea>)
                :null
                }
                <Zoom in={isExpanded}>
                    <Fab color="primary" aria-label="add" onClick={(event)=>{
                        props.addNote({title: inputNote.title, content: inputNote.content});
                        updateNote({title: "", content: ""});
                        event.preventDefault();
                    }
                    }>
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default Input;