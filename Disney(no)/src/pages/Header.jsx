import '/src/styles/Header.css'

import { useState } from 'react'

export const Header = () => {
    const [viewSearch, setViewSearch] = useState(false);
    const [search, setSearch] = useState('');

    return (
        <header>
            <div id='home-page'>
                <img src='/icon.png' />
                <h1>Disñey+</h1>
            </div>
            {viewSearch && <input id='search-in' type='text' placeholder='Buscar películas y series...' onChange={(e) => {setSearch(e.target.value)}} />}
            <img id='search-but' src='/src/assets/search.png' onClick={() => {setViewSearch(!viewSearch)}} />
            <img id='logout-but' src='/src/assets/user.png' />
        </header>
    )
}