//�쒕툕 �섏씠吏� �ㅻ뜑
$(window).scroll(function(){
    let sc = $(window).scrollTop();
    if(sc > 0 ){
        $('.header').addClass('down');
    }else{
        $('.header').removeClass('down');
    }
});

// �곷떒 �ㅻ뜑 怨듦컙 
function mainBlank(){
    let headerSize = $('header').outerHeight() * 2;
    $('.sub').css('padding-top', headerSize);
    
} mainBlank();

$(window).resize(function() {
        mainBlank();
        ScrollTrigger.refresh(true);
});


//searchSelectBox
let SelectBox = $('.selectBox_value');
SelectBox.click(function() {
    if($(this).closest('.__subvisaul').hasClass('__subvisaul') == true) {
        $(this).parent().siblings().find('.selectBoxList').stop().slideUp(0);
        $(this).siblings('.selectBoxList').stop().slideToggle(600);
    } else {
        $(this).siblings('.selectBoxList').stop().slideToggle(600);
    }
});

//selectBoxList �꾩씠�� �좏깮
$('.selectBoxList > li').click(function() {
    let txtval = $(this).text();
    $(this).siblings().removeClass('active');
    $(this).addClass('active').parent().slideToggle(600).siblings('.selectBox_value').children('span').text(txtval);
});

// 臾몄쓽�섍린 媛쒖씤�뺣낫泥섎━諛⑹묠
function pri_popupOpen() {
    $('.pri_popup').addClass('active');
    $('html').addClass('popup_on');
    
}
function pri_popupClose(){
    $('.pri_popup ._wrap .bg .text').scrollTop(0);
    $('html, body').removeClass('popup_on');
    $('.pri_popup').removeClass('active');
    return false;
}

let srchFilterWrap = $('main .pd_searchSec .srch_fillter dd .fillterItem');
let srchFilter_active = $('main .pd_searchSec .srch_fillter dd .fillterItem li');
let fillterChecked = $('.pd_searchSec .crntFillter .selectedItem');
let fillterCheckedItem = $('.pd_searchSec .crntFillter .selectedItem li');
let selectedReset = $('.pd_searchSec dl.crntFillter dt');
let filterWord;
let filterWord2;
let itemToRemove;

srchFilter_active.click(function () {
    filterWord = $(this).children('span').text();

    if ($(this).hasClass('active')) {
        // ��젣 ���곸쓣 �좏깮�⑸땲��.
        itemsToRemove = fillterChecked.find('span').filter(function() {
            return $(this).text() === filterWord;
        }).parent();
        // ��젣�⑸땲��.
        itemsToRemove.remove();
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
        fillterChecked.append('<li class="on"><span>' + filterWord + '</span><i class="xi-close"></i></li>');
    }
});

selectedReset.click(function() {
    srchFilter_active.removeClass('active');
    fillterChecked.children().remove();
});

$(document).on('click', '.pd_searchSec .crntFillter .selectedItem li', function() {
    filterWord = $(this).children('span').text();
    itemToRemove = srchFilterWrap.find('span').filter(function() {
        return $(this).text() === filterWord;
    }).parent();
    itemToRemove.removeClass('active');
    $(this).remove();
});


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin);

if(	navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.maxTouchPoints == 5){
    // 紐⑤컮�쇱씪 寃쎌슦 scrollsmoother 鍮꾪솢�깊솕
}else{
    ScrollSmoother.create({
        smooth: 1.4,
        effects: true,
    });
}

$(window).on('resize', function(){
    if(	navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.maxTouchPoints == 5){
        
    } else {
        ScrollTrigger.refresh(true);
    }
})

$(window).load(function(){
    ScrollTrigger.refresh(true);
});

$(window).on('resize', function(){
    setTimeout(() => {
        ScrollTrigger.refresh(true);
    }, 500);
});



// sub tapMenu
let list_tab = $('._listTab .list_cls li');
list_tab.click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
});






gsap.utils.toArray('.sub .__scroll .ar').forEach((el,i)=>{
    gsap.timeline({
        repeat : -1,
        yoyo : true,
        ease : "none",
        delay : i*0.2
    })
    .to(el,{
        opacity: 0
    })
    .to(el,{
        opacity: 0.5
    })
    .to(el,{
        opacity: 1  
    })
});

//�쒕툕鍮꾩＜�� 紐⑥뀡

ScrollTrigger.matchMedia({
    "(min-width: 481px)" : function() {
        gsap.timeline({})
        .fromTo($('.__subvisaul .t dl > *'), {y: 40, opacity: 0}, {y: 0, opacity: 1, stagger: 0.6, duration: .6})
        .fromTo($('.__subvisaul .t .nav'), {x: 40, opacity: 0}, {x: 0, opacity: 1, duration: .6}, "-=50%")
        .fromTo($('.__subvisaul .img .bg'), {opacity: 0}, { opacity: 1, duration: .6}, "-=50%")
    },

    "(max-width: 480px)" : function() {
        gsap.timeline({})
        .fromTo($('.__subvisaul .t .nav'), {y: 40, opacity: 0}, {y: 0, opacity: 1, duration: .6}, "-=50%")
        .fromTo($('.__subvisaul .t dl > *'), {y: 40, opacity: 0}, {y: 0, opacity: 1, stagger: 0.6, duration: .6})
        .fromTo($('.__subvisaul .img .bg'), {opacity: 0}, { opacity: 1, duration: .6}, "-=50%")
    },

})

