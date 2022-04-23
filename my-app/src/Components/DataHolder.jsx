import React from 'react';
import { Link } from 'react-router-dom';

function DataHolder({ name, age, handleClick, userID }) {
	return (
		<div className="user-info">
			<p>Book name: {name}</p>

			<Link>
				<button onClick={() => handleClick(userID)}>Buy now</button>
			</Link>
		</div>
	);
}

export default DataHolder;
