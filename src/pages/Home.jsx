import RecipeCard from "../components/RecipeCard"
import "../css/Home.css"
import searchIcon from "../assets/search_icon.svg";


function Home({ recipes,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    handleSearch }) {

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder="Search for recipes..." className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                className="search-button"
                type="submit"
                aria-label="Search"
            >
                <img src={searchIcon} alt="" className="search-icon" aria-hidden="true" />
            </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? <div className="loading">Loading...</div> :
            <div className="recipes-grid">
                {recipes.map((recipe) =>
                    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) && (<RecipeCard recipe={recipe} key={recipe.id} />))}
            </div>}
    </div>
}

export default Home