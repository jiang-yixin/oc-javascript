// XMLHttpRequest , xhr

// ---------------------------------------------------------------------------------------------------------------------


// version 2 de XHR autoriser les requêtes cross-domain
Access-Control-Allow-Origin: *

var xhr = new XMLHttpRequest();

xhr.open('POST', 'script.php');

var form = new FormData();
form.append('champ1', 'valeur1');
form.append('champ2', 'valeur2');

xhr.send(form);

