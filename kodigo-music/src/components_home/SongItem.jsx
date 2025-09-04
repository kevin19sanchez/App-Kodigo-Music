import React from 'react'

const SongItem = ({cancion}) => {
    return (
        <div className="d-flex align-items-center p-2 rounded hover-bg-light">
            <img src={cancion.imagen} alt={cancion.titulo} 
            className='rounded me-3'
            style={{width: '50px', height: '50px', objectFit: 'cover'}}/>

            <div className="flex-grow-1">
                <h6 className='mb-0'>{cancion.titulo}</h6>
                <small className='text-muted'>{cancion.artista} • {cancion.album}</small>
            </div>

            <span className="text-muted me-3">{cancion.duracion}</span>

            <button className="btn btn-link p-1 text-muted">
                <i className="fas fa-heart"></i>
            </button>
            
            <button className="btn btn-link p-1 text-muted">
                <i className="fas fa-ellipsis-h"></i>
            </button>
        </div>
    )
}

export default SongItem
