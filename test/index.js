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

  it('123    coM = 123Com (handles numbers)', function() {
    expect(camelize('123    coM')).toEqual('123Com');
  })

  it('Ma3235M = ma3235m (handles numbers)', function() {
    expect(camelize('Ma3235M')).toEqual('ma3235m');
  })

  it('32342 = 32342 (handles numbers)', function() {
    expect(camelize('32342')).toEqual('32342');
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