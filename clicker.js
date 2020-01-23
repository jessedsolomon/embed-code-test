document.querySelectorAll("[control-clicker]").forEach(element => {
	if (!element.hasAttribute("data-clicks")) {
		element.setAttribute("data-clicks", "0");
	}

	element.addEventListener("click", () => {
		let clicks = parseInt(element.getAttribute("data-clicks"));
		clicks++;
		element.textContent = `${clicks} clicks`;
		element.setAttribute("data-clicks", clicks.toString());
	});
});