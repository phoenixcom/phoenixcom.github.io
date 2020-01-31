var humburgers = document.querySelectorAll('.js-humburger');
var navigation = document.querySelector('.js-navigation');

humburgers.forEach(function(humburger){
    humburger.addEventListener('click', function () {
    navigation.classList.toggle('active');
    humburger.classList.toggle('active');
    }); 
});


