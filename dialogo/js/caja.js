$(function() {
  $('#enlacemostrar').click(function(e) {
    $('#cf').css({
      display: 'block',
      left: (e.pageX + 15) + 'px',
      top: (e.pageY + 15) + 'px'
    });
  });

  $('#enlaceocultar').click(function() {
    $('#cf').css('display', 'none');
  });
});
