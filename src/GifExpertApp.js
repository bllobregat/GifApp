import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		"Fc Barcelona"
	]);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map(categorie => <GifGrid key={categorie} category={categorie}/> )}
		</>
	);
};

export default GifExpertApp;
