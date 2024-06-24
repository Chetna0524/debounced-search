import React, { useState, useEffect } from "react";

const SearchInput = ({ search, setSearch }) => {
	console.log("search", search);
	return (
		<div className="container text-center search-sec">
			<div className="input-grp">
				<img src={"./images/search.png"} alt="" />
				<input
					type="text"
					value={search}
					className="form-control"
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search....."
				/>
			</div>
		</div>
	);
};

export default SearchInput;
