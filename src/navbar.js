export default function Navbar(onTabClick) {
	const nav = document.createElement("nav");

	["Home", "Menu", "About"].forEach((tab) => {
		const btn = document.createElement("button");
		btn.textContent = tab;
		btn.addEventListener("click", () => onTabClick(tab));
		nav.appendChild(btn);
	});

	return nav;
}
