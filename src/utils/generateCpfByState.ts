export const generateCpfByState = (state?: string): string => {
  const stateCodes: Record<string, string> = {
    AC: '12',
    AL: '27',
    AP: '16',
    AM: '13',
    BA: '05',
    CE: '23',
    DF: '07',
    ES: '32',
    GO: '29',
    MA: '21',
    MT: '51',
    MS: '50',
    MG: '31',
    PA: '15',
    PB: '25',
    PR: '41',
    PE: '26',
    PI: '22',
    RJ: '33',
    RN: '24',
    RS: '43',
    RO: '11',
    RR: '14',
    SC: '42',
    SP: '35',
    SE: '28',
    TO: '17',
  };

  if (!state) {
    const states = Object.keys(stateCodes);
    state = states[Math.floor(Math.random() * states.length)];
  }

  const stateCode = stateCodes[state.toUpperCase()];

  if (!stateCode) {
    throw new Error('Invalid state code');
  }

  const randomDigits = () => Math.floor(Math.random() * 10).toString();
  const cpfDigits = Array.from({ length: 9 }, randomDigits);

  const firstVerDigit = () => {
    const weightedSum = cpfDigits.reduce(
      (sum, digit, index) => sum + parseInt(digit) * (10 - index),
      0
    );
    const remainder = weightedSum % 11;
    return remainder < 2 ? '0' : (11 - remainder).toString();
  };

  const secondVerDigit = () => {
    const weightedSum = cpfDigits
      .concat(firstVerDigit())
      .reduce((sum, digit, index) => sum + parseInt(digit) * (11 - index), 0);
    const remainder = weightedSum % 11;
    return remainder < 2 ? '0' : (11 - remainder).toString();
  };

  const cpf =
    cpfDigits.join('') + firstVerDigit() + secondVerDigit() + stateCode;

  return (
    cpf.slice(0, 3) +
    '.' +
    cpf.slice(3, 6) +
    '.' +
    cpf.slice(6, 9) +
    '-' +
    cpf.slice(9, 11)
  );
};
