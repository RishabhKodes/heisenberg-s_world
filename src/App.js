import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import './App.css';

const App = () =>{ 

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [ query, setQuery ] = useState('')

  useEffect(() =>{

    const fetchItems = async () =>{
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name= ${query}`
      )

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={ isLoading } items = {items} />
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <h1>A tribute to the greatest show in the world</h1><br></br>
      <h1>by <i>e330r_assasin</i></h1>
    </div>
  );

}

export default App;
