import React from 'react';


function Box(props){

    const [id]=React.useState(props.name);
    const [color] = React.useState (props.color);

    return(

        <div style={{backgroundColor:color, width:"100",height:"100px", marginTop:"30px"}}>
        {id}</div>
    )
}

export default Box;