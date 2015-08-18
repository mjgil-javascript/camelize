var camelize = require('..');


var expect = require('expect');

describe('should make things camelCase', function() {
  it('malcom = malcom', function() {
    expect(camelize('malcom')).toEqual('malcom');
  })

  // it('Malcom = malcom', function() {
  //   assert('malcom' === camelize('Malcom'));
  // })

  // it('MaLcoM = malcom', function() {
  //   assert('malcom' === camelize('MaLcoM'));
  // })
});

// describe('should handle unicode things for user', function() {
//   // it('222', function() {
//   //   assert(2 === 3);
//   // })
// })