import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">Home</Link>
			<div className="search-bar">
				<input type="text" placeholder="Search" />
				<button>Search</button>
			</div>
		</div>
	);
}

export default Navbar;
