function findNonNum(str) {
  let i = 0;
  while (str[i] !== undefined && str[i].match(/[\-\+\*\/]/) === null) {
    i += 1;
  }
  return i;
}

function factor(input, op, fn) {
  const srt = input.charAt(0) === '-' ? 1 : 0;
  const opIndex = input.indexOf(op, srt);
  if (opIndex === -1) {
    return input;
  }
  const termEnd = findNonNum(input.slice(opIndex + 1, input.length)) + opIndex + 1;
  const curTerm = input.slice(0, termEnd < 0 ? input.length : termEnd);
  const split = curTerm.split(op);
  const calculated = fn(Number(split[0]), Number(split[1]));
  return factor(calculated + input.slice(curTerm.length, input.length), op, fn);
}

export default (input) => {
  const nosign = input.replace(/\$/g, '');
  const plus = factor(nosign, '+', (a, b) => a + b);
  const sub = factor(plus, '-', (a, b) => a - b);
  const division = factor(sub, '÷', (a, b) => a / (b === 0 ? 1 : b));
  const multi = factor(division, 'x', (a, b) => a * b);
  return multi;
};
