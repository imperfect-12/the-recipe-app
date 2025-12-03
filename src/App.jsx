import './css/App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { RecipeProvider } from './contexts/RecipeContext'
import { useState, useEffect } from "react"
import { getRandomRecipies, searchRecipies } from "./services/api"


function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRandomRecipies = async () => {
      try {
        const randomRecipies = await getRandomRecipies()
        setRecipes(randomRecipies || [])
      } catch (err) {
        console.log(err)
        setError("Failed to load recipes...")
      } finally {
        setLoading(false)
      }
    }
    loadRandomRecipies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (loading) return

    setLoading(true)

    try {
      const searchResults = await searchRecipies(searchQuery)
      setRecipes(searchResults || [])
      setError(null)
    } catch (err) {
      console.log(err)
      setError("Failed to load recipes...")
    } finally {
      setLoading(false)
    }
  }

  return (
    <RecipeProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home
            recipes={recipes}
            loading={loading}
            error={error}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </main>
    </RecipeProvider>
  )
}

export default App
