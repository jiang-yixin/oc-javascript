// les propriétés CSS de l'attribut style sont prioritaires sur les propriétés d'une feuille de style
<style>
div {
  color: red;
}
</style>

<div style="color:blue;">I'm blue ! DABADIDABADA !</div>

// ---------------------------------------------------------------------------------------------------------------------

// Parce que notre code va lire uniquement les valeurs contenues dans la propriété style.
// C'est-à-dire, rien du tout dans notre exemple, car nous avons modifié les styles CSS depuis une feuille de style,
// et non pas depuis l'attribut style.

// ---------------------------------------------------------------------------------------------------------------------

// getComputedStyle