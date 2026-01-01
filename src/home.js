export default function Home(onTabClick = () => {}) {
	const div = document.createElement("div");
	div.innerHTML = `
    <div class="hero">
			<div class="left">
				<h1 class="hero-head">Midnight Ramen</h1>
				<p class="hero-tag">
					Slow simmered broths. Neon nights. Soul healing bowls.
				</p>
				<button class="hero-btn">View Menu</button>
			</div>
			<div class="right">
				<div class="hero-img"></div>
			</div>
		</div>
  `;
	div
		.querySelector(".hero-btn")
		.addEventListener("click", () => onTabClick("Menu"));
	return div;
}
