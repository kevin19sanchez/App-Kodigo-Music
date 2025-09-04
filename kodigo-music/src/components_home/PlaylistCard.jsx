import React from 'react'

const PlaylistCard = ({playlist}) => {
    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
                <img src={playlist.imagen}
                className='card-img-top'
                alt={playlist.titulo} 
                style={{height:'200px', objectFit:'cover'}}/>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate mb-2">{playlist.titulo}</h5>
                    <p className="card-text text-muted small flex-grow-1">
                        {playlist.descripcion}
                    </p>
                    <button className="btn btn-success btn-sm mt-auto">
                        <i className="fas fa-play me-2"></i>
                        Reproducir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCard
