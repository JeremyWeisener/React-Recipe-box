import React from 'react';
import Ingredients from './recipe-ingredients';
import Steps from './recipe-steps';
import RecipeEditer from './edit-recipe';

const RecipeCard = (props) => {
	
	const changeRecipe = props.changeRecipe;
		
	return (	
		<div>
		{/*Card Start*/}
		<div className="recipe card">
			{/*Header*/}
			<div className="card-header" role="tab" id={`heading${props.index}`}>
			  <h5 className="mb-0">
				<a data-toggle="collapse" data-parent="#accordion" href={`#collapse${props.index}`} aria-expanded="true" aria-controls={`collapse${props.index}`}>
				{props.recipe.title}
				</a>
			  </h5>
			</div>
			{/*End Header*/}
			
			{/*Collapse Div*/}
				<div id={`collapse${props.index}`} className="collapse" role="tabpanel" aria-labelledby={`heading${props.index}`}>
				{/*Card IMG*/}
				<img className="card-img-top" src="./img/Fried Chik'n-edit1.jpg" />
				{/*Card Block*/}
				<div className="card-block">
					<p className="card-text">
						
					</p>
						{/* Ingredients */}
					<h3>Ingredients</h3>
					<Ingredients parts={props.recipe.ingredients} />
						{/* Steps */}
					<h3>Steps</h3>
					<Steps levels={props.recipe.steps} />
					
					<a href="#" className="btn btn-primary">Print Recipe</a>
					
					<button onClick={() => {changeRecipe(props.index)}} className="btn btn-success" type="button" data-toggle="modal" data-target="#editRecipe"> Edit Recipe </button>
					
					<a href="#" className="btn btn-danger">Delete Recipe</a>
				</div>
				{/*End Card Block*/}
			</div>
			{/*End Collapsable*/}
		</div>
		{/*End Card*/}
	</div>
	
	);
	
}


export default RecipeCard;