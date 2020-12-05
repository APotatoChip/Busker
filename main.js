// Select element function

const selectElement = function(element) {
    return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
})

// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.headline', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 100,

});

sr.reveal('.headline-discover', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 100,

});

sr.reveal('.join-us-txt', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 100
});