import { useState } from "react";
import Search from "./components/Search";
import useDebounceHook from "./hooks/useDebounceHook";
import SearchInput from "./components/SearchInput";
import SearchItemsList from "./components/SearchItemsList";

function App() {
	const [searchedTerm, setSearchedTerm] = useState("");

	const debouncedValue = useDebounceHook(searchedTerm, 1000);

	return (
		<div className="main-container">
			<div className="container-fluid">
				<SearchInput search={searchedTerm} setSearch={setSearchedTerm} />
				<SearchItemsList search={debouncedValue} />
			</div>
		</div>
	);
}

export default App;
