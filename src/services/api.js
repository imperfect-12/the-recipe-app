const API_KEY = "78e5d2982c9345c990c3114abac3f26c";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const getRandomRecipies = async () => {
    const response = await fetch(`${BASE_URL}/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json();
    return data.recipes || data.results || [];
}

export const searchRecipies = async (query) => {
    if (!query.trim()) {
        return getRandomRecipies()
    }
    const response = await fetch(`${BASE_URL}/complexSearch?query=${query}&number=10&addRecipeInformation=true&apiKey=${API_KEY}`)
    const data = await response.json();
    return data.results;
}