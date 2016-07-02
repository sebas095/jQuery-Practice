$(function() {
  var imagenes = [];
  var indice = 0;

  $.getJSON('./data.json', function(json) {
    var datos = json.imagenes;
    for (var i in datos) {
      var imagen = '<img class="cat" src=' + datos[i].img + '>';
      imagen += '<center><div class="msj"' + '>' + datos[i].descripcion + '</div></center>';
      imagenes.push(imagen);
    }
    
    mostrarImg();
    $('#izq').click(moverIzq);
    $('#der').click(moverDer);
  });

  function mostrarMsj() {
    $('.msj').fadeIn();
  }

  function ocultarMsj() {
    $('.msj').fadeOut();
  }

  function moverDer() {
    indice++;
    if (indice === imagenes.length) {
      indice = 0;
    }
    mostrarImg();
  }

  function moverIzq() {
    indice--;
    if (indice < 0) {
      indice = imagenes.length - 1;
    }
    mostrarImg();
  }

  function mostrarImg() {
    $('#imgs').html(imagenes[indice]);
    $('.cat').hover(mostrarMsj, ocultarMsj);
  }
});
