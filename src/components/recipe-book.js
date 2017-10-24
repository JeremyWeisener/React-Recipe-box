import React from 'react';
import RecipeCard from './recipe-card';

const RecipeBook = (props) => {
	
		var changeRecipe = props.changeRecipe;
	
		console.log(props);
	
		const DisplayRecipes = props.recipes.map((recipe, index) => {
		
			return <RecipeCard index={index} key={index+1} recipe={recipe} changeRecipe={changeRecipe.bind(this)} />
		
		})
	
		
	
	return (
	
		<div id="accordion" role="tablist" aria-multiselectable="true">
			
			{DisplayRecipes}
		  
		  		  <div>
					<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#addRecipe"> Add Recipe </button>
				  </div>
		  
		</div>
	);
	
}








export default RecipeBook;