import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItemsList from "./SearchItemsList";
import SearchItem from "./SearchItem";

import useDebounceHook from "../hooks/useDebounceHook";

const wikiApi = axios.create({
	baseURL: "https://en.wikipedia.org/w/api.php",
});

function Search() {
	const [search, setSearch] = useState("");
	const [searchedValue, setSearchedValue] = useState({});
	const searched = useDebounceHook(search, 500);

	const getData = async (searchQuery) => {
		try {
			const res = await wikiApi.get("", {
				params: {
					action: "query",
					generator: "search",
					gsrsearch: searchQuery,
					gsrlimit: 20,
					prop: "pageimages|extracts",
					exchars: 100,
					exintro: true,
					explaintext: true,
					exlimit: "max",
					format: "json",
					origin: "*",
				},
			});

			console.log(res);

			setSearchedValue(res);
		} catch (error) {
			console.log(error);
		}
	};

	/* With hook  */
	useEffect(() => {
		getData(searched);
	}, [searched]);

	/* without hook */
	/* useEffect(() => {		
		const handler = setTimeout(() => {
			getData(search);
		}, 3500);

		return () => {
			clearTimeout(handler);
		};
	}, [search]); */

	//console.log(search);
	//console.log("value", searchedValue);

	let content;

	if (searchedValue?.data?.query?.pages) {
		content = Object.values(searchedValue?.data?.query?.pages).map((value) => (
			<SearchItem page={value} key={value.pageid} />
		));
	}

	//console.log(content);

	return (
		<>
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
				<div className="search-items-container px-3">
					<div className="row justify-content-center">{content}</div>
				</div>
			</div>
		</>
	);
}

export default Search;
