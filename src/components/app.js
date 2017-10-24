import React, { Component } from 'react';
import RecipeCard from './recipe-card';
import RecipeBook from './recipe-book';
import AddRecipe from './add-recipe';
import RecipeEditer from './edit-recipe';

export default class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			currentRecipe: 0,
			recipes: JSON.parse(localStorage.getItem('cookBook')),
			updateKey: 0,
			counter: 0
		}
	}
	
	changeRecipe = (arg) => {
		
		this.setState({currentRecipe:arg});
		
		console.log('state changed to' + this.state.currentRecipe + '!');
		

		
		//$('#editModal').remove();
		
	    //$('#popUps').add(<RecipeEditer id="editModal" index={this.state.currentRecipe} />);
		
		
	}
	
	
  render() {
	  
    return (
	
	<div>
		<div>
   		  <RecipeBook changeRecipe={this.changeRecipe.bind(this)} recipes={this.state.recipes} />		  
			  
		</div>
	
		<div id="popUps">
			<AddRecipe />
			<RecipeEditer index={this.state.currentRecipe} forglory={this.state} />
		</div>
		
		<div id="editPopup">
			
		</div>
	</div>
    );
  }
}