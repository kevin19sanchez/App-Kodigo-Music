import { playlistsDestacadas } from '../data/mockData'
import PlaylistCard from './PlaylistCard'

import React from 'react'

const PlaylistSection = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="h3 mb-0">Playlists Destacadas</h2>
                    <button className="btn btn-link text-decoration-none">
                        Ver todas
                    </button>
                </div>
                <div className="row">
                    {playlistsDestacadas.map(playlist => (
                        <PlaylistCard key={playlist.id} playlist={playlist} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PlaylistSection
