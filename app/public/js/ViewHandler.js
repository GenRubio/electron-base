import { NavBarController } from "./controllers/NavBarController.js";
import { HomePageController } from "./controllers/HomePageController.js";

document.addEventListener("DOMContentLoaded", () => {
  onDocumentReady();
});

function onDocumentReady() {
  initControllers();
}
function initControllers() {
  NavBarController.init();
  HomePageController.init();
}
