import $ from 'jquery';
import {isDesktop, isMobile, isTablet} from "../../functions/check-viewport";

export default function showMoreJs() {
  const showMoreChoice = document.querySelector(".btn__choice");

  if (showMoreChoice) {
    const productsLengthChoice =
      document.querySelectorAll(".choice__show").length;
    const loadingChoice = document.querySelector(".loading");
    const showMoreSpunChoice = document.querySelector(".show-more-span");
    let items = 12;
    showMoreChoice.addEventListener("click", (el) => {
      showMoreSpunChoice.style.display = "none";
      loadingChoice.classList.add("donat");
      setTimeout(() => {
        items += 3;
        const array = Array.from(
          document.querySelector(".choice__cont-grid").children
        );
        const visItems = array.slice(0, items);
        visItems.forEach((el) => {
          el.classList.add("is-visible");
          let isVisible = document.querySelectorAll("is-visible");
          setTimeout((isVisible) => {
            el.classList.add("is-active");
          }, 100);
        });
        loadingChoice.classList.remove("donat");
        showMoreSpunChoice.style.display = "block";

        if (visItems.length === productsLengthChoice) {
          showMoreChoice.style.display = "none";
          showMoreChoice.removeEventListener("click", el);
        }
      }, 200);
    });
  }

  (function () {
    const container = document.querySelector('.blockGrid--more');

    if (container) {
      const itemsLength = container.querySelectorAll('.itemC').length;
      const items = container.querySelectorAll('.itemC');
      const button = container.querySelector('.buttonC');
      const blockGrid = container.querySelector('.blockGrid__content');
      const startCount = 15;
      const addCountPlus = 15;
      let itemsCount = 15;
      const timer = 400;

      if (itemsLength <= startCount) {
        button.style.display = 'none';
        return false;
      }

      button.addEventListener('click', el => {
        donat(timer)
        itemsCount += addCountPlus;
        const array = Array.from(blockGrid.children);
        const visItems = array.slice(startCount, itemsCount);

        visItems.forEach(el => {
          setTimeout(() => {
            el.classList.add('itemC--active');
          }, timer)
        });

        if (visItems.length === itemsLength - startCount) {
          setTimeout(() => {
            button.style.display = 'none';
            return true
          }, timer)

        }
      })

      function donat(timer = 400) {
        const buttonText = button.textContent.trim();
        button.textContent = '';
        const block = document.createElement('span');
        block.classList.add('donat');
        button.appendChild(block);
        setTimeout(() => {
          button.removeChild(block);
          button.textContent = buttonText;
        }, timer)
      }

    }
  })()

  // (function () {
  //   const container = document.querySelector('.blockGrid--more');
  //   const numberStart = 15;
  //   if (container) {
  //     const itemLength = container.querySelectorAll('.itemC').length;
  //     const items = container.querySelectorAll('.itemC');
  //     const button = container.querySelector('.buttonC');
  //
  //     for (let i = 0; i < numberStart; i++) {
  //       items[i].classList.add('itemC--active');
  //     }
  //
  //     if (itemLength <= numberStart) {
  //       button.style.display = 'none';
  //       return;
  //     }
  //   }
  // })()




}
