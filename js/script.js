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
    $('.main-nav a, .logo, .btn-h-line, .ri-search-line, .ri-global-line, .ri-menu-4-fill').toggleClass("black-font");
    $('.searchform, .btn-h-line').toggleClass("black-border");
  });

  $('.main-nav>li').hover(function(){
    $(this).find('.d-submenu-main') .toggle(); //지금 마우스가 올라간곳에 d-submenu 클래스를 찾아서 fadeToggle(보여졌다 안보여졌다) 하라
  });
}); //jquery