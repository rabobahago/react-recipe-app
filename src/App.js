import React, { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './App.css'

const App = () => {
  const APP_ID = '25da76b3'
  const APP_KEY = '6c8e5b86c044e12fd51b5e729f864c32'
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
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
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        )
      })}
    </div>
  )
}

export default App
