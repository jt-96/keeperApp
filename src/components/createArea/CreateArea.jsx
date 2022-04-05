import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [isFocused, setIsFocused] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setNewNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleFocus(){
        setIsFocused(true);
    }

    return (
        <div>
            <form className="create-note">
                {
                isFocused && <input onChange={handleChange} type="text" name="title" placeholder='Title' value={newNote.title}/>
                }
                <textarea onChange={handleChange} onClick={handleFocus} name="content" placeholder="Take a note" rows={isFocused ? 3 : 1} value={newNote.content}></textarea>

                <Zoom in={isFocused ? true : false}>
                <Fab type='button' onClick={() => {
                    props.onAdd(newNote);
                    setNewNote({ title: "", content: "" });
                }}>
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div >
    )
}

export default CreateArea;