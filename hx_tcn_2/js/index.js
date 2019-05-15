"use strict";

$(function () {
  /*相关课程 轮播图*/
  $(function () {
    // 淡出和淡入
    function play(from, to) {
      $("#imgs img").eq(from).fadeOut(300);
      $("#imgs img").eq(to).fadeIn(300);

      // 指示器跟随图片播放
      $("#indicator span").eq(to).addClass("sel").siblings().removeClass("sel");
    }
    // 自动播放
    var currentIndex = 0; // 表示当前正在显示的图片的下标
    var timerId;
    function autoPlay() {
      timerId = setInterval(function () {
        play(currentIndex, (currentIndex + 1) % 3); // 3张图片
        currentIndex++;
        currentIndex = currentIndex == 3 ? 0 : currentIndex;
      }, 2000);
    }
    autoPlay();

    /*注册一些事件*/
    function addEvent() {
      $("#lbt").mouseenter(function () {
        clearTimeout(timerId);
      }).mouseleave(function () {
        autoPlay();
      });
    }
    addEvent();

    // 指示器的点击事件
    $("#indicator span").mouseenter(function () {
      $(this).addClass("sel").siblings().removeClass("sel");
      var index = $(this).index(); // 定义一个变量把当前点击的span存储起来
      play(currentIndex, index); // 从自动播放的下标到点击的下标
      currentIndex = index; // 让自动播放从点击的下标开始播放
    });
  });

  /*面授列表*/
  $(".tcn-l-ms .tcn-ms-item").each(function (i, ele) {
    if ($(this).has("img").length) {
      // 有左边图片的时候
      $(this).children(".tcn-ms-nr").width("570px");
    } else {
      // 没有左边图片的时候
    }
  });
});