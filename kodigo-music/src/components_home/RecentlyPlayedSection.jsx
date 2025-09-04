import { cancionesRecientes } from '../data/mockData'
import SongItem from './SongItem'
import React from 'react'

const RecentlyPlayedSection = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h3 mb-0">Reproducido recientemente</h2>
                </div>
                <div className="bg-light rounded p-3">
                    {cancionesRecientes.map(cancion => (
                        <SongItem key={cancion.id} cancion={cancion} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentlyPlayedSection
