import $ from "jquery";

const stateNavMgmt = (select) => {
  if (select === 1) {
    $('.nav__item').removeClass('active');
    $('.nav__item--1').addClass('active');
  } else if (select === 2) {
    $('.nav__item').removeClass('active');
    $('.nav__item--2').addClass('active');
  } else if (select === 3) {
    $('.nav__item').removeClass('active');
    $('.nav__item--3').addClass('active');
  } else {
    $('.nav__item').removeClass('active');
  }
}

export default stateNavMgmt;