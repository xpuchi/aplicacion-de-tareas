import "./App.css";
import kirby from "./img/-1.gif";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="contenedor-titulo">
        <h2>Listado de tareas</h2>
        <img src={kirby} className="kirby" />
      </div>

      <div className="tareas-lista-principal">
        <h4>Tareas</h4>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
