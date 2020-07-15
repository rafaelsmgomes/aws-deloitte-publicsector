import '../sass/main.scss';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, DrawSVGPlugin);




gsap.to('.industry__img', {
  scrollTrigger: {
    trigger: '.industry__img',
    start: "top center",
    toggleActions: 'restart pause none none',
    markers: true
  },
  opacity: 1,
  x: '0%',
  duration: .5,
  ease: 'Power1.easeIn'
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

