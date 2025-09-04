import React from 'react'
import Header from '../components/Header'

const NotFound = () => {
    return (
        <main className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="mb-4">
                        <i className="fas fa-music fa-5x text-muted mb-3"></i>
                        <h1 className="display-1 text-muted">404</h1>
                    </div>
                    <h2 className="mb-3">Página no encontrada</h2>
                    <p className="text-muted mb-4">
                        Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <a href="/" className="btn btn-success">
                        <i className="fas fa-home me-2"></i>
                        Volver al Inicio
                        </a>
                        <button 
                        className="btn btn-outline-success" 
                        onClick={() => window.history.back()}
                        >
                        <i className="fas fa-arrow-left me-2"></i>
                        Página Anterior
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound
