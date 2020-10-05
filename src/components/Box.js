import React from 'react';
//import {Link} from "react-router-dom";

function Box(props){

   // const [name]=React.useState(props.name);
    const [number]=React.useState(props.age);
    //const [color]=React.useState(props.color);
    //const [id]=React.useState(props.id)

    //const addUp = ()=>{
     //  setNumber(number+10);
     //  if(number>=80){
     //      setColor("#E0FFFF")
      //   }
     //};

    let style ={
        backgroundColor:"none",
        minheight: number+"px",
        color:"white"
    };

    return(
        <div className={"box"} style={style}>
            <div style={{backgroundColor:"green", height:"100px", width:"100px", marginTop:"30px"}}></div>
        </div>
    )
}

export default Box;

