import React from 'react';


const Steps = ({levels}) => {
	
		const items = levels.map((step, index) => {
		
			return <li key={index+1}> {step} </li>
		
	})
	
	return (
	
		<div>
			<ol>
				{items}
			</ol>
		</div>
	);
	
}


export default Steps;