import '../sass/main.scss';

import $ from 'jquery';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin);


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
if ($(window).width() >= 1024) {
  window.onscroll = () => {
    addStickyNav();
  }
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
    })
  }
  console.log('close_nav')
}


// ----------------------------------------------------------------
// Animate Video Headline
// ----------------------------------------------------------------
const headlineTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.video__headline',
    start: 'top center',
    toggleActions: 'play none none reverse'
  },
})
headlineTl.from('.video__text-box', {
  duration: 1,
  opacity: 0
})


// ----------------------------------------------------------------
// Animate Intro Section
// ----------------------------------------------------------------

const whyTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro__section',
    start: 'top 70%'
  },
})
whyTl.from('.intro__title', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
whyTl.from('.intro__text', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

// ----------------------------------------------------------------
// Animate Industry Section
// ----------------------------------------------------------------

const industryTL1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.industry__section',
    start: 'top 70%'
  },
})
industryTL1.from('.industry__section .header__secondary', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
industryTL1.from('.industry__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

// Main Animation
const industryTL2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.industry__img',
    start: 'top 70%',
    toggleActions: 'play none none reverse'
  },
})
industryTL2.from("#graphic-manufacturing", {
  opacity: 0,
  // drawSVG: '0%',
  duration: 1,
})
industryTL2.from('.industry__item', {
  x: '-10%',
  stagger: .3,
  opacity: 0,
  duration: 1,
}, '-=.75')
industryTL2.from('.industry__item img', {
  rotate: '-180',
  stagger: .3,
  opacity: 0,
  duration: 1.5,
}, '<')


// ----------------------------------------------------------------
// Animate Quote Section
// ----------------------------------------------------------------
gsap.timeline({
  scrollTrigger: {
    trigger: '.quote__section--1',
    start: 'top 70%',
  },
}).from('.quote__section--1 .quote__text', {
  x: '25%',
  opacity: 0,
  transformOrigin: 'top top',
  duration: 1,
}, '-=.5')

// ----------------------------------------------------------------
// Animate Second Section of AWS
// ----------------------------------------------------------------

const secondSectionTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.better-view__section',
    start: 'top 70%'
  },
})
secondSectionTL.from('.better-view__header', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
secondSectionTL.from('.better-view__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

// ----------------------------------------------------------------
// Animate Quote Section-2
// ----------------------------------------------------------------

gsap.timeline({
  scrollTrigger: {
    trigger: '.quote__section--2',
    start: 'top 70%',
  },
}).from('.quote__section--2 .quote__text', {
  x: '25%',
  opacity: 0,
  transformOrigin: 'top top',
  duration: 1,
}, '-=.5')


// ----------------------------------------------------------------
// Animate Third Section of AWS
// ----------------------------------------------------------------

const thirdSectionTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.focus__section',
    start: 'top 70%'
  },
})
thirdSectionTL.from('.focus__section .header__secondary', {
  opacity: 0,
  x: '-20%',
  duration: 1
})
thirdSectionTL.from('.focus__section .pg', {
  opacity: 0,
  duration: 1,
  stagger: .25
}, '-=.5')

gsap.from('.focus__img *', {
  duration: 2,
  drawSVG: '0%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.focus__img',
    start: 'top center',
    toggleActions: 'play none none reverse'
  }
})

// ----------------------------------------------------------------
// Animate First Section Intro of Partner
// ----------------------------------------------------------------

const partnerFirst = gsap.timeline({
  scrollTrigger: {
    trigger: '#solutions--1',
    start: 'top 70%',
    // toggleActions: 'restart none none reverse',
  },
  ease: "power3.out",
})
partnerFirst.from('.solutions__num-1', {
  opacity: 0,
  x: '-100',
  duration: .5
})
partnerFirst.from('#solutions--1 .solutions__sub', {
  x: '10%',
  opacity: 0,
  duration: .5,
}, '-=.25')
partnerFirst.from('#solutions--1 .pg', {
  opacity: 0,
  duration: .75,
}, '-=.1')


const partnerSecond = gsap.timeline({
  scrollTrigger: {
    trigger: '#solutions--2.solutions__flex',
    start: 'top 70%',
    // toggleActions: 'restart none none reverse',
    // markers: true
  },
  ease: "power3.out",
})
partnerSecond.from('.solutions__num-2', {
  opacity: 0,
  x: '-100',
  duration: .5
})
partnerSecond.from('#solutions--2 .solutions__sub', {
  x: '10%',
  opacity: 0,
  duration: .5,
}, '-=.25')
partnerSecond.from('#solutions--2  p', {
  opacity: 0,
  duration: .75,
}, '-=.1')

