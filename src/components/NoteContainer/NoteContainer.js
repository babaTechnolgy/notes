import React from 'react';

import Note from '../Note/Note';

import './NoteContainer.css';

function NoteContainer({notes,deleteNote,updateText  }) {
  const reverseArray =(arr)=>{
    const array = []

    for(let i = arr.length -1 ; i >=0 ; --i){
      array.push(arr[i])
    }
    return array ;
  }
  const note  = reverseArray(notes)
  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>
        {
          note.map((item, index)=>< Note key ={index.id} note={item} deleteNote = {deleteNote} updateText = {updateText }/>  ) 
        }
        
      
  </div>
    </div>
  )
}

export default NoteContainer