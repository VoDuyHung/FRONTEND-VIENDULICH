$(document).ready(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var heightHtop = $('.header-top').height();
        var paddingHtop = ($('.header-top').innerHeight() - heightHtop);
        var mainheight = heightHtop + paddingHtop;
        var heightheader = $('#header').height();

        if (scroll >= mainheight + 2) {
            $('#header').addClass("fixed-top");
            $('.banner').css("padding-top", heightheader);
        } else {
            $('#header').removeClass("fixed-top");
            $('.banner').css("padding-top", "0px");
        }
    });
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });
    $('.header-top-infor').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        dots: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 5000,
    });
    $('.banner-main').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        dots: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 5000,
    });
    $('.banner-sub-main').owlCarousel({
        items: 1,
        nav: false,
        autoHeight: true,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        dots: true,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        autoplayTimeout: 5000,
    });
    $('.feedback-content').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        margin: 30,
        nav: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1200: {
                items: 2,
            },
        }
    });
    $('.related-topic-list').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        margin: 30,
        nav: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: "0px" }, 2000);
        return false;
    });
    new WOW().init();

    // Initiate superfish on nav menu

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-caret-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-caret-up fa-caret-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });
    // Search Active Code
    $('.btn-search, #closeBtn').on('click', function() {
        $('body').toggleClass('search-form-on');
    });
    $('.advance-select').select2({
        placeholder: "Lĩnh vực",
        allowClear: true
    });
    $('.advance-select1').select2({
        placeholder: "Thể loại",
        allowClear: true
    });
    $('.advance-select2').select2({
        placeholder: "Cơ quan ban hành",
        allowClear: true
    });
});

function initMap() {
    var uluru = {
        lat: 16.089957,
        lng: 108.217051
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
$(document).ready(function() {
    size_li = $("#mess1 .message-items").size();
    x = 3;
    $('#mess1 .message-items:lt(' + x + ')').show();
    $('#show-more').click(function() {
        x = (x + 5 <= size_li) ? x + 5 : size_li;
        $('#mess1 .message-items:lt(' + x + ')').show();
        $('#showLess').show();
        if (x == size_li) {
            $('#show-more').hide();
        }
    });
    $('#showLess').click(function() {
        x = (x - 5 < 0) ? 3 : x - 5;
        $('#mess1 .message-items').not(':lt(' + x + ')').hide();
        $('#show-more').show();
        $('#show-less').show();
        if (x == 3) {
            $('#show-less').hide();
        }
    });
});