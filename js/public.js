/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.6&appId=640377126095413";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
  if (!$('.mbla > div.nh').length)
    $('.mbla > div').eq (0).addClass ('nh2');

  if ($(window).width () < 960) {
    $('.mbla').click (function () {
      $(this).addClass ('show');
      return false;
    });
    $('.mbla a').click (function () {
      if (!$(this).parent ().hasClass ('nh') && !$(this).parent ().hasClass ('nh2'))
        window.location.assign ($(this).attr ('href'));
    });
  }
  $(window).scroll (function () {
    var t = $(this).scrollTop ();
    if (t > 10) $('#top').addClass ('show');
    else $('#top').removeClass ('show');
  });

  $('#top').click (function () {
    $('body').animate ({ scrollTop: 0 }, 'slow');
  });

  $('.typbox, .uu').imgLiquid ({verticalAlign: 'center'});
  // $('.typbox').css ({'border': '1px solid rgba(255, 0, 0, .3)'})
});