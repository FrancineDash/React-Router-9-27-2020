import React from 'react';
import style from "../../../class10-4-2020/src/style/style";
import {Link} from "react-router-dom";




function Home( ){
    //const [toggle, setToggle] = React.useState("");
    //const [color]= React.useState(props.color);
    //const[boxInfo]=React.useState([{name:"Fred", age:69}, {name:"Freddy", age:40}, {name:"Frooty", age:10}]);

    //const boxEles = boxInfo.map((bx, idx)=>
    //    <Box name={bx.name} age={bx.age} key={idx} />

  //  );

    return (
        <div className="homePage" >
            <div className="cool" >
            </div>

            <Link to={"/Boxy"}><div style={style.exampleBox}></div></Link>
            <Link to={"/BoxOne"}><div style={style.BoxOne}></div></Link>
            <Link to={"/BoxTwo"}><div style={style.BoxTwo}></div></Link>


        </div>

    );
}

export default Home;