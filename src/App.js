import './App.css';
import './propiedades.css';
import Register from './components/auth/register';
import Pedidos from './components/pedidos/pedidos';
import Detalle from './components/pedidos/Detalle';
import Contenedor from './components/contenedor';
import Actualizar from './components/pedidos/Actualizar';
import Nuevoregistro from './components/pedidos/Nuevoregistro';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Login from './components/auth/login';

function App() {
  return (

    <BrowserRouter>
      
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />  
          <Route path="/registro" element={<Register/>} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedidos/:id" element={<Detalle />} />
          <Route path="/pedidos/:id/edit" element={<Actualizar />} />
          <Route path="/new" element={<Nuevoregistro />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
