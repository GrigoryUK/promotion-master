import disableScroll from 'disable-scroll'
import $ from 'jquery'
import { isDesktop, isMobile, isTablet } from "../../functions/check-viewport"
// import {disableScrollCustom, enableScrollCustom} from "../library/scrollMove";
import scrollLock from 'scroll-lock'


export default function buttonsToggleJs() {

  (function toggleMenuHeader() {
    const menu = $('*[data-menu-always]');
    const buttonOpen = $('*[data-burger-open]');
    const buttonClose = $('*[data-burger-close]');

    if (menu) {
      buttonOpen.on('click', function () {
        menu.fadeIn('fast')
        scrollLock.disablePageScroll();
      })

      buttonClose.on('click', function () {
        menu.fadeOut('fast')
        scrollLock.enablePageScroll();
      })
    }
  }());

  (function toggleFeedback() {

    const menu = $('*[data-feedback-always]');


    if (menu) {
      const menuMain = $('*[data-menu-always]');
      const buttonConnection = $('*[data-feedback-open-bid]');
      const buttonConnectionMobile = $('*[data-feedback-open-bid-mobile]');
      const buttonClose = $('*[data-feedback-close]');


      buttonConnection.on('click', function () {
        if (isDesktop()) {
          disableScroll.on()
        }
        if (isMobile() || isTablet()) {
          scrollLock.disablePageScroll();
        }
        menu.fadeIn('fast', function () {
          menu.find('.feedback__connection').addClass('active');
        });
      })

      buttonConnectionMobile.on('click', function () {
        menu.fadeIn('fast', function () {
          menu.find('.feedback__connection').addClass('active');
        });
      })


      buttonClose.on('click', function (e) {
        e.preventDefault();
        menu.find('.feedback__connection').removeClass('active');
        menuMain.fadeOut('fast');
        menu.fadeOut('slow');
        if (isDesktop()) {
          disableScroll.off()
        }
        if (isMobile() || isTablet()) {
          scrollLock.enablePageScroll();
        }
      })
    }


  })();
}
