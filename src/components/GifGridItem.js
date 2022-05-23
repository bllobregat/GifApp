const GridGifItem = ({ url, title }) => {

	return (
		<div className="card">
			<img alt={title} src={url}></img>
			<p className="limit">{title}</p>
		</div>
	);
};

export default GridGifItem;
