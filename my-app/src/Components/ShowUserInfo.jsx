import React, { useContext } from 'react';

import { BookContent } from '../Context/ContextAPI';

import { useParams } from 'react-router-dom';

function ShowUserInfo() {
	const { id } = useParams();
	const [bookData, setBookData] = useContext(BookContent);

	return (
		<>
			{bookData.map((item) => {
				if (item.id == id) {
					return (
						<div key={item.id}>
							<p>{item.bookName}</p>
							<p>{item.price}</p>
						</div>
					);
				}
			})}
		</>
	);
}

export default ShowUserInfo;
