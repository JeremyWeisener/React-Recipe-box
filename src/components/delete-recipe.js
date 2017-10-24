import React from 'react';


const AddRecipe = (props) => {
	
	
	const StoreRecipe = () => {
		
		if(localStorage.getItem("cookBook") == undefined){
			localStorage.setItem("cookBook", "[]");
		}
		
		var cookBook = JSON.parse(localStorage.getItem("cookBook"));
		var newRecipe = {};
		var formData = $('#newRecipe').serializeArray();
			
			newRecipe.title = formData[0]['value'];
			newRecipe.image = formData[1]['value'];
			newRecipe.ingredients = formData[2]['value'].split(',');
			newRecipe.steps = formData[3]['value'].split(',');
		
		cookBook.push(newRecipe); 
		
		localStorage.setItem("cookBook", JSON.stringify(cookBook))
		
		//console.log(cookBook);
		//console.log(formData);
		//console.log(newRecipe);
		
		//console.log(localStorage.getItem("cookBook"));
		
	}
	
	
	
	return (
	
		<div className="modal fade" id="addRecipe" tabIndex="-1" role="dialog" aria-labelledby="addRecipeLabel" aria-hidden="true">
		  <div className="modal-dialog" role="document">
			<div className="modal-content">
			  <div className="modal-header">
			  {/* Title */}
				<h5 className="modal-title" id="exampleModalLabel">
					New Recipe
				</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>
			  <div className="modal-body">
				<form id="newRecipe" name="newRecipe">
				
					<label htmlFor="name"><h4>Name</h4></label>
					<input id="name" className="form-control" name="title" type="text" placeholder="Spicy Fried Chik'n"></input>
				
					<label htmlFor="image"><h4>Image</h4></label>
					<input id="image" className="form-control" name="image" type="text" name="pic" placeholder="https://imgur.com/gallery/sr4yaAS" />
				
					<label htmlFor="ingredients"><h4>Ingredients</h4></label>
					<textarea id="ingredients" className="form-control" name="ingredients" rows="4" cols="48" placeholder="2cups Vital Wheat Gluten, 1cup Franks Hot Sauce, 5tbsp Nutritional Yeast"></textarea>
					<label htmlFor="steps"><h4>Steps</h4></label><br/>
					<textarea id="steps" className="form-control" name="steps" cols="48" rows="4" placeholder="mix Vital Wheat Gluten with Nutritional Yeast, mix Franks Hot Sauce with Tahini, mix Wet and Dry ingredients" ></textarea>
					
				</form>
			  </div>
			  <div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				<button onClick={StoreRecipe} type="button" className="btn btn-primary">Add Recipe</button>
			  </div>
			</div>
		  </div>
		</div>
	);
	
}


export default AddRecipe;