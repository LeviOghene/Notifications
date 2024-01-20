var markAsRead = document.getElementById('markAsRead');


markAsRead.addEventListener('click', function () {
    var read = document.querySelectorAll('.unread');
    var containerColor = window.getComputedStyle( document.querySelector('.container')).backgroundColor;
    var active = document.querySelectorAll('.red');
    var activeAngela = document.getElementById('redAngela');
    var number = document.getElementById('numberOfNotifications');

    read.forEach(function(article) {
        article.style.backgroundColor = containerColor;
    });

    activeAngela.style.display = 'none';

    active.forEach(function (span) {
        span.style.display = 'none';
    });

    number.style.display = 'none';

    

   
})