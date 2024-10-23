import PropTypes from "prop-types";

const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalory, totalTime, totalCalory}) => {
    return (
        <div className="1/3 border-2 rounded-2xl text-gray-800 p-2 bg-base-100 mt-10">
            <div className="overflow-x-auto">
                <h2 className="text-center font-bold text-xl mb-4">Wants To Cook : {recipeQueue.length}</h2>
                <hr />
                {/* {Wants to cook table} */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipeQueue.map((recipe,idx) => (
                                <tr className="hover" key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.prepare_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td><button onClick={() => {handleRemove(recipe.recipe_id); calculateTimeAndCalory(recipe.prepare_time, recipe.calories)}} className="btn rounded-full px-2 py-1 md:px-6 md:py-2 bg-green-400">Preparing</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* {Currently cooking table} */}
            <div className="overflow-x-auto mt-10">
                <h2 className="text-center font-bold text-xl mb-4">Wants To Cook : {preparedRecipe.length}</h2>
                <hr />
                {/* {Wants to cook table} */}
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparedRecipe.map((recipe,idx) => (
                                <tr className="hover" key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.prepare_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>
                            ))
                        }

                        <tr>
                            <th></th>
                            <td></td>
                            <td>Total Time : {totalTime}</td>
                            <td>Total Calories : {totalCalory}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array,
    handleRemove: PropTypes.func,
    preparedRecipe: PropTypes.array,
    calculateTimeAndCalory: PropTypes.func,
    totalTime: PropTypes.number,
    totalCalory: PropTypes.number
}

export default Sidebar;