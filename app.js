var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll ('.btn')
let currentSlide = 1;


var manual = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

    btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');

}

btns.forEach((btn, i) => {
    btn.addEventListener ('click', () => {
        manual(i);
        // currentSlide = i;
    })
})