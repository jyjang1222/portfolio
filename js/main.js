$(function() {
  // $('html, body').animate({ scrollTop: 0 }, 'slow');

  $('.btn_header').click(function() {
    $('#header, .container').toggleClass('header_off')
  })

  $(window).resize(function() {
    var win_wid = $(window).width();

    if(win_wid <= 1600) {
      $('#header, .container').addClass('header_off')
    }
  })

  $(window).scroll(function() {
    var per = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    var res = Math.floor(per);

    $('.scrollTop').html(res + '<i>%</i>')
  })

  var progress = ['90', '90', '60', '70', '50', '70']
  
  for(var i = 1; i <= 6; i++) {
    $('.bar' + i).rProgressbar({
      percentage: progress[i - 1],
      fillBackgroundColor:'#0AF',
      backgroundColor:'transparent',
      borderRadius:'0 15px 15px 0',
      height:'22px',
      width:'244px'
    })
  }

  $('.btn_proj').click(function() {
    $(this).toggleClass('proj_on')
  }) //프로젝트 버튼 클릭
  $('.btn_proj').mouseleave(function() {
    $(this).removeClass('proj_on')
  }) //프로젝트 마우스 떠남
  $('.btn_proj li:not(.current_proj)').not('.close_proj').click(function() {
    var proj_title = $(this).text();
    var proj_idx = $(this).index();

    $('.current_proj').text(proj_title)
    $('.projects>div').hide()
    $('.projects>div').eq(proj_idx).css('display', 'flex')
    $('.close_proj').text('포트폴리오')
  })
  $('.close_proj').click(function() {
    $('.current_proj').text('포트폴리오')
    $(this).text('닫기')
    $('.projects>div').hide()
    $('.projects>div').eq(0).css('display', 'flex')
  }) //프로젝트 리스트 클릭

  $('.tlt').textillate(); //h1 텍스트 플러그인

  $('.util .top').click(function() {
    $('html').stop().animate({scrollTop: 0}, 800);
  }) //TOP클릭 이벤트

  $('#gnb li').click(function() {
    var menu = [0, $('#profile').offset().top, $('#skill').offset().top, $('#project').offset().top, $('#work').offset().top, $('#contact').offset().top];

    var menu_idx = $(this).index();
    
    $('html').stop().animate({scrollTop: menu[menu_idx]}, 800);
  })//GNB클릭 이벤트
}) //ready
