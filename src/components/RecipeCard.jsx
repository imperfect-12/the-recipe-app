import "../css/RecipeCard.css"
import { useRecipeContext } from "../contexts/RecipeContext"

function RecipeCard({ recipe }) {
    const { isFavourite, addToFavourites, removeFavourites } = useRecipeContext()
    const favourite = isFavourite(recipe.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFavourites(recipe.id)
        else addToFavourites(recipe)
    }

    return <div className="recipe-card">
        <div className="recipe-image">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-overlay">
                <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="recipe-info">
            <h3>{recipe.title}</h3>
            <a href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="recipe-instruct"
            >Cooking Instructions</a>
        </div>
    </div>
}

export default RecipeCard