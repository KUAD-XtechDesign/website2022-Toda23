$(function(){//おまじない

  $("#menu_btn").on("click",function(){
    $("body").toggleClass('open_menu');
  })

  /*以下簡易版マウスストーカー*/
  //bodyにdiv要素(idはmousepoint)を追加。(中にidがcircleのdivがネストされている)
  $("body").append('<div id="mousepoint"><div id="circle"></div></div>')
  const mousepoint = "#mousepoint";
  
  // マウスが動いた時にマウス座標と同じ位置に来るよう、直接CSSを指定
  $(window).mousemove(function(e){
    let x = e.clientX;
    let y = e.clientY;
    $(mousepoint).css({"transform": "translate(" + x + "px," + y + "px)"});
  });

  //リンク(aタグ)に重なったときはahoverというクラスを付与
  $("a").hover(
    function(){$(mousepoint).addClass("ahover")},
    function(){$(mousepoint).removeClass("ahover")}
  )

});//おまじない
