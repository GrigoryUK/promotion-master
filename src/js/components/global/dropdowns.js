import $ from 'jquery';
export default function dropdownsJs() {

  (function Accordion() {
    const accordions = document.querySelectorAll('.dropdown--primary');
    if (accordions) {
      accordions.forEach(el => {
        const button = el.querySelector('.dropdown__button');
        button.addEventListener('click', e => {

          let self = e.currentTarget;
          const dropdown = self.closest('.dropdown--primary');
          const content = dropdown.querySelector('.dropdown__content');
          self.classList.toggle('open');
          content.classList.toggle('open');


          if (self.classList.contains('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      });
    }
  })();
}
