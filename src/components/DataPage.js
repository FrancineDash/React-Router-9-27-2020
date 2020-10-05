import React from "react";
import Box from "./Box";


function DataPage (props){

    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState ("purple");
    const [data, setData] = React.useState([{id: ""}]);
    const [submit, setSubmit] = React.useState(false);

    const colors = ["blue","green","orange"];
    const randColor = colors[Math.floor(Math.random() * colors.length)];

    React.useEffect(()=>{
        if (count === 0){
            setColor("purple")
        }
        else if(count % 5 ===0) {
            setColor(randColor)
        }
        else{
            setColor("purple")
        }

    }, [color, randColor, count]);

    React.useEffect(()=>{
        let ogData = data;
        ogData.push({id: "_______________"});
        setData(ogData);
    }, [data, submit]);


    let boxEles = data.map((it, idx)=>
        <Box name={it.id} idx={idx.id}/>
    )
    function reset() {
        window.location.reload(false);
    }
    function addUp(){
        setCount  (count + 1);
        if (count % 2 !== 0){
            setSubmit(!submit);
        }
        else{
            setSubmit(submit);
        }
    }

    return (
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={addUp}>Increase by 1</button>
            <button onClick={reset}>Reset</button>
            <h3>{count}</h3>
            <div style={{backgroundColor:color, height: "100",width:"100px",marginTop:"30px"}}>
                {boxEles}</div>
        </div>
    )
}
export default DataPage