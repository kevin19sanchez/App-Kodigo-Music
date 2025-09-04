import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-sm py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-auto">
                        <NavLink to="/" className="text-decoration-none d-flex align-items-center">
                        <div className="bg-success rounded me-2 d-flex align-items-center justify-content-center" 
                            style={{ width: '35px', height: '35px' }}>
                            <i className="fas fa-play text-white"></i>
                        </div>
                        <h4 className="mb-0 text-dark fw-bold">Kodigo Music</h4>
                        </NavLink>
                    </div>

                    {/* Barra de búsqueda */}
                    <div className="col-md">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                                <i className="fas fa-search text-muted"></i>
                            </span>
                            <input 
                                type="text" 
                                className="form-control border-start-0 bg-light" 
                                placeholder="Buscar canciones, artistas, álbumes..."
                            />
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="col-auto text-end">
                        <nav className="d-flex justify-content-end align-items-center gap-3">
                            <NavLink to="/" 
                                className={({ isActive }) => 
                                `text-decoration-none d-flex align-items-center px-2 py-1 rounded 
                                ${ isActive 
                                    ? 'text-success fw-bold bg-success bg-opacity-10' 
                                    : 'text-dark hover-text-success'}`}>
                                <i className="fas fa-home me-2"></i>
                                <span className="d-none d-lg-inline">Inicio</span>
                            </NavLink>
                            
                            <NavLink to="/library" 
                                className={({ isActive }) => 
                                `text-decoration-none d-flex align-items-center px-2 py-1 rounded 
                                ${ isActive 
                                    ? 'text-success fw-bold bg-success bg-opacity-10' 
                                    : 'text-dark hover-text-success'}`}>
                                <i className="fas fa-book me-2"></i>
                                <span className="d-none d-lg-inline">Mi Biblioteca</span>
                            </NavLink>
                            
                            <NavLink to="/auth" 
                                className={({ isActive }) => isActive 
                                    ? 'btn btn-success d-flex align-items-center'
                                    : 'btn btn-outline-success d-flex align-items-center'
                                }>
                                <i className="fas fa-user me-2"></i>
                                <span className="d-none d-lg-inline">Iniciar Sesión</span>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
