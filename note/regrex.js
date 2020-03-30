// PHP : regex POSIX (deprecated from PHP 5.3) et les regex PCRE
if (/Raclette/i.test('Je mangerais bien une raclette savoyarde !')) {
  alert('Ça semble parler de raclette');
} else {
  alert('Pas de raclette à l\'horizon');
}

var nickname = "Sébastien";
var myRegex = new RegExp("Mon prénom est " + nickname, "i");

// ---------------------------------------------------------------------------------------------------------------------

// métacaractères : ! ^ $ ( ) [ ] { } ? + * . / \ |

// ---------------------------------------------------------------------------------------------------------------------

// non-greedy
var html = '<a href="www.mon-adresse.be"><strong class="web">Mon site</strong></a>';

/<a href="(.+?)">/.exec(html);

alert(RegExp.$1);

// ---------------------------------------------------------------------------------------------------------------------

// option g, find more times
var sentence = 'Il s\'appelle Sébastien. Sébastien écrit un tutoriel.';

var result = sentence.replace(/Sébastien/g, 'Johann');

alert(result); // Il s'appelle Johann. Johann écrit un tutoriel.

// ---------------------------------------------------------------------------------------------------------------------

// La méthode search() s'utilise comme la méthode indexOf(), sauf que le paramètre est une regex.
