$(function(){
  //gnb all 메뉴 열기
  $('.btn-list').click(function(){  
    $('#gnb').show(); //gnb id에 있는 내용을 열어라
  })
  $('.closebox').click(function(){
    $('#gnb').hide(); //gnb id에 있는 내용을 숨겨라
  });

  //main-nav
  $('.main-nav').hover(function(){
    $('.header-background').stop().slideToggle(200);
    $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
    $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
    $(".d-sub-title").find("span").removeClass("act");
    $('.main-nav a, .logo, .btn-h-line, .ri-search-line, .ri-global-line, .ri-menu-4-fill').toggleClass("black-font");
    $('.searchform, .btn-h-line').toggleClass("black-border");
  });

  $(window).scroll(function(){
        console.log($(window).scrollTop()); //윈도우에서 스크롤 하면 Top값을 콘솔로 찍는다.
  });

  $('.main-nav>li').hover(function(){
    $(this).find('.d-submenu-main') .toggle(); //지금 마우스가 올라간곳에 d-submenu 클래스를 찾아서 fadeToggle(보여졌다 안보여졌다) 하라
  });

  $('.d-sub-title').prepend('<div class="d-sub-title-before"></div>'); //prepend는 지정한 클래스 바로 앞에 클래스 추가

  $('.d-sub-title').mouseenter(function(){
    $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
    $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
    $(".d-sub-title").find("span").removeClass("act");
    $(this).find(".d-sub-title-before").addClass('d-sub-title-before-hover');
      $(this).find("a").removeClass("black-font").addClass("act");
      $(this).find('span').addClass("act");
    });

}); //jquery