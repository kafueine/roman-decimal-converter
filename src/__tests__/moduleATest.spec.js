const { romanToDecimal } = require('../moduleA');

describe('Roman Numeral to Decimal Converter', () => {
  
  //case 1 - Dev A
  it('When numeral is XII, it should return 12', () => {
    // Arrange
    const roman = 'XII';

    // Act
    const result = romanToDecimal(roman);

    // Assert
    expect(result).toEqual(12);
  });

  //case 2 (example: for dev b, make test case on invalid inputs like numbers)

  });