import Header from '../components/Header'
import React, { useState } from 'react'

const Library = () => {
    const [activeTab, setActiveTab] = useState('playlists')

    // Datos mock para la biblioteca
    const misPlaylists = [
        { id: 1, nombre: 'Mi Playlist #1', canciones: 15, imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop' },
        { id: 2, nombre: 'Favoritos', canciones: 23, imagen: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=150&h=150&fit=crop' },
        { id: 3, nombre: 'Para Estudiar', canciones: 8, imagen: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop' }
    ];

    const artistasSeguidos = [
        { id: 1, nombre: 'Artista Favorito 1', seguidores: '1.2M', imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
        { id: 2, nombre: 'Artista Favorito 2', seguidores: '890K', imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop' },
        { id: 3, nombre: 'Artista Favorito 3', seguidores: '2.1M', imagen: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop' }
    ];

    const albumesGuardados = [
        { id: 1, titulo: 'Álbum Guardado 1', artista: 'Artista 1', imagen: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=150&h=150&fit=crop' },
        { id: 2, titulo: 'Álbum Guardado 2', artista: 'Artista 2', imagen: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop' }
    ];
        return (
                <main className="container mt-4">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="mb-4">Mi Biblioteca</h1>
                            
                            {/* Tabs de navegación */}
                            <ul className="nav nav-tabs mb-4">
                                <li className="nav-item">
                                    <button 
                                        className={`nav-link ${activeTab === 'playlists' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('playlists')}>
                                        <i className="fas fa-list me-2"></i>
                                        Playlists
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className={`nav-link ${activeTab === 'artistas' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('artistas')}>
                                        <i className="fas fa-microphone me-2"></i>
                                        Artistas
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className={`nav-link ${activeTab === 'albumes' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('albumes')}>
                                        <i className="fas fa-compact-disc me-2"></i>
                                        Álbumes
                                    </button>
                                </li>
                            </ul>

                            {/* Contenido de las tabs */}
                            <div className="tab-content">
                            
                                {/* Tab Playlists */}
                                {activeTab === 'playlists' && (
                                    <div className="tab-pane fade show active">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h3>Mis Playlists</h3>
                                            <button className="btn btn-success">
                                            <i className="fas fa-plus me-2"></i>
                                            Nueva Playlist
                                            </button>
                                        </div>
                                        <div className="row">
                                            {misPlaylists.map(playlist => (
                                            <div key={playlist.id} className="col-md-4 col-sm-6 mb-3">
                                                <div className="card h-100">
                                                    <img src={playlist.imagen} className="card-img-top" alt={playlist.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{playlist.nombre}</h5>
                                                        <p className="card-text text-muted">{playlist.canciones} canciones</p>
                                                        <button className="btn btn-success btn-sm">
                                                            <i className="fas fa-play me-2"></i>
                                                            Reproducir
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tab Artistas */}
                                {activeTab === 'artistas' && (
                                    <div className="tab-pane fade show active">
                                        <h3 className="mb-3">Artistas que Sigues</h3>
                                        <div className="row">
                                            {artistasSeguidos.map(artista => (
                                            <div key={artista.id} className="col-md-4 col-sm-6 mb-3">
                                                <div className="card text-center">
                                                    <div className="card-body">
                                                        <img 
                                                        src={artista.imagen} 
                                                        className="rounded-circle mb-3" 
                                                        alt={artista.nombre}
                                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                        />
                                                        <h5 className="card-title">{artista.nombre}</h5>
                                                        <p className="card-text text-muted">{artista.seguidores} seguidores</p>
                                                        <button className="btn btn-outline-success btn-sm me-2">
                                                            <i className="fas fa-play me-2"></i>
                                                            Reproducir
                                                        </button>
                                                        <button className="btn btn-outline-secondary btn-sm">
                                                            <i className="fas fa-user-minus me-2"></i>
                                                            Dejar de seguir
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tab Álbumes */}
                                {activeTab === 'albumes' && (
                                    <div className="tab-pane fade show active">
                                        <h3 className="mb-3">Álbumes Guardados</h3>
                                        <div className="row">
                                            {albumesGuardados.map(album => (
                                            <div key={album.id} className="col-md-3 col-sm-6 mb-3">
                                                <div className="card h-100">
                                                    <img src={album.imagen} className="card-img-top" alt={album.titulo} style={{ height: '200px', objectFit: 'cover' }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title text-truncate">{album.titulo}</h5>
                                                        <p className="card-text text-muted">{album.artista}</p>
                                                        <button className="btn btn-success btn-sm">
                                                            <i className="fas fa-play me-2"></i>
                                                            Reproducir
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
        )
    }

export default Library
