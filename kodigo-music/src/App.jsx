import './App.css'
import Home from './pages/Home'
import Library from './pages/Library';
import Auth from './pages/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';


function App() {

  return (
    <>
      <Header />
        <div className="App">
          <Routes>
            {/* Ruta principal - Home */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta de Mi Biblioteca */}
            <Route path="/library" element={<Library />} />
            
            {/* Ruta de Autenticación (Login/Register) */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Ruta 404 - Página no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      
    </>
  )
}

export default App
