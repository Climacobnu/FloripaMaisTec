const number = 1;

let result = '';


if (number > 5) {

  result = 'Maior que 5';

} else if (number > 2) {

  result = 'Maior que 2';

} else {

  result = 'Menor ou igual a 2';

}


switch (number) {

  case 1:

    result += ' - Um';

    break;

  case 2:

    result += ' - Dois';

    break;

  case 3:

    result += ' - Três';

    break;

  default:

    result += ' - Outro número';

}