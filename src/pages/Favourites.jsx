import "../css/Favourites.css";
import { useRecipeContext } from "../contexts/RecipeContext";
import RecipeCard from "../components/RecipeCard";

function Favourites() {
    const { favourites } = useRecipeContext();

    return (
        <div className="favorites">
            <h2>Your Favourites</h2>
            {Array.isArray(favourites) && favourites.length > 0 ? (
                <div className="recipes-grid">
                    {favourites.map((recipe) => (
                        <RecipeCard recipe={recipe} key={recipe.id} />
                    ))}
                </div>
            ) : (
                <div className="favorites-empty">
                    <h3>No Favourite Recipes Yet</h3>
                    <p>Start adding recipes to your favourites and they will appear here!</p>
                </div>
            )}
        </div>
    );
}

export default Favourites;