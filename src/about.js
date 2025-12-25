export default function About() {
	const section = document.createElement("section");
	section.className = "about";

	section.innerHTML = `
    <div class="about-glass">
      <h2>Our Story</h2>
      <p>
        Midnight Ramen was born in the quiet hours, when the city is half asleep
        and hunger feels louder than traffic.
      </p>
      <p>
        We slow-simmer our broths for hours, because shortcuts taste like regret.
        Every bowl is built to warm cold hands, tired minds, and hungry souls.
      </p>
      <p>
        No frozen shortcuts. No fake flavors. Just honest bowls under neon lights.
      </p>
      <span>Open till late. Open for you.</span>
    </div>
  `;

	return section;
}
