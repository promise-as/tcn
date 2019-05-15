$(function () {
  /*相关课程 轮播图*/
  $(".carousel").slide({
    mainCell: ".bd ul",
    autoPlay: true
  });

  /*面授列表*/
  $(".tcn-l-ms .tcn-ms-item").each(function (i, ele) {
    if($(this).has("img").length){
      // 有左边图片的时候
      $(this).children(".tcn-ms-nr").width("570px");
    }else {
      // 没有左边图片的时候
    }
  });
});