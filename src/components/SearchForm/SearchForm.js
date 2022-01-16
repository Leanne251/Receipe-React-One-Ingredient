import { useState, useEffect } from 'react';
import RecipeOptions from '../RecipeOptions/RecipeOptions';

function SearchForm() {
	const [ input, setInput ] = useState('');
	// const [ searchFormDisplay, setSearchFormDisplay ] = useState(true);
	const [ returnedRecipes, setReturnedRecipes ] = useState([]);

	function getInput(e) {
		setInput(e.target.value);
	}

	async function searchRecipes() {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=3&apiKey=a555aea16fc3473197b4c2afa236c9f8`
		);
		const data = await response.json();
		console.log(data);
		setReturnedRecipes(data);
	}

	//

	return (
		<div>
			What do you want to cook?
			<p>
				Ingredient One:<input type="text" onChange={getInput} />
			</p>
			<button onClick={searchRecipes}>Search</button>
			<RecipeOptions returnedRecipes={returnedRecipes} input={input} setReturnedRecipes={setReturnedRecipes} />
		</div>
	);
}

export default SearchForm;
