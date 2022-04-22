function DataHolder({ name, age, handleClick, userID }) {
	return (
		<div className="user-info">
			<p>{name}</p>
			<p>My age is {age}</p>
			<p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
			<button onClick={() => handleClick(userID)}>More info</button>
		</div>
	);
}

export default DataHolder;
