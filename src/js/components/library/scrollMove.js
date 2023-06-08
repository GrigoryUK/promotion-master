import vars from "../../_vars";

export const disableScrollCustom = () => {
  const fixBlocks = document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;

  vars.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  vars.bodyEl.style.paddingRight = paddingOffset;
  vars.bodyEl.classList.add('dis-scroll');
  vars.bodyEl.dataset.position = pagePosition;
  vars.bodyEl.style.top = `-${pagePosition}px`;
}

export const enableScrollCustom = () => {
  const fixBlocks = document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.bodyEl.style.paddingRight = '0px';

  vars.bodyEl.style.top = 'auto';
  vars.bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.bodyEl.removeAttribute('data-position');
  vars.htmlEl.style.scrollBehavior = 'smooth';
}
