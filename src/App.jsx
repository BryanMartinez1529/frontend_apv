import { BrowserRouter,Router,Route, Routes } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout";
import RutaProtegidad from "./layout/RutaProtegidad";
import Login from "./pages/Login";
import Registar from "./pages/Registar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import NuevoPassword from "./pages/NuevoPassword";
import AdministrarPacientes from "./pages/AdministrarPacientes";
import EditarPerfil from "./pages/EditarPerfil";
import CambiarPassword from "./pages/CambiarPassword";
import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
            <Routes>  
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="registrar" element={<Registar/>} />
                    <Route path="olvide-password" element={<OlvidePassword/>} />
                    <Route path="olvide-password/:token" element={<NuevoPassword/>} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta/>} />

                </Route>

                <Route path="/admin" element={<RutaProtegidad />}>
                  <Route index element={<AdministrarPacientes/>} />
                  <Route path="perfil" element={<EditarPerfil />} />
                  <Route path="cambiar-password" element={<CambiarPassword />} />
                </Route>
            
            </Routes>
          </PacientesProvider>  
        </AuthProvider>    
      </BrowserRouter>
    </>
  )
}

export default App
