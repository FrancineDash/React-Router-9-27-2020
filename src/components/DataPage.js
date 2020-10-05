import React from 'react';
import Box from "./Box";

function DataPage(props){
    const[number, setNumber]=React.useState(0);
    const[color,setColor]=React.useState("purple");
    const[data,setData]=React.useState([{name:"Luke", age:26}]);
    const[submit]=React.useState(false);
    const[oddNumber, setOddNumber]=React.useState(1)
    //const[reset]=React.useState(0);

    React.useEffect(()=>{
        if(number>5){
            setColor("red");
        }

    }, [number]);


    React.useEffect(()=>{

        let ogData = data;
        ogData.push({name:"freddy", age:30});
        setData(ogData);

    }, [number,data, submit]);

    let boxEles = data.map((it, idx)=>
        <Box name={it.name} age={it.age}/>

    )

    return(
        <div>
            <h1>{props.match.params.id}</h1>
            <button onClick={()=>setNumber(number+1)&&"odd"(data+1)}>Increase by 1</button>
            <button onClick={()=>setNumber(0)&&setOddNumber(oddNumber===0)}>Reset</button>
            <h3>{number}</h3>
            <div style={{backgroundColor:color, height:"100px", width:"100px", marginTop:"30px"}}></div>
            {boxEles}

        </div>
    )
}

export default DataPage;