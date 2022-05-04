import React, { useState, createContext } from 'react';

export const BookContent = createContext();

export function DataProviver(props) {
	const [bookData, setBookData] = useState([
		{
			id: 1,
			bookName: 'Charlito',
			price: 14,
		},
		{ id: 2, bookName: 'Alexandra', price: 16 },
		{ id: 3, bookName: 'Bamp', price: 16 },
	]);

	return (
		<BookContent.Provider value={[bookData, setBookData]}>
			{props.children}
		</BookContent.Provider>
	);
}
