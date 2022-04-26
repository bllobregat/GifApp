export const getGifs = async (query) => {
	const api_key = "8xEkv3MyiQ3muUNeqBljIO0zwcEgXGoP";
	const limit = "12";
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(
		query
	)}&limit=${limit}`;
	
	const newTest = " ";
	
	const resp = await fetch(url);
	const { data } = await resp.json();
	const gifs = resp.ok ? data.map((gif) => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images?.downsized_medium.url,
		};
	}) : [];

	return gifs;
};
