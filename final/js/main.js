/**
 * Inserta mis frases favoritas en el HTML
 * Las frases se montan en el elemento de ID frases-app
 */
(function () {
  var misFrases = [
    "It's a rare person who wants to hear what he doesn't want to hear. – Dick Cavett",
    "A mind troubled by doubt cannot focus on the course to victory. – Arthur Golden, Memoirs of a Geisha",
    "Have you heard that it was good to gain the day? I also say it is good to fall, battles are lost in the same spirit in which they are won. – Walt Whitman ",
    "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' I found it!) but 'That's funny ...' – Isaac Asimov ",
    "Behind the phony tinsel of Hollywood lies the real tinsel. – Oscar Levant"
  ];
  var frasesElement = document.getElementById('frases-app');
  var nextButton = document.getElementById('frases-button');
  var fraseIndex = 0;

  // Ejecutamos cambiarFrase para mostrar la primer frase
  cambiarFrase();

  // Agregamos un escuchador del click al botón para mostrar otra frase
  nextButton.addEventListener('click', cambiarFrase)

  function cambiarFrase () {
    if (fraseIndex < (misFrases.length - 1)) {
      fraseIndex += 1;
    } else {
      fraseIndex = 0;
    }

    frasesElement.textContent = misFrases[fraseIndex];
  }
})()