// ----------------------------------------------------------------
// Animate Features-box Intro of Partner
// ----------------------------------------------------------------
const featureBoxAnimation = (featureBoxId) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: `${featureBoxId}`,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    ease: "power1.out",
  }).from(`${featureBoxId} .feature-box__line`, {
    width: '0%',
    duration: .35
  }).from(`${featureBoxId} .feature-box__container`, {
    scaleY: 0,
    transformOrigin: 'top top',
    opacity: 0,
    duration: .35,
  }).from(`${featureBoxId} .feature-box__left`, {
    opacity: 0,
    duration: .5,
  }).from(`${featureBoxId}  .feature-box__item`, {
    x: '-10%',
    opacity: 0,
    stagger: .15,
    duration: .5,
  }, '-=.25')
}

featureBoxAnimation('#solutions--1-1');
featureBoxAnimation('#solutions--1-2');
featureBoxAnimation('#solutions--2-1');
featureBoxAnimation('#solutions--2-2');

// ----------------------------------------------------------------
// Animate Features-box Intro of Partner
// ----------------------------------------------------------------
const ctaAnimation = (ctaId) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: `${ctaId}`,
      start: 'top 70%',
    },
    ease: "power1.out",
  }).from(`${ctaId} .icon-box__img`, {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
    duration: .35
  }).from(`${ctaId} .icon-box__title`, {
    opacity: 0,
    duration: .35,
  }, '-=.2').from(`${ctaId}  .icon-box__item`, {
    x: '-10%',
    opacity: 0,
    stagger: .15,
    duration: .5,
  }, '-=.2').from(`${ctaId}  .icon-box__arrow`, {
    rotate: '-180',
    stagger: .15,
    duration: 1.5
  }, '<')
}

ctaAnimation('#solutions--1-3')
ctaAnimation('#solutions--1-4')
ctaAnimation('#solutions--2-3')
ctaAnimation('#solutions--2-4')


// ----------------------------------------------------------------
// Activate Classes
// ----------------------------------------------------------------

// Default values for ScrollTrigger
ScrollTrigger.defaults({
  start: "top 20%",
  end: "bottom 20%",
  // markers: true
})

// Main sections --> deactivated
// ScrollTrigger.create({
//   trigger: '.intro__section',
//   endTrigger: '.focus__section',
//   toggleClass: { targets: '.nav__title--1', className: 'active' },
// })
// ScrollTrigger.create({
//   trigger: '.solutions__section',
//   // endTrigger: '.focus__section',
//   toggleClass: { targets: '.nav__title--2', className: 'active' },
// })

// AWS Section
ScrollTrigger.create({
  trigger: '.industry__section',
  endTrigger: '.quote__section--1',
  toggleClass: { targets: '.nav__item--1', className: 'active' },
})
ScrollTrigger.create({
  trigger: '.better-view__section',
  endTrigger: '.quote__section--2',
  toggleClass: { targets: '.nav__item--2', className: 'active' },
})
ScrollTrigger.create({
  trigger: '.focus__section',
  toggleClass: { targets: '.nav__item--3', className: 'active' },
})

// Solutions Sections
ScrollTrigger.create({
  trigger: '#solutions--start',
  endTrigger: '#solutions--1-1',
  end: 'top 20%',
  toggleClass: { targets: '.nav__item--4', className: 'active' },
  // markers: true
})
ScrollTrigger.create({
  trigger: '#solutions--2',
  endTrigger: '#solutions--2-1',
  end: 'top 20%',
  toggleClass: { targets: '.nav__item--5', className: 'active' },
  // markers: true
})

// Solutions Sub-items
ScrollTrigger.create({
  trigger: '#solutions--1-1',
  endTrigger: '#solutions--1-2',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-1', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--1-2',
  endTrigger: '#solutions--1-3',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-2', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--1-3',
  endTrigger: '#solutions--1-4',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-3', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--1-4',
  endTrigger: '#solutions--2',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-4', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--2-1',
  endTrigger: '#solutions--2-2',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-5', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--2-2',
  endTrigger: '#solutions--2-3',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-6', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--2-3',
  endTrigger: '#solutions--2-4',
  end: 'top 20%',
  toggleClass: { targets: '.nav__sub-item-7', className: 'active' },
})
ScrollTrigger.create({
  trigger: '#solutions--2-4',
  endTrigger: '.contact__section',
  toggleClass: { targets: '.nav__sub-item-8', className: 'active' },
})



