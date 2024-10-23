import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
const Recipes = ({handleRecipeQueue}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])


    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {
                // recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleRecipeQueue={handleRecipeQueue}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    handleRecipeQueue: PropTypes.func.isRequired
}
export default Recipes;