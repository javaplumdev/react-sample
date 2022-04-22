import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function DataHolder({ name, age, handleClick, userID }) {
	return (
		<div className="user-info">
			<p>Book name: {name}</p>

			<button onClick={() => handleClick(userID)}>Buy now</button>
		</div>
	);
}

export default DataHolder;
