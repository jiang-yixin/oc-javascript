var inputNumber = prompt('Enter a number');

inputNumber = parseInt(inputNumber, 10);

function getLetterFromNumber(number) {
  switch (number) {
    case 1:
      return 'un';
    case 2:
      return 'deux';
    case 3:
      return 'trois';
    case 4:
      return 'quatre';
    case 5:
      return 'cinq';
    case 6:
      return 'six';
    case 7:
      return 'sept';
    case 8:
      return 'huit';
    case 9:
      return 'neuf';
    case 0:
      return '';
    default:
      return '';
  }
}

if (!isNaN(inputNumber)) {
  if (0< inputNumber && inputNumber < 999) {
    var unites = inputNumber % 10,
    dizaines = inputNumber >= 10 ? ( inputNumber % 100 - unites ) / 10 : 0,
    centaines = inputNumber >= 100 ? ( inputNumber - dizaines * 10 - unites ) / 100 : 0;

    console.log(inputNumber + ',' + centaines + ',' + dizaines + ',' + unites);

    var output = getLetterFromNumber(unites);
    output = dizaines > 0 ? getLetterFromNumber(dizaines) + '-' + output : output;
    output = centaines > 0 ? getLetterFromNumber(centaines) + '-cent-' + output : output;

    alert(output);
  }
}