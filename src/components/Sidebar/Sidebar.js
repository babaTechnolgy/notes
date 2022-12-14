import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

import "./Sidebar.css";

function Sidebar(props) {

  const colors = ["#fe9b72", "#B0CEEF", "#A0EEC6", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen ] = useState(false)

  

  return (
    <div className="sidebar">
      <div className="sidebar_icon">
        <GrAddCircle size={42} onClick ={()=>  setListOpen(!listOpen)} />
      </div>
      <ul className={`sidebar_list  ${listOpen ? "sidebar_list_active":""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick ={()=> props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
