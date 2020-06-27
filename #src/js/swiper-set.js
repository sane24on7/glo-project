const profitsSlider = document.querySelector('.profits-slider');
const lessonsSlider = document.querySelector('.lessons-slider');

let profitsSwiper = new Swiper (profitsSlider, {
	slidesPerView: 1,
	loop: true,
	slideClass:'profits-slide',
	wrapperClass: 'profits-wrapper',
	navigation: {
    nextEl: '.profits-button-next',
    prevEl: '.profits-button-prev',
  },

})