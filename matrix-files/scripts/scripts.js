//$(function () {

//    $('#container-cookies').append('<div id="cookies" class="cookies"><div class="cookies_wrapper"><a class="close" title="close" href="javascript:;"></a><p class="copy">We use cookies on this website to enhance your user experience. By continuing on this website <br />you are agreeing to the use of these cookies. For further information please read our <a class="ck" href="/cookies" target="_blank">Cookie policy</a>.</p></div></div>');

//        function cookiesdiv(event) {
//            if (event == "1") {
//                alert(document.getElementById('cookies').style.display = "none");
//                //return false;
//            } 
//        }
//    function Trim(strValue) {
//        return strValue.replace(/^\s+|\s+$/g, '');
//    }

//    function getCookie(key) {
//        var result = false;
//        if (document.cookie) {
//            var rsofficeArray = document.cookie.split(';');
//            for (i = 0; i < rsofficeArray.length; i++) {
//                var mykeyValue = rsofficeArray[i].split('=');
//                if (Trim(mykeyValue[0]) == key) result = mykeyValue[1];
//            }
//        }
//        return result;
//    }

//    function setCookie(key, value, hoursExpire) {
//        var ablauf = new Date();
//        //var expireTime = ablauf.getTime() + (hoursExpire * 60 * 60 * 1000);
//        var expireTime = ablauf.setTime(ablauf.getTime() + 3600000 * 24 * hoursExpire);
//        ablauf.setTime(expireTime);
//        document.cookie = key + "=" + value + "; expires=" + ablauf.toGMTString();
//    }
//    var rsoffice = getCookie('rsoffice');
//    if (!rsoffice) {
//        //alert('nokooki');
//        document.getElementById('cookies').style.display = "block";
//    }

//    $(".cookies_wrapper .close").click(function () {
//        setCookie('rsoffice', 'true', 31);
//        $(".cookies").css('display', 'none');
//        $("header #header").removeAttr('style');
//        $("nav").removeAttr('style');
//        $("section").removeAttr('style');
//    });


//    function iscookies() {
//        if (rsoffice) {
//            //alert('set');
//            if (document.getElementById('cookies'))
//                document.getElementById('cookies').style.display = "none";
//            // do whatever you want if the cookie is set
//            // mycookie contains the cookie value
//        }
//        else {
//            //document.getElementById('header').style.top = "115px";
//            //document.getElementById('nav').style.top = "229px";
//            if (document.getElementById('eventsclass'))
//                document.getElementById('eventsclass').style.marginTop = "75px";
//            // do whatever you want if the cookie is set
//            // mycookie contains the cookie value
//        }
//    }

//    iscookies();
//});

/* jQuery.noConflict() for using the plugin along with other libraries. 
  You can remove it if you won't use other libraries (e.g. prototype, scriptaculous etc.) or 
  if you include jQuery before other libraries in yourdocument's head tag. 
  [more info: http://docs.jquery.com/Using_jQuery_with_Other_Libraries] */
