import PropTypes from "prop-types";
const Recipe = ({recipe, handleRecipeQueue}) => {
    // eslint-disable-next-line no-unused-vars
    const {recipe_name,recipe_img, description, ingredients, prepare_time, calories} = recipe;
    console.log(recipe_name)
    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl p-4 border">
                    <figure className="rounded-lg">
                        <img className="object-cover"src={recipe_img}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="border-b text-left">
                            <h1 className="card-title text-2xl mb-3 font-bold">{recipe_name}</h1>
                            <p className="mb-5 text-zinc-500">{description}</p>
                        </div>
                        <div className="s">
                           <h3 className="font-bold text-xl mb-4">Ingredients : {recipe.ingredients.length}</h3>
                           <ul className="font-bold mb-4">
                             {
                                recipe.ingredients.map((item,idx) => (
                                    <li  className="ml-5 list-disc text-zinc-700" key={idx}>{item}</li>
                                ))}
                           </ul>
                        </div>
                        <hr />
                        <div className="flex gap-10 mt-3">
                            <h5 className="text-zinc-500"><i className="fa-regular fa-clock"></i> {prepare_time}</h5>
                            <h5 className="text-zinc-500"><i className="fa-solid fa-fire"></i> {calories} calories</h5>
                        </div>
                        
                        <div className="card-actions mt-4">
                            <button onClick={()=>handleRecipeQueue(recipe)} className="btn rounded-full px-8 bg-green-400">Want To Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.array,
    handleRecipeQueue: PropTypes.func
}
export default Recipe;