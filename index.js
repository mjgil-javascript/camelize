module.exports = camelize;

function camelize(str) {
  if (typeof str === 'number') return str.toString();
  if (!str || typeof str !== 'string') return '';
  var lastSpace = -1;
  var lastChar = '';
  var len = str.length;
  // console.log('len', len);
  var charArray = [];
  for (var index = 0; index < len; index++) {
    var letter = str.charAt(index);
    var lastCharWasSpace = index === (lastSpace + 1)
    var lastCharWasLetter = /\w/.test(lastChar);
    var letter = !(lastCharWasSpace && lastCharWasLetter) ? letter.toLowerCase() : letter.toUpperCase();
    if (index === 0) letter = letter.toLowerCase();
    if (/\s/.test(letter)) {
      lastSpace = index;
    }
    else {
      // console.log('update lastChar', letter);
      lastChar = letter;
      charArray.push(lastChar);
    }
  }
  return charArray.join('');
};