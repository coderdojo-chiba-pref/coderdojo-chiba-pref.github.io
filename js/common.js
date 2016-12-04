$(function(){
  $('.home-dojo').click(function(){
    var url = $(this).data('href');
    if(url != "") location.href = url;
  });

  $('.match-height div').matchHeight();

});