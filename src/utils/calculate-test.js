import calc from './calculate';

describe('the calculate function', () => {
  it('returns the value as is if no terms', () => {
    expect(calc('50')).to.equal('50');
  });

  it('adds two numbers', () => {
    expect(calc('2+2')).to.equal('4');
  });

  it('adds three numbers', () => {
    expect(calc('22+24+24')).to.equal('70');
  });

  it('handles hanging plus signs', () => {
    expect(calc('22+22+')).to.equal('44');
  });

  it('handles hanging negative signs', () => {
    expect(calc('22+22-')).to.equal('44');
  });

  it('can subtract numbers', () => {
    expect(calc('2-2')).to.equal('0');
  });

  it('can divide numbers', () => {
    expect(calc('2/2')).to.equal('1');
  });

  it('handles negative numbers', () => {
    expect(calc('-1')).to.equal('-1');
  });
});
