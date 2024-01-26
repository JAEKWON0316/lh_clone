$(function(){
  //gnb all 메뉴 열기
  let count=1;

  $('.btn-list').click(function(){  
    $('#gnb').show(); //gnb id에 있는 내용을 열어라
  })
  $('.closebox').click(function(){
    $('#gnb').hide(); //gnb id에 있는 내용을 숨겨라
  });

   //main-nav
   $('.main-nav').hover(function(){
    $('.header-background').hide();
    $('.main-nav a, .logo, .btn-h-line, .ri-menu-4-fill, .ri-global-line, .ri-search-line').removeClass('black-font');
    $('.searchform,.btn-h-line').removeClass('black-border');
    $('.header-background').stop().slideToggle(200);
    $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
    $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
    $('.d-sub-title').find("span").removeClass("act");
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-menu-4-fill, .ri-search-line, btn-list').stop().toggleClass("black-font");
    $('.searchform,.btn-h-line').stop().toggleClass("black-border");
 });


 $(window).scroll(function(){
  if($(window).scrollTop() > 0){
    $('.header-background').stop().slideDown(200);
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line, .ri-menu-4-fill').stop().addClass("black-font");
    $('.searchform,.btn-h-line').stop().addClass("black-border");
  }else{
    $('.header-background').stop().slideUp(200);
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line, .ri-menu-4-fill').stop().removeClass("black-font");
    $('.searchform,.btn-h-line').stop().removeClass("black-border");
  };
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

    //배너 애니메이션
    $('.banner-in').css('width', (504*4)+"px"); //이미지가 끊기지 않고 나란히 스게
    let bannerPlay; 
    //interval하는 함수를 bannerPlay라는 변수에 담아둠(이 변수를 쓰면 clearInterval로 정지할 수 있다.)

    function stopInterval(){
      clearInterval(bannerPlay);
      bannerPlay = null;
    }
    function playInterval(){
      bannerPlay = setInterval(mySlide, 3000); //setInterval(함수명, 간격) => 함수를 정한간격만큼 무한반복(infinite)
    }
    playInterval();
    //jquery 애니메이션 함수
    function mySlide(){
      count++;
      if(count > 4){
        count = 1;
      }
      $('.count').text(count);
    $('.banner-in').animate({
      'left': '-504px'
    }, 500, function(){  //콜백함수
      $('.banner-in img:eq(0)').clone().appendTo('.banner-in'); //clone(복제)해서 banner-in의 append위치에 붙혀라!!
      $('.banner-in img:eq(0)').remove(); //그다음 제일 처음을 지워줌
      $('.banner-in').css('left',0); //그다음 다시 left 0으로 처음으로같게밀어준다.
    });
  };
  function myPrevSlide(){ //mySlide()의 반대함수
    count--;
    if(count < 1){
      count = 4;
    }
    $('.count').text(count);
    $('.banner-in img:last-child').clone().prependTo('.banner-in');
    $('.banner-in img:last-child').remove();
    $('.banner-in').css('left', '-504px').animate({
      'left': '0'
    }, 500);
  }
  $('.playbtn').click(function(){
    if($(this).hasClass('ri-stop-fill')){
      $(this).removeClass('ri-stop-fill').addClass('ri-play-fill');
      stopInterval();
    }
    else{
      $(this).removeClass('ri-play-fill').addClass('ri-stop-fill');
      playInterval();
    }
  });

  $('.ri-arrow-left-s-line').click(function(){
    myPrevSlide();
  });

  $('.ri-arrow-right-s-line').click(function(){
    mySlide();
  });

}); //jquery