import React from 'react';

function RecipeInfo({ recipeData, setRecipeData, setReturnedRecipes }) {
	console.log('recipeInfo', recipeData);

	function searchAgain() {
		setRecipeData(undefined);
		setReturnedRecipes([]);

		// remove Recipe Info section
		//remove Recipe Options section
		// Bring back Search Form
	}

	return recipeData === undefined ? (
		<div />
	) : (
		<div>
			<h2>{recipeData.title}</h2>
			<img style={{ width: '200px', height: '200px', textAlign: 'center' }} src={recipeData.img} />
			<p>{recipeData.instructions}</p>
			<button onClick={searchAgain}>Search Again</button>
		</div>
	);
}

export default RecipeInfo;
