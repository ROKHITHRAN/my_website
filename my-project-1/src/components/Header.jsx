import React from "react";
import "../assets/css/Header.css"
import logo from "../assets/images/logo.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Header =()=>{
                return(
                    <div className="head">
                        <div className="title">
                            <img src={logo} className="logo"></img><p className="name">ROKHITH NURSERY AND GARDENING</p>
                        </div>
                        {/* <div className="icons">
                            <FaFacebook className="icon"/>
                            <FaInstagramSquare className="icon"/>
                        </div> */}
                    </div>
                )
}
export default Header;