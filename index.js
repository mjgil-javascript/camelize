module.exports = camelize;

function camelize(str) {
  if (typeof str === 'number') return str.toString();
  if (!str || typeof str !== 'string') return '';
  var lastSpace = -1;
  return str.replace(/[\w\s]/g, function(letter, index) {
    var letter = index !== (lastSpace + 1) ? letter.toLowerCase() : letter.toUpperCase();
    if (index === 0) letter = letter.toLowerCase();
    if (letter === ' ') lastSpace = index;
    return letter;
  }).replace(/\s+/g, '');
};