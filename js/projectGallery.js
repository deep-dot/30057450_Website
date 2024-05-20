// document.addEventListener('DOMContentLoaded', function () {
//     var currentIndex = 0;
//     var images = document.querySelectorAll('.carousel-item');
//     var prevButton = document.querySelector('.prev');
//     var nextButton = document.querySelector('.next');

//     function showImage(index) {
//         images.forEach((item, i) => {
//             if (i === index) {
//                 item.classList.add('active');
//             } else {
//                 item.classList.remove('active');
//             }
//         });
//     }

//     prevButton.addEventListener('click', function () {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//         showImage(currentIndex);
//     });

//     nextButton.addEventListener('click', function () {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//     });

//     showImage(currentIndex);
// });


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})