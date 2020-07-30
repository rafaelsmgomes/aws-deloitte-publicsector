import '../sass/main.scss';

import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin);

import stateNavMgmt from './stateNav';

let navState = 0;



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
indicator6.click(() => gsapScroll('#solutions'));

$('.nav__title--1').click(() => { gsapScroll('.intro__section'); closeNav() })
$('.nav__item--aws--1').click(() => { gsapScroll('.industry__section'); closeNav() })
$('.nav__item--aws--2').click(() => { gsapScroll('#better-view'); closeNav() })
$('.nav__item--aws--3').click(() => { gsapScroll('.focus__section'); closeNav() });

gsapColorSection(indicator1, '#header', '.video__section')
gsapColorSection(indicator2, '.intro__section')
gsapColorSection(indicator3, '#industry', '#quote-1')
gsapColorSection(indicator4, '#better-view', '.quote__section-light')
gsapColorSection(indicator5, '.focus__section')
// gsapColorSection(indicator6, '#better-view')
// gsapColorSection(indicator7, '#solutions')

function gsapColorSection(indicator, sectionIdentifier, endSection) {
  gsap.to(
    indicator, {
    scrollTrigger: {
      trigger: sectionIdentifier,
      endTrigger: endSection,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: 'restart reverse restart reverse',
      // markers: true
    },
    backgroundColor: '#527fff',
    border: '#527fff',
    ease: 'none',
    duration: .25
  })
}

function gsapScroll(id) {
  console.log("clicked")
  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: id,
      offsetY: 50
    }
  })
}


gsap.to('.industry__img', {
  scrollTrigger: {
    trigger: '.industry__img',
    start: "top center",
    toggleActions: 'restart pause none none',
    // markers: true
  },
  opacity: 1,
  x: '0%',
  duration: .5,
  ease: 'Power1.easeIn'
})

// scrollTrigger adds class active 
// element.addEventListener('hover', () => {
//   gsap.to('.active', {
//     duration: 1,
//     height: 'auto'
//   })
// })

gsap.from('.focus__img *', {
  duration: 2,
  drawSVG: '0%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.focus__img',
    markers: true,
    start: 'top center',
    toggleActions: 'restart none none reverse'
  }
})

gsap.from('#prefix__Path_1253', {
  duration: 2,
  ease: 'none',
  rotation: 360,
  transformOrigin: '50% 50%',
  scrollTrigger: {
    trigger: '.focus__img',
    // markers: true,
    start: 'top center',
    toggleActions: 'restart none none none'
  }
})
// scrollTrigger.create()


// ----------------------------------------------------
// Sticky Navigation Function
// ----------------------------------------------------
window.onscroll = () => {
  addStickyNav();
}

const navbar = document.querySelector('.navigation')
const header = document.querySelector('#header')
const sticky = header.offsetHeight;
// console.log(navbar.offsetTop + header.offsetHeight)
// console.log(navbar.offsetTop)
// console.log(header.offsetHeight)
function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

// ----------------------------------------------------
// Hide and show on hover -- SOLUTION 1
// ----------------------------------------------------
//#region 
/*
const subList2 = $('.nav__sub-list-2')
const subList3 = $('.nav__sub-list-3')
const subItem2 = $('.nav__item-2')
const subItem3 = $('.nav__item-3')


const hideSub = (el) => {
  // If list doesn't contain class closed - .close it 
  if (!el.classList.contains('closed')) {
    gsap.to(el, {
      duration: .25,
      autoAlpha: 0,
      height: 0
    });
    el.classList.add('closed')
  } else { // else open it AND remove .close
    gsap.set(el, {
      height: 'auto',
      autoAlpha: 1
    })
    gsap.from(el, {
      duration: .25,
      autoAlpha: 0,
      height: 0
    });

    el.classList.remove('closed')
  }
}
*/
//#endregion

// ----------------------------------------------------
// Hide and show on hover -- SOLUTION 2 (Best so far)
// ----------------------------------------------------
//#region 
/*
var setTimeoutFunction;
$('.nav__open-1').hover(function () {
  setTimeoutFunction = setTimeout(() => {
    $('.nav__open-1').addClass('active');
    gsap.to('.active > .nav__sub-list-1', {
      height: 'auto',
      autoAlpha: 1,
      duration: .25
    })
  }, 250);
}, () => {
  $('.nav__open-1').removeClass('active')
  gsap.to('.nav__sub-list-1', {
    height: 0,
    autoAlpha: 0,
    duration: .25
  })
  clearTimeout(setTimeoutFunction)
})
$('.nav__open-2').hover(function () {
  setTimeoutFunction = setTimeout(() => {
    $('.nav__open-2').addClass('active');
    gsap.to('.active > .nav__sub-list-2', {
      height: 'auto',
      autoAlpha: 1,
      duration: .25
    })
  }, 250);
}, () => {
  $('.nav__open-2').removeClass('active')
  gsap.to('.nav__sub-list-2', {
    height: 0,
    autoAlpha: 0,
    duration: .25
  })
  clearTimeout(setTimeoutFunction)
})
*/
//#endregion

// ----------------------------------------------------------------
// Animating stickyNav when on hover
// ----------------------------------------------------------------
const navMenu = $('.nav__menu')
$('.navigation').hover(() => {
  if ($('.navigation').hasClass('sticky')) {
    gsap.to('.nav__menu', {
      height: 'auto',
      maxHeight: 'auto',
      duration: .3,
      autoAlpha: 1
    })
  }
},
  () => {
    closeNav()
  }
)
function closeNav() {
  if ($('.navigation').hasClass('sticky')) {
    gsap.to(navMenu, {
      height: 0,
      duration: .3,
      autoAlpha: 0,
      onComplete: () => {
        gsap.to('.nav__menu', { clearProps: true })
      }

    })
  }
  console.log('close_nav')
}

// ----------------------------------------------------------------
// Animate Video Headline
// ----------------------------------------------------------------
gsap.from('.video__headline', {
  duration: 2,
  x: -50,
  borderLeft: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: '.video__headline',
    // markers: true,
    start: 'top center',
    toggleActions: 'restart none none reverse'
  }
})

// ----------------------------------------------------------------
// State Nav applied
// ----------------------------------------------------------------
$('.nav__item').hover(function () {
  $('.nav__item').removeClass('active');
  $(this).addClass('active');
});

$('.navigation__wrapper').mouseleave(function () {
  stateNavMgmt(navState);
})



