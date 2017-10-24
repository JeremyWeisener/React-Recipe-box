import React from 'react';


const Ingredients = ({parts}) => {
	
		const items = parts.map((part, index) => {
		
			return <li key={index+1}> {part} </li>
		
	})
	
	return (
	
		<div>
			<ul>
				{items}
			</ul>
		</div>
	);
	
}








export default Ingredients;