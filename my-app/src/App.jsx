import React from 'react';
import './App.css';
import DataHolder from './Components/DataHolder';
import Navbar from './Components/Navbar';
import { Data } from './Data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowUserInfo from './Components/ShowUserInfo';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/buy" element={ShowUserInfo} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
