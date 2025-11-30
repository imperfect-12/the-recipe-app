import { createContext, useState, useContext, useEffect } from "react";

const RecipeContext = createContext()

export const useRecipeContext = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (recipe) => {
        setFavourites(prev => [...prev, recipe])
    }

    const removeFavourites = (recipeId) => {
        setFavourites(prev => prev.filter(recipe => recipe.id !== recipeId))
    }

    const isFavourite = (recipeId) => {
        return favourites.some(recipe => recipe.id === recipeId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFavourites,
        isFavourite
    }

    return <RecipeContext.Provider value={value}>
        {children}
    </RecipeContext.Provider>
}