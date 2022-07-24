$(function(){//おまじない

  $("#menu_btn").on("click",function(){
    $("body").toggleClass('open_menu');
  })


  $("body").append('<div id="mousepoint"><div id="circle"></div></div>')
  const mousepoint = "#mousepoint";
  // 追従用の処理
  $(window).mousemove(function(e){
    let x = e.clientX;
    let y = e.clientY;
    $(mousepoint).css({"transform": "translate(" + x + "px," + y + "px)"});
  });

  $("a").hover(
    function(){$(mousepoint).addClass("ahover")},
    function(){$(mousepoint).removeClass("ahover")}
  )

});//おまじない
