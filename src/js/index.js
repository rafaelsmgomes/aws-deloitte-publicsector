import '../sass/main.scss';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

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

gsap.to(
  indicator1, {
  scrollTrigger: {
    trigger: '#header',
    start: "top center",
    end: "bottom top",
    toggleActions: 'restart reverse restart reverse',
    markers: true
  },
  backgroundColor: '#c5a1ff',
  ease: 'none',
  duration: .25
})
gsap.to(
  indicator2, {
  scrollTrigger: {
    trigger: '#industry',
    start: "top center",
    end: "bottom center",
    toggleActions: 'restart reverse restart reverse',
    markers: true
  },
  backgroundColor: '#c5a1ff',
  ease: 'none',
  duration: .25
})
gsap.to(
  indicator3, {
  scrollTrigger: {
    trigger: '#quote-1',
    start: "top center",
    end: "bottom center",
    toggleActions: 'restart reverse restart reverse',
    markers: true
  },
  backgroundColor: '#c5a1ff',
  ease: 'none',
  duration: .25
})
gsap.to(
  indicator4, {
  scrollTrigger: {
    trigger: '#better-view',
    start: "top center",
    end: "bottom center",
    toggleActions: 'restart reverse restart reverse',
    markers: true
  },
  backgroundColor: '#c5a1ff',
  ease: 'none',
  duration: .25
})
gsap.to(
  indicator5, {
  scrollTrigger: {
    trigger: '#solutions',
    start: "top center",
    end: "bottom center",
    toggleActions: 'restart reverse restart reverse',
    markers: true
  },
  backgroundColor: '#c5a1ff',
  ease: 'none',
  duration: .25
})



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

window.onscroll = () => {
  addStickyNav()
}

const navbar = document.querySelector('.navigation')
const sticky = navbar.offsetTop;
function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
}
