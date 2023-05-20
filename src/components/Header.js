import React,{useState} from "react";
import "../CompStyles/Header.css";
import Web from "../components/Web";
import Mobile from "../components/Mobile";

function Header() {
  
    const [IsOpen, setIsOpen] = useState(false)

    const HandleMob = () => {
        setIsOpen(true)
    }

  return (
    <div className="header">
      {/* <div className="logo"><h3>Apoorv</h3></div> */}
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={HandleMob}>
          <i class="fi fi-bs-align-justify menu-icon"></i>
              </div>
          {IsOpen === true && <Mobile IsOpen={IsOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
