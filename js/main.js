
var winH, winW;
var headerH;
var hamburgerC;
var navW;
var pathname;

var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

$(function(){

	// $.html5Loader({
    //     filesToLoad: 'js/resource.json',
    //     onBeforeLoad: function () {
    //         //console.log('on BeforeLoad');
    //         $('body').addClass('modal-open');

    //         var loading = bodymovin.loadAnimation({
    //             container: document.getElementById('loading'),
    //             path: 'images/loading.json',
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //         })
    //     },
    //     onComplete: function () {
    //         //console.log('on complete');
    //         TweenMax.to($(".loading"), 1, {autoAlpha:0, delay:1, onComplete:function(){
    //             $('body').removeClass('modal-open');
    //             init()
    //         }})
    //     },
    //     onElementLoaded: function ( obj, elm) {
    //         //console.log(elm);
    //     },
    //     onUpdate: function ( percentage ) {
    //         //console.log(loadingAlpha);
    //     }
    // });

    init();

	function init(){
        $("header").load("header.html", function(){
            // console.log("header done");
            setting();

            $(window).on('resize', onResize);
            $(window).on('scroll', onScroll);
            onResize();
            onScroll();
        });

        $("footer").load("footer.html", function(){
            // console.log("footer done");
        });
    }

    function onScroll(){
        var st = $(window).scrollTop();

        if(st > winH) {
            $('.back-to-top').addClass('active');
        }else{
            $('.back-to-top').removeClass('active');
        }

        //選單背景需要直接出現的頁面
        // if(
        //     pathname.includes('news') || 
        //     pathname.includes('access') || 
        //     pathname.includes('terms') || 
        //     pathname.includes('privacy') ||
        //     pathname.includes('sitemap') ||
        //     pathname.includes('contact') 
        // ){
        //     $('header').addClass('active');
        //     $('header .logo').addClass('active');
        //     return;
        // }
        
        // if(st > winH - 80){
        //     $('header').addClass('active');
        //     $('header .logo').addClass('active');
        // }else{
        //     $('header').removeClass('active');
        //     $('header .logo').removeClass('active');
        // }
    }
    
    function setting(){
        pathname = window.location.pathname;
        var url = window.location.href;
        var urlAry = url.split('?');
        // console.log(pathname.substr(1));

        $('header nav a').removeClass('active');

        if(urlAry[0].charAt(urlAry[0].length - 1) == '/'){
            $('header nav a:nth-child(1)').addClass('active');
        }else if(pathname.includes('index')){
            $('header nav a:nth-child(1)').addClass('active');
        }else if(pathname.includes('about')){
            $('header nav a:nth-child(2)').addClass('active');
        }else if(pathname.includes('expertise')){
            $('header nav a:nth-child(3)').addClass('active');
        }else if(pathname.includes('products')){
            $('header nav a:nth-child(4)').addClass('active');
        }else if(pathname.includes('access')){
            $('header nav a:nth-child(5)').addClass('active');
        }else{
            $('header nav a').removeClass('active');
        }

        // 選單開關
        $(".hamburger").on("click",function(){            
            $('nav').toggleClass('open');
            $('.hamburger').toggleClass('open');
        });

        // back to top
        $('.back-to-top').on('click', function(){
            $body.animate({
                scrollTop: 0
            }, 1000);

            return false;
        });

         // anchor
        $('.anchor').on('click', function(){
            var anchorTop = $('#anchor').offset().top;

            $body.animate({
                scrollTop: anchorTop - 90
            }, 1000);

            return false;
        })
    }

    function onResize(){
        winW = $(window).innerWidth();
        winH = $(window).innerHeight();
        
        if(winW > 992){
            $('nav').removeClass('open');
            $('.hamburger').removeClass('open');
        }
    }
});

function goSectionTop(el){
    var spacing = 140;
    var top = $('.' + el).offset().top - spacing;
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    $body.animate({
        scrollTop: top
    }, 1000);
}

function goZhTW(){
    var path = location.href;
    var parts = path.split('/');
    var last = parts[parts.length - 1];

    // var reg = new RegExp('web', 'g');
    // var newPath = path.replace(reg, "web/zh-tw");

    location.href = 'zh-tw/' + last;

    console.log(parts);
}
