import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


const indicator1 = $('#indicator-1');
const indicator2 = $('#indicator-2');
const indicator3 = $('#indicator-3');
const indicator4 = $('#indicator-4');
const indicator5 = $('#indicator-5');
const indicator6 = $('#indicator-6');
const indicator7 = $('#indicator-7');
indicator1.click(() => gsapScroll('#header'))
indicator2.click(() => gsapScroll('.intro__section'))
indicator3.click(() => gsapScroll('#industry'))
indicator4.click(() => gsapScroll('#better-view'))
indicator5.click(() => gsapScroll('.focus__section'))
indicator6.click(() => gsapScroll('#solutions--start'));
indicator7.click(() => gsapScroll('#solutions--2'));

$('.nav__title--1').click(() => { gsapScroll('.intro__section'); closeNav() })
$('.nav__title--2').click(() => { gsapScroll('.solutions__section'); closeNav() })
$('.nav__item--aws--1').click(() => { gsapScroll('.industry__section'); closeNav() })
$('.nav__item--aws--2').click(() => { gsapScroll('#better-view'); closeNav() })
$('.nav__item--aws--3').click(() => { gsapScroll('.focus__section'); closeNav() });

$('.nav__focus--1').click(() => { gsapScrollHigher('#solutions--1'); closeNav() });
$('.nav__focus--2').click(() => { gsapScrollHigher('#solutions--2'); closeNav() });

$('.nav__sub-item-1').click(() => { gsapScrollHigher('#solutions--1-1'); closeNav() });
$('.nav__sub-item-2').click(() => { gsapScrollHigher('#solutions--1-2'); closeNav() });
$('.nav__sub-item-3').click(() => { gsapScrollHigher('#solutions--1-3'); closeNav() });
$('.nav__sub-item-4').click(() => { gsapScrollHigher('#solutions--1-4'); closeNav() });
$('.nav__sub-item-5').click(() => { gsapScrollHigher('#solutions--2-1'); closeNav() });
$('.nav__sub-item-6').click(() => { gsapScrollHigher('#solutions--2-2'); closeNav() });
$('.nav__sub-item-7').click(() => { gsapScrollHigher('#solutions--2-3'); closeNav() });
$('.nav__sub-item-8').click(() => { gsapScrollHigher('#solutions--2-4'); closeNav() });

function gsapScroll(id) {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: id,
      offsetY: 50
    }
  })
}
function gsapScrollHigher(id) {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: id,
      offsetY: 75
    }
  })
}

gsapColorSection(indicator1, '#header', '.video__section')
gsapColorSection(indicator2, '.intro__section')
gsapColorSection(indicator3, '#industry', '#quote-1')
gsapColorSection(indicator4, '#better-view', '.quote__section-light')
gsapColorSection(indicator5, '.focus__section')
gsapColorSection(indicator6, '#solutions--start', '#solutions--1-4')
gsapColorSection(indicator7, '#solutions--2', '#solutions--2-4')


// $('.sidebar-nav__arrowDown').click(() => { gsapScroll('.intro__section') })
const arrowUp = $('.sidebar-nav__arrowUp')
const arrowDown = $('.sidebar-nav__arrowDown')
var position = 1
function gsapColorSection(indicator, sectionIdentifier, endSection) {
  gsap.to(
    indicator, {
    scrollTrigger: {
      trigger: sectionIdentifier,
      endTrigger: endSection,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: 'restart reverse restart reverse',
      onToggle: (self) => {
        if (self.isActive) {
          console.log(this)
          console.log(self.vars.trigger)

          if (self.vars.trigger === '#header') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('#header'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('.intro__section'))
            console.log(position)
            console.log(this)

          } else if (self.vars.trigger === '.intro__section') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('#header'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('#industry'))
          } else if (self.vars.trigger === '#industry') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('.intro__section'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('#better-view'))
          } else if (self.vars.trigger === '#better-view') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('#industry'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('.focus__section'))
          } else if (self.vars.trigger === '.focus__section') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('#better-view'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('#solutions--start'))
          } else if (self.vars.trigger === '#solutions--start') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('.focus__section'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('#solutions--2'))
          } else if (self.vars.trigger === '#solutions--2') {
            $('.sidebar-nav__arrowUp').click(() => gsapScroll('#solutions--start'))
            $('.sidebar-nav__arrowDown').click(() => gsapScroll('#solutions--2'))
          }

        }
      }
    },
    backgroundColor: '#527fff',
    ease: 'none',
    duration: .01
  })
}

// ----------------------------------------------------
// Sticky Navigation Function
// ----------------------------------------------------
window.onscroll = () => {
  addStickyNav();
}

const navbar = document.querySelector('.navigation')
const header = document.querySelector('#header')
const sticky = header.offsetHeight;
function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
    $('.nav__menu').removeAttr('style')
  }
}
