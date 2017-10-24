import React from 'react';


const RecipeEditer = (props) => {
	
	var index = props.index;
	
	var cookBook = JSON.parse(localStorage.getItem("cookBook"));
	var editMe = cookBook[props.forglory.currentRecipe];
	
	
	
	console.log("cookBook:");
	console.log(cookBook);
	
	console.log("editMe");
	console.log(editMe);
	
	console.log("index");
	console.log(index);	
	
	
	const UpdateRecipe = () => {
		
		var formData = $('#recipeEditer').serializeArray();

		console.log("formData");
		console.log(formData);
		
		
		var newRecipe = {};
			
			newRecipe.title 		= formData[0]['value'];
			newRecipe.image 		= formData[1]['value'];
			newRecipe.ingredients 	= formData[2]['value'].split(',');
			newRecipe.steps 		= formData[3]['value'].split(',');
		
		cookBook[index] = newRecipe; 
		
		localStorage.setItem("cookBook", JSON.stringify(cookBook));

		console.log(formData);

		
	}
	
	

	
		
	
	return (
	
		<div className="modal fade" id="editRecipe" tabIndex="-1" role="dialog" aria-labelledby="editRecipeLabel" aria-hidden="false">
		  <div className="modal-dialog" role="document">
			<div className="modal-content">
			  <div className="modal-header">
			  {/* Title */}
				<h5 className="modal-title" id="exampleModalLabel">
					Edit Recipe
				</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="false">&times;</span>
				</button>
			  </div>
			  <div className="modal-body">
				<form id="recipeEditer" name="editRecipe">
				
					<label htmlFor="name"><h4>Name</h4></label>
					<input id="name" className="form-control" name="title" type="text" defaultValue={editMe.title} />
				
					<label htmlFor="image"><h4>Image</h4></label>
					<input id="image" className="form-control" name="image" type="text" defaultValue={editMe.image} />
				
					<label htmlFor="ingredients"><h4>Ingredients</h4></label>
					<textarea id="ingredients" className="form-control" name="ingredients" rows="4" cols="48" defaultValue={editMe.ingredients}></textarea>
					<label htmlFor="steps"><h4>Steps</h4></label><br/>
					<textarea id="steps" className="form-control" name="steps" cols="48" rows="4" defaultValue={editMe.steps} ></textarea>
					
				</form>
			  </div>
			  <div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				<button onClick={UpdateRecipe} type="button" className="btn btn-success" data-dismiss="modal">Change Recipe</button>
			  </div>
			</div>
		  </div>
		</div>
	);
}


export default RecipeEditer;