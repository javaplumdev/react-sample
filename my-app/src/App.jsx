import React from 'react';
import './App.css';
import DataHolder from './Components/DataHolder';
import Navbar from './Components/Navbar';
import { Data } from './Data';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ShowUserInfo from './Components/ShowUserInfo';

function App() {
	const [active, setActive] = React.useState(false);

	const handleClick = (id) => {
		showData(id);
	};

	const showData = (id) => {
		// Data.map((item) => {
		// 	if (item.id === id) {
		// 		return <ShowUserInfo name={item.bookName} />;
		// 	}
		// });
		Data.forEach((item) => {
			if (item.id === id) {
				return <ShowUserInfo name={item.bookName} />;
			}
		});
	};

	const mapItem = Data.map((item) => {
		return (
			<DataHolder
				key={item.id}
				userID={item.id}
				name={item.bookName}
				age={item.age}
				handleClick={handleClick}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			{active ? { showData } : <div className="body">{mapItem}</div>}
		</div>
	);
}

export default App;
