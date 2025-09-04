import React from 'react'

const HeroSection = () => {
    return (
        <section className="bg-success bg-opacity-25 py-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="display-4 fw-bold text-dark mb-3">
                            Descubre tu música favorita
                        </h1>
                        <p className="lead text-muted mb-4">
                            Millones de canciones, podcasts y playlists esperándote
                        </p>
                        <button className="btn btn-success btn-lg">
                            <i className="fas fa-play me-2"></i>
                            Comenzar a escuchar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
