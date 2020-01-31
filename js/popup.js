var buttons = document.querySelectorAll('.js-popup-btn');
var popupBackground = document.querySelector('.js-popup-backgruond');
var popup = document.querySelector('.js-window-popup');
var popupCloseButton = document.querySelector('.js-close-popup');
console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function() {
        popupBackground.classList.add('active');
        popup.classList.add('active');
    });

});

popupCloseButton.addEventListener('click', function() {
    popupBackground.classList.remove('active');
    popup.classList.remove('active');

});
console.log(button);
console.log(popupBackground);
console.log(popup);
console.log(popupCloseButton);