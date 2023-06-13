import $ from 'jquery';
import Inputmask from "inputmask";

export default function validationJs() {
  const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  function isEmailValid(value) {
    return EMAIL_REGEX.test(value);
  }

  const checkInputEmailValue = (inputEmail, warning, warningSmallEmail) => {
    if (isEmailValid(inputEmail.val())) {
      inputEmail.removeClass('error');
      warning.fadeOut('fast')
      warningSmallEmail.fadeOut('fast');
      return true;
    } else {
      inputEmail.addClass('error');
      warning.fadeIn('fast')
      warningSmallEmail.fadeIn('fast');
    }
  }




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
        const inputEmail = self.find('.test-email');
        const warningSmallEmail = inputEmail.closest('.inputC').find('.inputC__warning');

        button.on('click', function (e) {
          e.preventDefault()

          const checkEmail = checkInputEmailValue(inputEmail, warning, warningSmallEmail);

          if (checkEmail === true) {
            const success = self.find('.feedbackC__success');
            success.fadeIn('fast');
          }

        })

        inputEmail.on('input', function () {

          checkInputEmailValue(inputEmail, warning, warningSmallEmail);
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
        const inputTel = self.find('.test-tel');
        const inputEmail = self.find('.test-email');
        const warning = self.find('.formC__warning');
        const warningSmallEmail = inputEmail.closest('.inputC').find('.inputC__warning');


        button.on('click', function (e) {
          e.preventDefault();
          const checkEmail = checkInputEmailValue(inputEmail, warning, warningSmallEmail);

          if (checkEmail === true) {
            const success = self.find('.blockContact__success');
            success.fadeIn('fast');
          }

        })
        inputEmail.on('input', function () {
          checkInputEmailValue(inputEmail, warning, warningSmallEmail);

        })
      })
    }
  })();

  const checkInputValue = (input, warning) => {
    if (input.val() === '') {
      input.addClass('error')
      warning.fadeIn('fast')
    } else {
      input.removeClass('error')
      warning.fadeOut('fast')
      return true;
    }
  }
}
