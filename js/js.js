// Sidebar
$(function() {
    'use strict';
    $('.toggle-sidebar').on('click', function() {
        $('.sidebar').toggleClass('no-sidebar');

        $('#overlay').toggleClass('show');

    });
});

// theme color
let elements = document.getElementsByClassName('change-color')[0].getElementsByTagName('li')
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        document.body.setAttribute('data-theme', elements[i].dataset.color);
    })

}