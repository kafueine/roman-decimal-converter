const functions = {

//to be implemented by dev b

   romanToDecimal: (roman) => {
    if (typeof roman !== 'string')
    {
        throw new Error('Invalid input: Input should be a string.')
    }

    const romanNum ={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // dev A create a block of code to handle numbers
    let total = 0;
    roman = roman.toUpperCase()
    for(let i = 0; i < roman.length; i++)
    {
      if (!romanNum.hasOwnProperty(roman[i])){
        return 'Invalid input: Input should be roman numerals.'
      }


      const current = romanNum[roman[i]];
      const next = romanNum[roman[i + 1]];
      
      if (['V', 'L', 'D'].includes(roman[i]) && current == next){
        throw new Error("Invalid repetition")
      }
      if (roman.slice(i, i+4) == "IIII"){
        throw new Error("Invalid repetition")
      }

      if(next && current < next)
      {
        total -= current;
      }
      else 
      {
        total += current;
      }
    }
    return total;
   }
};

module.exports = functions;