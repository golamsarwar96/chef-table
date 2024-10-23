import Header from "./components/Header"
import Banner from "./components/Banner"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

function App() {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTime] = useState(0);
  const [totalCalory, setCalory] = useState(0);


  // const addRecipeToQueue = recipe => {

  // }
  const calculateTimeAndCalory = (time, calory)=>{
    setTime(totalTime+time);
    setCalory(totalCalory+calory);0
  }

  const handleRemove = id => {
    //find which recipe to remove 
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    //Remove from want to cook 
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }


  const handleRecipeQueue = (recipe)=>{
    
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id )
    if(!isExist){
      const newRecipeQueue = [...recipeQueue, recipe]
      setRecipeQueue(newRecipeQueue);
    }
    else{
      alert("Recipe Already Added");
    }
    
  }


  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* {header section} */}
      <Header></Header>
      {/* {banner section} */}
      <Banner></Banner>
      {/* {our recipes section} */}
      <OurRecipes></OurRecipes>

      <section className="flex flex-col md:flex-row gap-3">
        {/* {recipes section} */}
        <Recipes handleRecipeQueue={handleRecipeQueue}></Recipes>
        {/* sidebar section */}
        <Sidebar 
          handleRemove={handleRemove} 
          preparedRecipe={preparedRecipe} 
          recipeQueue={recipeQueue}
          calculateTimeAndCalory={calculateTimeAndCalory}
          totalTime={totalTime}
          totalCalory={totalCalory}></Sidebar>
      </section>
    </div>

  )
}

export default App
