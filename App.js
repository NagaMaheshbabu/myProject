import React  from "react";
import logo from "./Rec.png"
import MainContent  from "./MainContent.js";
export default function App()
{
    return(
    <div>
       <img src={logo}  className="logo"/>
       <MainContent />
    </div>
    )
}