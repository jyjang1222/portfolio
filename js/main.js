$(function() {
  $('.btn_header').click(function() {
    $('#header, .container').toggleClass('header_off')
  })

  var progress = ['90', '90', '60', '70', '50' , '70']
  
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
}) //ready
