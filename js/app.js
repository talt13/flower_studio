var el = document.getElementsByClassName('header-menu__item');
for(var i=0; i<el.length; i++) {
    el[i].addEventListener("mouseenter", showSub, false);
    el[i].addEventListener("mouseleave", hideSub, false);
 }

 function showSub(e) {
    if(this.children.length>1) {
       this.children[1].style.height = "auto";
       this.children[1].style.overflow = "visible";
       this.children[1].style.opacity = "1";
    } else {
       return false;
    }
 }
 function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}

$('#header__search')
    .click(function(){
        $('#header__search-body').show();
   });

   $(document).mouseup(function (e) {
      var container = $('#header__search-body');
      if (container.has(e.target).length === 0){
          container.hide();
      }
  });


let clearSearchForm = function(){
   $(document).on('click', '.search-input__delete', function(){
      $('.search-input').val('');
   });
};

$(document).ready(function(){
   $('.js-banner').slick({
       autoplay:true,
       arrows: true,
       autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:true,
        appendDots: $('.slick-slider-dots'),
       prevArrow:"<button type='button' class='banner__nav banner__nav--prev'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
       nextArrow:"<button type='button' class='banner__nav banner__nav--next'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>"
   });
});

let tabs = function(){
   $('.tabs-navigation__item').click(function(){
      let tabName = $(this).attr('show-tab'),
         tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
         tab = $(tabsBody).find('.' + tabName);
      $(this).addClass ('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
      $(tab).addClass('tab--active').siblings().removeClass('tab--active');
      if ($(tabsBody).find('.js-product-line-slider').length){
         $('.js-product-line-slider').each(function(){
            $(this).slick('refresh');
         });
      }
   });
};


let productLineSlider = function(){
   $('.js-product-line__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: false,

      
   })
};

clearSearchForm();
tabs();
productLineSlider();



