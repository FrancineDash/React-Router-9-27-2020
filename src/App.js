import React from 'react';
import './style/App.css';
import Home from "./components/Home"
import Cool from "./components/cool"
import Nav from "./components/Nav";
import DataPage from "./components/DataPage";
import BoxOne from "./components/BoxOne";
import BoxTwo from "./components/BoxTwo";
import Boxy from "./components/Boxy";
import Smurf from "./components/Smurfette";
import Rudy from "./components/Rudy";
import PapaSmurf from "./components/PapaSmurf";
import {
    BrowserRouter as Router,
    Switch,
    Route,
}
    from "react-router-dom";

function App() {



  return (
      <div className="App" >
         <Router>
             <Nav/>
             <Switch>

                 <Route path={"/papasmurf"} component={PapaSmurf} />
                 <Route path={"/rudy"} component={Rudy} />
                 <Route path={"/smurfette"} component={Smurf} />
                 <Route path={"/boxy"} component={Boxy} />
                 <Route path={"/boxOne"} component={BoxOne} />
                 <Route path={"/boxTwo"} component={BoxTwo} />
                 <Route path={"/dataPage/:id"} component={DataPage} />
                 <Route path={"/cool"} component={Cool} />
                 <Route path={"/"} component={Home} />


             </Switch>
         </Router>

      </div>


  );
}

export default App;
