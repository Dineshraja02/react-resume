import React from "react";
import "./topBar.css";

function Topbar() {
  return (
    <div className="resumeContainer">
      <div className="topBar">
      <div className="topBarLeft">
         <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsfn65KCPAM6GNJZ4ZTsJOlFyoT_5BhlmwQ&usqp=CAU"></img>
         <div className="topBarProfileInfo">
            <h1>DINESH.R</h1>
            <p>177/9 john bai store,</p>
            <p>Madurai Road,</p>
            <p>Trichy-620008</p>
          </div>
         </div>
         <div className="topBarRight">
            <p>P : +8190952887</p>
            <p>E : dineshraja0403@gmail.com</p>
            <p>DOB : 02/05/1997</p>
            <p>W : http://Portfolio-dineshraja.netlify.app</p>
            <p>in: https://www.linkedin.com/in/dinesh-r-8367561b7</p>
         </div>
      </div>      
    </div>
  );
}

export default Topbar;