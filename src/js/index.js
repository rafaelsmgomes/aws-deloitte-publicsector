import '../sass/main.scss';

import $ from 'jquery';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { setTimeout } from 'core-js';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin);




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

const indicator1 = document.querySelector('#indicator-1');
const indicator2 = document.querySelector('#indicator-2');
const indicator3 = document.querySelector('#indicator-3');
const indicator4 = document.querySelector('#indicator-4');
const indicator5 = document.querySelector('#indicator-5');
indicator1.addEventListener('click', () => gsapScroll('#header'))
indicator2.addEventListener('click', () => gsapScroll('#industry'))
indicator3.addEventListener('click', () => gsapScroll('#quote-1'))
indicator4.addEventListener('click', () => gsapScroll('#better-view'))
indicator5.addEventListener('click', () => gsapScroll('#solutions'));

gsapColorSection(indicator1, '#header')
gsapColorSection(indicator2, '#industry')
gsapColorSection(indicator3, '#quote-1')
gsapColorSection(indicator4, '#better-view')
gsapColorSection(indicator5, '#solutions')

function gsapColorSection(indicator, sectionId) {
  gsap.to(
    indicator, {
    scrollTrigger: {
      trigger: sectionId,
      start: "top center",
      end: "bottom center",
      toggleActions: 'restart reverse restart reverse',
      // markers: true
    },
    backgroundColor: '#c5a1ff',
    ease: 'none',
    duration: .25
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
    // markers: true,
    start: 'top center',
    toggleActions: 'restart pause none none'
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
    toggleActions: 'restart pause none none'
  }
})
// scrollTrigger.create()


/*
Sticky Navigation Function
*/


window.onscroll = () => {
  addStickyNav();
}

const navbar = document.querySelector('.navigation')
const header = document.querySelector('#header')
const sticky = header.offsetHeight;
console.log(navbar.offsetTop + header.offsetHeight)
console.log(navbar.offsetTop)
console.log(header.offsetHeight)
function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}

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





// ----------------------------------------------------------------
// Not a great solution to the Navigation animation problem
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
  function () {
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
  }
)



