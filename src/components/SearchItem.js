import React from "react";

function SearchItem({ page }) {
	return (
		<div className="col-7 page-box">
			<h2>{page.title}</h2>
			<p>{page.extract}</p>
		</div>
	);
}

export default SearchItem;
