import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BookContent } from '../Context/ContextAPI';

function DataHolder() {
	const [movies, setMovies, name] = useContext(BookContent);

	return (
		<div className="user-info" style={{ margin: '1em' }}>
			<p>{name}</p>
			{movies.map((item) => {
				return (
					<div
						style={{
							margin: '1em',
							border: '2px solid red',
							padding: '2em',
							width: '180px',
						}}
						key={item.id}
					>
						<p>{item.bookName}</p>
						<Link to={`/buy/${item.id}`}>
							<button>Read</button>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default DataHolder;
