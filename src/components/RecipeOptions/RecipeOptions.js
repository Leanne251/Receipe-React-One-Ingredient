import { useState } from 'react';
import RecipeInfo from '../RecipeInfo/RecipeInfo';

function RecipeOptions({ returnedRecipes, setReturnedRecipes }) {
	const [ recipeData, setRecipeData ] = useState();
	async function searchRecipe(e) {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${e.target
				.id}/information?includeNutrition=false&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		const requiredData = { title: data.title, img: data.image, instructions: data.instructions };
		setRecipeData(requiredData);
		console.log('data', data);
		console.log('requiredData', requiredData);
		console.log('button target', e.target.id);
	}

	return returnedRecipes.length === 0 ? (
		<div />
	) : (
		<div>
			<h3>Your Recipe Choices</h3>
			{returnedRecipes.map((element) => (
				<button key={element.id} id={element.id} onClick={searchRecipe}>
					{element.title}
				</button>
			))}
			<RecipeInfo recipeData={recipeData} setRecipeData={setRecipeData} setReturnedRecipes={setReturnedRecipes} />
		</div>
	);
}

export default RecipeOptions;
