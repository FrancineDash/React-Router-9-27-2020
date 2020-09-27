import React from 'react';
import Box from "./Box";

function DataPage(props){
    const[boxInfo]=React.useState([{name:"Smurfette", age:39, color:"blue", id:"daqueenofdudes"}, {name:"Rudy", age:42, color:"blue", id:"daotherdude"}, {name:"Papa Smurf", age:69, color:"blue", id:"dadude"}]);
    const boxEles = boxInfo.map((bx, idx)=>
        <Box name={bx.name} age={bx.age} color={bx.color} id={bx.id} key={idx} />
    );
    return(
        <div className="DataPage">
            <div className="cool"></div>
            <h1>{props.match.params.id}</h1>
            {boxEles}

        </div>
    )
}

export default DataPage;