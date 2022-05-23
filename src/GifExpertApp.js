import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		"Fc Barcelona"
	]);

	const showNewTab = ()=>{
		window.open("https://www.google.com/","_blank");
	}

	return (
		<>
			<h2>GifExpertApp</h2>
			<button
				data-testid="btn-test"
				onClick={showNewTab}
			> Click Me! </button>
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map((categorie) => (
				<GifGrid key={categorie} category={categorie} />
			))}
		</>
	);
};

export default GifExpertApp;
