import generateKey from './generate-key';

describe('Generate keys function', () => {
  it('creates an object', () => {
    expect(generateKey('1')).be.a('object');
  });

  it('sets the label', () => {
    expect(generateKey('1').label).to.equal('1');
  });

  it('generates an action function', () => {
    expect(generateKey('1').action).to.be.a('function');
  });
});
