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
  it('When numeral is 10, it should return throw an error', () => {
    // Arrange
    const roman = '10';

    // Act
    const result = romanToDecimal(roman);

    // Assert
    expect(result).toEqual('Invalid input: Input should be roman numerals.');
  });


  //case 3 (example: for dev a, make test case on lowercase)
  it('When the numeral is in lowercase, it should still pass.', () => {
    // Arrange
    const roman = 'm'

    // Act
    const result = romanToDecimal(roman)

    // Assert 
    expect(result).toEqual(1000)
  })

  it('should throw an error for invalid repetition like "IIII"', () => {
    expect(() => romanToDecimal('VV')).toThrow('Invalid repetition');
  });

});