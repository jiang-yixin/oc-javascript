// return false to disable href
<a href="http://www.siteduzero.com" onclick="alert('Vous avez cliqué !'); return false;">Cliquez-moi !</a>

// ---------------------------------------------------------------------------------------------------------------------

<span id="clickme">Cliquez-moi !</span>

<script>
var element = document.getElementById('clickme');

element.addEventListener('click', function() {
  alert("Vous m'avez cliqué !");
}, true or false);
</script>

// addEventListener() has 3 parameters:
//
// Le nom de l'événement (sans les lettres « on ») ;
//
// La fonction à exécuter ;
//
// Un booléen optionnel pour spécifier si l'on souhaite utiliser la phase de capture ou bien celle de bouillonnement. Nous expliquerons ce concept un peu plus tard dans ce chapitre.

// ---------------------------------------------------------------------------------------------------------------------

// objet Event
e.preventDefault(); // On bloque l'action par défaut de cet événement

// Certains événements appliqués à un élément parent peuvent se transmettre aux éléments enfants,
// c'est le cas des événements mouseover, mouseout et mousemove.

// relatedTarget used only in mouseOver and mouseOut