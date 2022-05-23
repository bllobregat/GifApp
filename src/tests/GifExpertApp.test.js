const { render,screen, fireEvent } = require("@testing-library/react");
const { default: GifExpertApp } = require("../GifExpertApp");

describe("GifExpertApp component", () => {
	// eslint-disable-next-line testing-library/render-result-naming-convention

	beforeAll(() => {
		delete window.open;
		delete global.window.location;
		const href = "http://localhost:3000";
		global.window.open = href;
		window.open = jest.fn(); 
	});

	test("should render correctly", () => {
		render(<GifExpertApp />);
		const btn = screen.getByTestId("btn-test");
		fireEvent.click(btn);
		console.log(window.location)
		expect(window.open).toHaveBeenCalled();
		expect(window.open).toHaveBeenLastCalledWith("https://www.google.com/");

	});
});
