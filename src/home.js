export default function Home() {
	const div = document.createElement("div");
	div.innerHTML = `
    <div class="hero">
			<h1 class="hero-head">Midnight Ramen</h1>
			<p class="hero-tag">
				Slow simmered broths. Neon nights. Soul healing bowls.
			</p>
			<button class="hero-btn">View Menu</button>
		</div>
  `;
	return div;
}
