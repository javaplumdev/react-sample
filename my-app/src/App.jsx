import './App.css';
import DataHolder from './Components/DataHolder';
import Navbar from './Components/Navbar';
import { Data } from './Data';

function App() {
	const handleClick = (id) => {
		Data.map((item) => {
			if (item.id === id) {
				console.log(item);
			}
		});
	};

	const mapItem = Data.map((item) => {
		return (
			<DataHolder
				key={item.id}
				userID={item.id}
				name={item.name}
				age={item.age}
				handleClick={handleClick}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			{mapItem}
		</div>
	);
}

export default App;
