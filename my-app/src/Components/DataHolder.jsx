import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BookContent } from '../Context/ContextAPI';

function DataHolder() {
	const [movies, setMovies, name] = useContext(BookContent);

	return (
		<div className="user-info">
			<p>{name}</p>
			{movies.map((item) => {
				return <p key={item.id}>{item.bookName}</p>;
			})}
		</div>
	);
}

export default DataHolder;
