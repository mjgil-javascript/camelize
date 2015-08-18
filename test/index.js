var camelize = require('..');


var expect = require('expect');

describe('should make things camelCase', function() {
  it('malcom = malcom', function() {
    expect(camelize('malcom')).toEqual('malcom');
  })

  it('Malcom = malcom', function() {
    expect(camelize('Malcom')).toEqual('malcom');
  })

  it('MaLcoM = malcom', function() {
    expect(camelize('MaLcoM')).toEqual('malcom');
  })

  it('MaL coM = malCom (handles spaces)', function() {
    expect(camelize('MaL coM')).toEqual('malCom');
  })

  it('Mal    coM = malCom (handles tabs)', function() {
    expect(camelize('MaL    coM')).toEqual('malCom');
  })
});

describe('should handle non-strings', function() {
  it('[] = ""', function() {
    expect(camelize([])).toEqual('');
  })

  it('{} = ""', function() {
    expect(camelize({})).toEqual('');
  })

  // it('MaLcoM = malcom', function() {
  //   expect(camelize('MaLcoM')).toEqual('malcom');
  // })
});

// describe('should handle unicode things for user', function() {
//   // it('222', function() {
//   //   assert(2 === 3);
//   // })
// })