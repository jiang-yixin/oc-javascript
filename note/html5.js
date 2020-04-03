// html5: <video>, <audio>, <canvas>
// Le HTML5 est la nouvelle mouture du langage de balisage HTML. Il a été conçu afin d'améliorer l'accessibilité et
// la sémantique et augmenter l'interactivité avec l'utilisateur.
// Cette nouvelle version n'est pas qu'un amas de nouvelles balises.
// Elle apporte aussi de nouvelles technologies utilisables au sein du JavaScript.
// Parmi les nouvelles API apportées par le HTML5, nous en étudierons quatre : Canvas, Drag & Drop, File et Audio/Video.

// ---------------------------------------------------------------------------------------------------------------------

<audio id="audioPlayer" src="hype_home.mp3"></audio>

<audio id="audioPlayer">
  <source src="hype_home.ogg">
  <source src="hype_home.mp3">
</audio>

// ---------------------------------------------------------------------------------------------------------------------

// canvas

// ---------------------------------------------------------------------------------------------------------------------

// File

<input id="file" type="file" multiple />

// ---------------------------------------------------------------------------------------------------------------------

// Drag & Drop

// Le Drag & Drop est une technologie conçue pour permettre un déplacement natif d'éléments en tous genres (texte, fichiers, etc.).

// Une action de drag & drop nécessite généralement un transfert de données entre l'élément émetteur et l'élément récepteur,
// cela se fait généralement par le biais de l'objet dataTransfer.

// Il est parfaitement possible de déplacer un élément depuis n'importe quel logiciel de votre système d'exploitation
// (par exemple, l'explorateur de fichiers) jusqu'à une zone d'une page Web prévue à cet effet.