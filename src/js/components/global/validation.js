import $ from 'jquery';
import Inputmask from "inputmask";

export default function validationJs() {

  (function maskPhone() {
    let tel = document.querySelectorAll('input[type="tel"]');
    let telMask = new Inputmask("+7 (999) 999-99-99");
    telMask.mask(tel);
  })();

  (function feedbackFormMain() {
    const container = $('.feedbackC');

    if (container) {

      container.each(function (){
        const self = $(this);
        const button = self.find('button[type="submit"]');
        const input = self.find('.test-tel');
        const warning = self.find('.feedbackC__warning');

        button.on('click', function (e) {
          e.preventDefault()
          const success = self.find('.feedbackC__success');

          if (input.val() === '') {
            input.addClass('error')
            warning.fadeIn('fast')
          } else {
            input.removeClass('error')
            warning.fadeOut('fast')
            success.fadeIn('fast')
          }
        })
        input.on('input', function () {

          if (input.val() === '') {
            input.addClass('error')
            warning.fadeIn('fast')
          } else {
            input.removeClass('error')
            warning.fadeOut('fast')
          }
        })
      })
    }
  })();

  (function ContactFormMain() {
    const container = $('.formC--primary');

    if (container) {

      container.each(function (){
        const self = $(this);
        const button = self.find('button[type="submit"]');
        const input = self.find('.test-tel');
        const warning = self.find('.formC__warning');

        button.on('click', function (e) {
          e.preventDefault()
          const success = self.find('.blockContact__success');

          if (input.val() === '') {
            input.addClass('error')
            warning.fadeIn('fast')
          } else {
            input.removeClass('error')
            warning.fadeOut('fast')
            success.fadeIn('fast')
          }
        })
        input.on('input', function () {

          if (input.val() === '') {
            input.addClass('error')
            warning.fadeIn('fast')
          } else {
            input.removeClass('error')
            warning.fadeOut('fast')
          }
        })
      })
    }
  })();
}
