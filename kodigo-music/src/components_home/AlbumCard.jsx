import React from 'react'

const AlbumCard = ({album}) => {
    return (
        <div className='col-lg-2 col-md-3 col-sm-4 col-6 mb-4'>
            <div className="card h-100 border-0 shadow-sm">
                <img src={album.imagen} alt={album.titulo} 
                className='card-img-top'
                style={{height: '180px', objectFit: 'cover'}}/>
                <div className="card-body p-3">
                    <h6 className="card-title text-truncate mb-1">{album.titulo}</h6>
                    <p className="card-text text-muted small mb-0">{album.artista}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard
