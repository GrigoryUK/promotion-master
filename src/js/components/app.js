import dropdownsJs from "./global/dropdowns";
import buttonsToggleJs from "./global/buttonsToggle";
import smoothScroll from "./global/smoothScroll";
import tabsJs from "./global/tabs";
import validationJs from "./global/validation";
import showMoreJs from "./global/showMore";


document.addEventListener('DOMContentLoaded', (event) => {
  dropdownsJs()
  buttonsToggleJs()
  smoothScroll()
  tabsJs();
  validationJs();
  showMoreJs();
});

