import React from 'react';
import { MdDelete } from "react-icons/md";


import './Note.css';

function Note(props) {
  
  let timer = 500 , timeout 
  const formatDate =(value)=>{
    if(!value) return ""
     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date(value)
    let hrs = date.getHours()
    let amPm = hrs > 12 ?"PM" :"AM"
    hrs = hrs !== 0 ? hrs : "12"
    hrs = hrs > 12 ? hrs = 24 -hrs : hrs

    let min = date.getMinutes()
    
    let day = date.getDate()
     
    min = min<    10 ? "0"+min : min
    const month = monthNames[date.getMonth()]

    return `${hrs} : ${min} ${amPm} ${day} ${month} `;  
  }
  const debounce = (func)=>{
    clearTimeout(timeout)
    timeout = setTimeout(func , timer);
  } 

  const updateText =(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }

  return ( 
    <>
     <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea  className ='note_text' defaultValue={props.note.text}  onChange ={e =>updateText(e.target.value , props.note.id)}/>
        <div  className='note_footer'>
         <p>{formatDate(props.note.time )}</p>
         <div className= "icon_footer  " >
            <MdDelete size ={28} onClick = {()=>props.deleteNote(props.note.id)}/>  
         </div>
        </div>
        
     </div>
    </>
  )
}

export default Note