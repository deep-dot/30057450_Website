document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = document.querySelectorAll('.carousel-image');
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    const descriptions = document.querySelectorAll('.description');

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
                 descriptions[i].style.display = 'block';
            } else {
                image.classList.remove('active');
                 descriptions[i].style.display = 'none';
            }
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});

