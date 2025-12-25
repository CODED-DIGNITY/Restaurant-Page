import tonkotsuImg from "./assets/images/tonkotsu.jpg";
import misoImg from "./assets/images/miso.jpg";
import shoyuImg from "./assets/images/shoyu.jpg";
import spicyImg from "./assets/images/spicy.jpg";

export default function Menu() {
	const section = document.createElement("section");
	section.className = "menu";

	section.innerHTML = `
    <h2 class="menu-title">Our Bowls</h2>
    <div class="menu-grid">
      ${card(
				"Tonkotsu Ramen",
				"Rich pork bone broth, 12h simmer",
				"₹320",
				tonkotsuImg
			)}
      ${card(
				"Miso Ramen",
				"Savory fermented miso, garlic oil",
				"₹290",
				misoImg
			)}
      ${card(
				"Shoyu Ramen",
				"Classic soy broth, light & clean",
				"₹270",
				shoyuImg
			)}
      ${card(
				"Spicy Dragon",
				"Chilli paste, sesame oil, heat",
				"₹340",
				spicyImg
			)}
    </div>
  `;

	return section;
}

function card(name, desc, price, img) {
	return `
    <div class="ramen-card">
      <img src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p>${desc}</p>
      <span>${price}</span>
    </div>
  `;
}
