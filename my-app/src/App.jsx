import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowUserInfo from './Components/ShowUserInfo';
import DataHolder from './Components/DataHolder';
import { DataProviver } from './Context/ContextAPI';

function App() {
	return (
		<DataProviver>
			<Router>
				<div className="App">
					<Navbar />
					<DataHolder />
					<Routes>
						<Route path="/buy" element={ShowUserInfo} />
					</Routes>
				</div>
			</Router>
		</DataProviver>
	);
}

export default App;
