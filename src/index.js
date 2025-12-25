import Navbar from "./navbar";
import Home from "./home";
import Menu from "./menu";
import About from "./about";
import "./style.css";

console.log("Restaurant Page Loaded");
const content = document.getElementById("content");

function loadPage(page) {
	content.innerHTML = "";
	console.log("Loading:", page);

	const pages = { Home, Menu, About };
	content.appendChild(pages[page]());
}

const nav = Navbar(loadPage);
document.body.insertBefore(nav, content);

loadPage("Home");
