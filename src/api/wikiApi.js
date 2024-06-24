import axios from "axios";

const wikiApi = axios.create({
	baseURL: "https://en.wikipedia.org/w/api.php",
});

export const getWikiData = async (searchItem) => {
	try {
		const res = await wikiApi.get("", {
			params: {
				action: "query",
				generator: "search",
				gsrsearch: searchItem,
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

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
