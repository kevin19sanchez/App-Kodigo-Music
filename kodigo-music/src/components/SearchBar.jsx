import React, { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            console.log('Buscando:', searchTerm);
            
        }
    }
    return (
        <form onSubmit={handleSearch} className="w-100">
            <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                    <i className="fas fa-search text-muted"></i>
                </span>
                <input 
                type="text" 
                className="form-control border-start-0 bg-light" 
                placeholder="Buscar canciones, artistas, álbumes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                    Buscar
                </button>
            </div>
        </form>
    )
}

export default SearchBar
