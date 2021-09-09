$(function() {
  $('.btn_header').click(function() {
    $('#header, .container').toggleClass('header_off')
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
    $('.close_proj').text('웹프로젝트')
  })
  $('.close_proj').click(function() {
    $('.current_proj').text('웹프로젝트')
    $(this).text('닫기')
    $('.projects>div').hide()
    $('.projects>div').eq(0).css('display', 'flex')
  }) //프로젝트 리스트 클릭

  $('.tlt').textillate();

}) //ready
