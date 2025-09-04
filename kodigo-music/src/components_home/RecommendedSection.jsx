import { albumesRecomendados } from '../data/mockData'
import AlbumCard from './AlbumCard'
import React from 'react'

const RecommendedSection = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h3 mb-0">Recomendado para ti</h2>
                    <button className="btn btn-link text-decoration-none">
                        Ver más
                    </button>
                </div>
                <div className="row">
                    {albumesRecomendados.map(album => (
                        <AlbumCard key={album.id} album={album}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecommendedSection
