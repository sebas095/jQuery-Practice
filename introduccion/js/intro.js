$(document).ready(function() {
  // selectores
  // .clase
  // #id
  // elemento: h1, p, div, li, ...

  // addClass, removeClass, toggleClass, attr
  //alert($('h3').css('color'));
  //$('h3').css('color', '#1aa673');
  var id = '#' + $('.prueba').attr('id');
  $(id).css('background-color', '#FF3');
  // alert($('h3').css('color'));

  // filtros
  // :eq(), :lt(), :gt(), :has()
  $('li:nth-child(odd)').css('color', 'blue');
  $('li:gt(2)').css('color', 'orange');
  $('li:has(h4)').css('color', 'red');

  // text, html
  //alert($('h3').text());
  //$('h3').text("Modificando texto desde jQuery");
  //$('h3').html("Creando html desde <i>jQuery</i>");
});