//jQuery.noConflict(); 
/* calling thumbnailScroller function with options as parameters */
(function ($) {

    $(document).ready(function () {

        var mobile = (/iphone|ipod|android|blackberry|mini|windows phone|windowssce|palm/i.test(navigator.userAgent.toLowerCase()));

        //hslider();
        //$(window).resize(hslider);
        //function hslider() {
        //    var headerHeight = $("header").innerHeight();
        //    var footerHeight = $("footer").innerHeight();
        //    var windowHeight = $(window).height();
        //    //$(".popupv-block .h-center").css('height', windowHeight);
        //    $("section #slider.full-h .flexslider .slides > li").css('height', windowHeight);
        //    $("section #slider.full-h .flexslider .dep-inner").css('height', windowHeight - headerHeight);

        //}



        $(window).scroll(function () {

            if ($(this).scrollTop() > $("header").height()) {
                $('header').addClass("sticky");
            }
            else {
                $('header').removeClass("sticky");
            }
        });





        //hslider();
        //$(window).resize(hslider);




        $(document).on("click", ".scrolly[href^='#']", function (e) {
            var href = $(this).attr("href"), target = $(href).parents("body");
            if (target.length) {
                e.preventDefault();
                target.mCustomScrollbar("scrollTo", href);
            }
        });
        $(".btnplay").click(function () {
            $(this).addClass("hide");
            $(".btnpause").removeClass("hide");
        });
        $(".btnpause").click(function () {
            $(this).addClass("hide");
            $(".btnplay").removeClass("hide");
        });
        $(".sound").click(function () {
            if ($(this).hasClass("muted")) {
                $(this).removeClass("muted");
                $(this).addClass("unmute");
            }
            else {
                $(this).addClass("muted");
                $(this).removeClass("unmute");
            }
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > $('.slider').height()) {
                $('.stc-link').addClass("sticky");
            } else {
                $('.stc-link').removeClass("sticky");
            }
        });
        $(".our-work ul li .hover").hide();
        $(".our-work ul li").hover(function () {
            $(this).find('.hover').animate({
                height: 'toggle'
            }, 290, function () {
            });
        }, function () {
            $(this).find('.hover').delay(100).animate({
                height: 'toggle'
            }, 290, function () {
            });
        });
         if (mobile || $(window).width() <= 767) {
        $(".our-work.full-w ul li .hover").show();
        $(".our-work.full-w ul li").hover(function () {
            $(this).find('.hover').stop({
                height: 'toggle'
            }, 290, function () {
            });
        }, function () {
            $(this).find('.hover').delay(100).stop({
                height: 'toggle'
            }, 290, function () {
            });
        });
                }

      

        //$(".menu").click(function () {
        //    if ($(this).hasClass("active")) {
        //        $(this).removeClass("active");
        //        $("header nav").removeClass("open");
        //    } else {
        //        $(this).addClass("active");
        //        $("header nav").addClass("open");
        //    }
        //});
        //$('.read-more-content').addClass('hide');
        //// Set up the toggle effect:
        //$('.arrow-down-small').click(function () {
        //    $('.read-more-content').removeClass('hide');
        //    $(this).css('display', 'none');
        //});

        $(".menu").click(function () {
            $(".contact-icon").removeClass("active");
            $('.contact-form').slideUp(300);
            $(".c-ac").removeClass("active");


            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $("header").removeClass("whit-h");
                $("header").removeClass("nav-open");

                $("header").removeAttr('style');
                $("header nav").removeAttr('style');
            } else {
                $(this).addClass("active");
                $("header").addClass("nav-open");
                $("header").removeClass("whit-h");



                //if (mobile || $(window).width() <= 767) {
                //    var windowHeight = $(document).height();
                //    $("header nav").css('height', windowHeight);
                //}
            }
        });

        $("header .header nav ul li a").click(function () {
            $('.menu').removeClass("active");
            $("header").removeClass("nav-open");
            //if (mobile || $(window).width() <= 767) {
            //    var windowHeight = $(document).height();
            //    $("header nav").css('height', windowHeight - Number($("header nav").height()));
            //}

        });
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        if (localStorage['submitform'] == '1') {
            $(".contact-form").show();
            localStorage['submitform'] = null;
            $('.c-right').addClass('thankyou');
            $('.contact-icon').addClass("active");
            $("header").addClass("whit-h");
        } else {
            $(".contact-form").hide();
            $('.c-right').removeClass('thankyou');
            $('.contact-icon').removeClass("active");
            $("header").removeClass("whit-h");
        }

        $(".contact-icon,.contact-icon1").click(function (e) {
            $(".menu").removeClass("active");
            $("header").removeClass("nav-open");
            $(".c-ac").removeClass("active");

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $('.contact-form').slideDown(300);
                $('.contact-form').slideUp(300);
                $("header").removeClass("whit-h");

            } else {
                $(".contact-icon").addClass("active");
                $('.contact-form').slideUp(300);
                $('.contact-form').slideDown(300);
                $("header").addClass("whit-h");

            }
            if ($('.c-right').hasClass('thankyou')) {
                $('.c-right').removeClass('thankyou');
            }

        });

        $(".c-ac").click(function (e) {
            $(".menu").removeClass("active");
            $("header").removeClass("nav-open");
            if ($(this).hasClass("active")) {
                $("this").removeClass("active");
                $('.contact-form').slideUp(300);
                $("header").removeClass("whit-h");

            } else {
                $(".contact-icon").addClass("active");
                $('.contact-form').slideDown(300);

            }

        });

        $(".contact-close").click(function (e) {
            $(".menu").removeClass("active");
            $("header").removeClass("nav-open");
            $('.contact-form').slideUp(300);
            $(".contact-icon").removeClass("active");
            $("header").removeClass("whit-h");
            $(".c-ac").removeClass("active");

            if ($('.c-right').hasClass('thankyou')) {
                $('.c-right').removeClass('thankyou');
            }

        });

        $(".close-contatc").click(function (e) {
            $(".menu").removeClass("active");
            $("header").removeClass("nav-open");
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $('.contact-form').slideDown(300);
                $('.contact-form').slideUp(300);

            } else {
                $(".contact-icon").addClass("active");
                $('.contact-form').slideUp(300);
                $('.contact-form').slideDown(300);
            }
        });



        //$("header nav ul li > ul").hide();
        //$("header nav ul li a").click(function (e) {
        //    if ($(this).parent('li.sub-nav').hasClass("active")) {
        //        $(this).parent('li.sub-nav').find('ul').slideDown(400);
        //        $("header nav ul li a").parent('li').find('ul').slideUp(400);
        //        $(this).parent('li.sub-nav').removeClass("active");
        //    } else {
        //        $("header nav ul li a").parent('li').removeClass("active");
        //        $(this).parent('li.sub-nav').addClass("active");
        //        $("header nav ul li a").parent('li').find('ul').slideUp(400);
        //        $(this).parent('li.sub-nav').find('ul').slideDown(400);
        //    }
        //});
        $("header #header nav ul li > ul > li a").click(function () {
            $('.menu').removeClass("active");
            $("header").removeClass("nav-open");
            //if (mobile || $(window).width() <= 767) {
            //    var windowHeight = $(document).height();
            //    $("header nav").css('height', windowHeight - Number($("header nav").height()));
            //}

        });


        if ($('.related ul').length > 0) {
            $('.related ul').slick({
                speed: 300,
                slidesToShow: 5,
                //centerMode: true,
                variableWidth: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            focusOnSelect: true,
                            initialSlide: 1,
                            centerPadding: '7.246376811594203vw',
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        //$(".c-down-arrow").click(function () {
        //    if ($(this).hasClass("active")) {
        //        $(this).parent('li').find('.debl-detail').animate({'height': '236px'});
        //        $(this).removeClass("active");
        //    } else {
        //        $(this).removeClass("active");
        //        $(this).addClass("active");
        //        $(this).parent('li').find('.debl-detail').animate({ 'height': h });
        //    }
        //});



        //$(".grid").click(function () {
        //    $(this).addClass("active");
        //    $(".map").removeClass("active");
        //    $("#gridview").fadeIn();
        //    $("#mapview").fadeOut();
        //});
        //$(".map").click(function () {
        //    $(this).addClass("active");
        //    $(".grid").removeClass("active");
        //    $("#mapview").fadeIn();
        //    $("#gridview").fadeOut();
        //});

        //hslider();
        //$(window).resize(hslider);

        $(".btnplay").click(function () {
            $(this).addClass("hide");
            $(".btnpause").removeClass("hide");
        });
        $(".btnpause").click(function () {
            $(this).addClass("hide");
            $(".btnplay").removeClass("hide");
        });

        if ($('#content-inner').length > 0) {
            $('#content-inner').flexslider({
                animation: "fade",
                controlNav: true,
                animationLoop: true,
                slideshow: true,
                slideshowSpeed: 4000,
                animationSpeed: 1000,
                pauseOnHover: true,
                //sync: "#gallery-thumb", 
                start: function (slider) {
                    $('body').removeClass('loading');
                }
            });
        }
        //hslider();
        //$(window).resize(hslider);
        //if ($('.gll').length > 0) {
        //    $('.gll').flexslider({
        //        animation: "slide",
        //        controlNav: true,
        //        animationLoop: true,
        //        slideshow: false,
        //        slideshowSpeed: 4000,
        //        animationSpeed: 1000,
        //        pauseOnHover: true,
        //        start: function (slider) {
        //                    $('body').removeClass('loading');
        //                    var $new_height = slider.slides.eq(0).height();
        //                    slider.height($new_height);
        //                },
        //                before: function (slider) {
        //                    var $new_height = slider.slides.eq(slider.animatingTo).height();
        //                    if ($new_height != slider.height()) {
        //                        slider.animate({ height: $new_height }, 250);
        //                    }
        //                }


        //    });
        //}
        //hslider();
        //$(window).resize(hslider);


        //function hslider() {
        //    var headerHeight = $("header").height();
        //    var windowHeight = $(window).height();
        //    $(".video").css('height', windowHeight - headerHeight); 
        //}



        //if (window.location.href.toLowerCase().indexOf('/albert-dock-radio') > -1) {

        //    if ($('.player').length > 0) {
        //        if (mobile || $(window).width() <= 640) {
        //            //$('.player').YTPPause();
        //        }
        //        else {
        //            $('.player').YTPPlay();
        //        }
        //    }
        //}

        // Accordion Customize Script
        //$('.fillter ul li ul').hide();
        //$(".drop-d").click(function (e) {
        //    if ($(this).hasClass("active")) {
        //        $(this).parent('li').find('ul').show();
        //        $(".fillter ul li a").parent('li').find('ul').hide();
        //        $(this).removeClass("active");
        //    } else {
        //        $(".fillter ul li a").removeClass("active");
        //        $(this).addClass("active");
        //        $(".fillter ul li a").parent('li').find('ul').hide();
        //        $(this).parent('li').find('ul').show();

        //    }
        //});

        //$(".fillter div > ul > li").hover(function () {
        //}, function () {
        //    $(".fillter ul li a").removeClass("active");
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});

        //$(document).on("click", "#ContactingAboutDDL li a", function () {

        //    $("#ContactingAboutDDL li a").removeClass('open');
        //    $(this).addClass('open');
        //    $(this).parent().parent().parent().find('.drop-d').text($(this).text());
        //    $(".drop-d").removeClass('active');
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});
        //$(document).on("click", "#ContactingIntrestedDDL li a", function () {

        //    $("#ContactingIntrestedDDL li a").removeClass('open');
        //    $(this).addClass('open');
        //    $(this).parent().parent().parent().find('.drop-d').text($(this).text());
        //    $(".drop-d").removeClass('active');
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});


        //$(document).on("click", "#HowDidYouHearDDL li a", function () {

        //    $("#HowDidYouHearDDL li a").removeClass('open');
        //    $(this).addClass('open');
        //    $(this).parent().parent().parent().find('.drop-d').text($(this).text());
        //    $(".drop-d").removeClass('active');
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});

        //$(document).on("click", "#ContactingNumerofBedroomsDDL li a", function () {

        //    $("#ContactingNumerofBedroomsDDL li a").removeClass('open');
        //    $(this).addClass('open');
        //    $(this).parent().parent().parent().find('.drop-d').text($(this).text());
        //    $(".drop-d").removeClass('active');
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});

        //$(document).on("click", "#ContactingSuppychainCountryDDL li a", function () {

        //    $("#ContactingSuppychainCountryDDL li a").removeClass('open');
        //    $(this).addClass('open');
        //    $(this).parent().parent().parent().find('.drop-d').text($(this).text());
        //    $(".drop-d").removeClass('active');
        //    $(".fillter ul li a").parent('li').find('ul').hide();
        //});

        gettingbottomURL();
        $(window).resize(gettingbottomURL);

        $(".get-in-touch").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $("body").removeClass("contact-open");
            } else {
                $(this).addClass("active");
                $("body").addClass("contact-open");
            }
        });
        function gettingbottomURL() {
            if (mobile || $(window).width() <= 641) {
                var GettingDataURL = $(".get-in-touch").attr('data-url');
                $(".get-in-touch").attr('href', GettingDataURL);
            }
            else {

                $(".get-in-touch").attr('href', 'javascript:;');
            }
        }


        var headerHeight = $("header").height();
        $(document).on("scroll", onScroll);
        //smoothscroll
        $('a.scroll').on('click', function (e) {
            $(document).off("scroll");
            $('a.scroll').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
            var target = this.hash, menu = target; $target = $(target);
            $('html, body').animate({ scrollTop: ($target.offset().top - headerHeight) }, 500, 'swing', function () {
                //window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
            e.preventDefault();
        });



    });

})(jQuery);

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('a.scroll').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('a.scroll').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}