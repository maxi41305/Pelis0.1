import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Listado } from "./Components/Listado";
import { Aside } from "./Components/Aside";
import { useState } from "react";
import { Crear } from "./Components/Crear";

function App() {

  const [listadoState, setlistadostate] = useState([]);


  return (
    <div>
      <body>
        <div className="layout">
          <Header></Header>

          <Home></Home>

          <Listado listadoState={listadoState} setlistadostate={setlistadostate} ></Listado>
          
          <aside className="lateral">
            
            <Aside listadoState={listadoState} setlistadostate={setlistadostate} ></Aside>

            <Crear setlistadostate={setlistadostate}></Crear>

          </aside>
         
          <Footer></Footer>
        </div>
      </body>
    </div>
  );
}

export default App;
