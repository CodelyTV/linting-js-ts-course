import "../css/sakura.css";
import "../css/custom.css";

import { initForms } from "./forms";
import { initCategoryFilter, initSearchByTitle } from "./filter";
import { initUserForm } from "./user";

function initCommon() {
  const trigger = document.querySelector(".js-trigger-container")!;

  trigger.addEventListener("click", ()=>{
    const rel = trigger.getAttribute("rel")!;
    document.getElementById(rel)!.classList.toggle("hidden");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initCommon();

  if (document.getElementById("category")) {
    initCategoryFilter();
    initSearchByTitle();
  }
  if (document.querySelector("form")) {
    initForms();
  }
  if (document.getElementById("user_form")) {
    initUserForm();
  }
});
