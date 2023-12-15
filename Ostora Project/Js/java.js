
  let customIndex = 0;
  const totalCustomSlides = document.querySelectorAll('.custom-slide').length;

  function showCustomSlide(index) {
      const customSlider = document.querySelector('.custom-slider');
      const customSlideWidth = document.querySelector('.custom-slide').clientWidth;
      const customNewPosition = -index * customSlideWidth;
      customSlider.style.transform = `translateX(${customNewPosition}px)`;
  }

  function customNextSlide() {
      customIndex = (customIndex + 1) % totalCustomSlides;
      showCustomSlide(customIndex);
  }

  function customPrevSlide() {
      customIndex = (customIndex - 1 + totalCustomSlides) % totalCustomSlides;
      showCustomSlide(customIndex);
  }

  setInterval(customNextSlide, 2000);
  const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const cardsCustom = document.querySelector('.cards-custom');
  let currentIndexCustom = 0;

  function showCardCustom(index) {
    const translateValue = -index * 100 + '%';
    cardsCustom.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextCardCustom() {
    currentIndexCustom = (currentIndexCustom + 1) % cardsCustom.children.length;
    showCardCustom(currentIndexCustom);
  }

  function prevCardCustom() {
    currentIndexCustom = (currentIndexCustom - 1 + cardsCustom.children.length) % cardsCustom.children.length;
    showCardCustom(currentIndexCustom);
  }

  setInterval(nextCardCustom, 3000);

  $(document).ready(function(){
    $('.carousel').carousel();
  });
