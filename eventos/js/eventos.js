$(function() {
  $('img').hover(function() {
    $('.msj').fadeIn(1000);
  }, function() {
    $('.msj').fadeOut(1000);
  });

  $('img').on('click', function() {
    $(this).attr('src', 'img/img2.jpg');
    $('.msj').text('Te asuste verdad xD');
  });
});
