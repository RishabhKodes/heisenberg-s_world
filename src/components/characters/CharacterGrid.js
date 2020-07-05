import React from 'react'
import CharaterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <h1>Loading...</h1>
        ) : ( <section className="cards">
        {items.map(item => (
            <CharaterItem key={item.char_id} item={item}></CharaterItem>
        ))}
    </section>
    )
}

export default CharacterGrid
