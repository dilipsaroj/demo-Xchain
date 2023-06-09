import React,{useState} from 'react'
import {
  FaSign,
  FaTools
} from "react-icons/fa";

const User = ({setThememode}) => {
  const [toggle,setToggle] = useState(false)

  const toggleHandler = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className="inner_board_style" >
      <div>
        <button className="btn"><FaSign /> Sign in </button>
      </div>
        <div className={`dropdown ${toggle ? "show" : ""}`}>
          <button onClick={toggleHandler} className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
          <FaTools/>
          </button>
          <div className={`dropdown-menu ${toggle ? "show" : ""}`}>
            <span className="dropdown-item" onClick={()=>setThememode("light-mode")}>Light mode</span>
            <span className="dropdown-item" onClick={()=>setThememode("dark-mode")}>Dark Mode</span>
          </div>
       
      </div>

    </div>
  )
}

export default User
