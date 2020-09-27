import React from 'react';
import {Link} from "react-router-dom";
function Nav(props){
    const [color]=React.useState("white")
    return(
        <nav style={{backgroundColor:color, padding: "30px"}}>
            <Link to ={"/"}>Home</Link>
            <Link to ={"/dataPage/Useful Information"}>Useful Information</Link>
            <Link to ={"/cool"}>Cool</Link>
        </nav>



    )
}

export default Nav;