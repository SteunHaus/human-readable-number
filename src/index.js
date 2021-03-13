const { strikethrough } = require("colors");

module.exports = function toReadable (number) {
  let numberNames = ['', ' one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'];
  let numberAdditionalNames = ['twenty', 'thirty'];
  let str = String(number);
  let result = '';

  if (str.length == 4) {
    result = numberNames[Math.trunc(number/1000)] + ' thousands';
    number = number%1000;
    str = String(number);
  }

  if (str.length == 3) {
    result = result + ' ' + numberNames[Math.trunc(number/100)] + ' hundred';
    number = number%100;
    str = String(number);
  }

  if (number == 0 && result == '') return 'zero';
  else if (number < 14) result = result + ' ' + numberNames[number];
  else if (number == 15) result = result + ' fifteen';
  else if (number == 18) result = result + ' eighteen';
  else if (number < 20) result = result + ' ' + numberNames[(number%10)] + 'teen';
  else if (number < 30) result = result + ' ' + numberAdditionalNames[0] + ' ' + numberNames[(number%10)];
  else if (number < 40) result = result + ' ' + numberAdditionalNames[1] + ' ' + numberNames[(number%10)];
  else if (number < 50) result = result + ' ' + 'forty ' + numberNames[(number%10)];
  else if (number < 60) result = result + ' ' + 'fifty ' + numberNames[(number%10)];
  else if (number < 80) result = result + ' ' + numberNames[Math.trunc(number/10)] + 'ty ' + numberNames[(number%10)];
  else if (number < 90) result = result + ' ' + numberNames[Math.trunc(number/10)] + 'y ' + numberNames[(number%10)];
  else if (number < 100) result = result + ' ' + numberNames[Math.trunc(number/10)] + 'ty ' + numberNames[(number%10)];

  if (result[0] == ' ') result = result.substr(1);
  if (result[0] == ' ') result = result.substr(1);
  if (result[result.length-1] == ' ') result = result.substr(0, result.length-1);
  result = result.replace('  ', ' ');

  return result;
}
