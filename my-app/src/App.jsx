import './App.css';
import DataHolder from './Components/DataHolder';

import { Data } from './Data';

function App() {
	const mapItem = Data.map((item) => {
		return <DataHolder key={item.id} name={item.name} age={item.age} />;
	});

	return <div className="App">{mapItem}</div>;
}

export default App;
