import React from 'react';

function Note(props){

    return (
        <div className="note">
            <h1>{props.entry.title}</h1>
            <p>{props.entry.content}</p>
            <button>DELETE</button>
        </div>
    )
}

export default Note;