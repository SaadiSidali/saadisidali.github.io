import { startGlobe } from "./globe";

import "./index.css";

startGlobe();

const githubBtn = document.getElementById("github-btn");
const emailBtn = document.getElementById("email-btn");

githubBtn.onclick = (e) => {
  window.open("https://github.com/SaadiSidali", "_blank");
};

emailBtn.onclick = (e) => {
  window.location = "mailto:saadisidali010@gmail.com";
};
