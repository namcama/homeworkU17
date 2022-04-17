var slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
    showSlides(slideIndex ++);
}, 5000);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$('.list-faq .question').click(function () {
    var btn = $(this).parent();
    $('.list-faq .ans').hide(500);
    $('.list-faq .question').find('.fa').removeClass('fa-minus').addClass('fa-plus');

    if (btn.hasClass('active')) {
        btn.removeClass('active').find('.fa').removeClass('fa-minus').addClass('fa-plus');
        btn.find('.ans').hide(500);
    }
    else {
        btn.addClass('active').find('.fa').addClass('fa-minus').removeClass('fa-plus');
        btn.find('.ans').show(500);
    }
})

$('.btn-bar').on('click', function (){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.header_menu').hide(500);
    } else {
        $(this).addClass('active');
        $('.header_menu').show(500);
    }
})

$(".form-contact").validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        subject: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        name: "Please enter your name",
        subject: "Please enter your subject",
        message: "Please enter your message",
        email: "Please enter a valid email address",
    }
});