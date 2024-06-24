import React, { useState, useEffect } from "react";

const useDebounceHook = (search, delay) => {
	const [searched, setSearched] = useState(search);

	useEffect(() => {
		const handler = setTimeout(() => {
			setSearched(search);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [search, delay]);

	return searched;
};

export default useDebounceHook;
