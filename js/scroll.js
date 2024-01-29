$(function(){
    $(window).scroll(function(){
       let top = $(window).scrollTop();
       console.log(top);
       if(top > 600) {
          $("#new .row").addClass("animate__animated");   //html에 animated__(내용)을 넣어서 바로 넣어줄 수 있다!!.
       }else if(top < 600){
          $("#new .row").removeClass("animate__animated");
       }
    }); 
  });