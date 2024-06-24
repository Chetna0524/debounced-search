import SearchItem from "./SearchItem";
import { getWikiData } from "../api/wikiApi";
import useSWR from "swr";

function SearchItemsList({ search }) {
	console.log("lisd", search);

	const { isLoading, data, error } = useSWR(
		search ? search : null,
		getWikiData
	);

	let content;

	if (isLoading) {
		<p>Loading...</p>;
		console.log(data);
	} else if (error) {
		console.log(error);
	} else if (data?.query?.pages) {
		content = Object.values(data?.query?.pages).map((value) => (
			<SearchItem page={value} key={value.pageid} />
		));
	}

	return <div className="container mt-5">{content}</div>;
}

export default SearchItemsList;
