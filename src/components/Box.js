import React from 'react';
import {Link} from "react-router-dom";

function Box(props){

    const [name]=React.useState(props.name);
    const [number]=React.useState(props.age);
    const [color]=React.useState(props.color);
    const [id]=React.useState(props.id)

    //const addUp = ()=>{
     //   setNumber(number+10);
     //   if(number>=80){
     //       setColor("#E0FFFF")
   //     }
   // };

    let style ={
        backgroundColor:"orange",
        minheight: number+"px",
        color:"white"
    };

    return(
        <div className={"box"} style={style}>
            {number===39&&<Link to={"/Smurfette"}><h1>Name: {name}</h1></Link>}
            {number===42&&<Link to={"/Rudy"}><h1>Name: {name}</h1></Link>}
            {number===69&&<Link to={"/PapaSmurf"}><h1>Name: {name}</h1></Link>}
            <h1>Age: {number}</h1>
            <h1>ID: {id}</h1>
            <h1>Color: {color}</h1>
        </div>
    )
}

export default Box;

