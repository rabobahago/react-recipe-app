import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const APP_ID = '25da76b3'
  const APP_KEY = '6c8e5b86c044e12fd51b5e729f864c32'
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes()
  }, [])
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`,
    )
    const data = await response.json()
    setRecipes(data.hits)
  }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {console.log(recipes)}
    </div>
  )
}

export default App
