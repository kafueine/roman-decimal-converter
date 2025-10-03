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
    for(let i = 0; i < roman.length; i++)
    {
      const current = romanNum[roman[i]];
      const next = romanNum[roman[i + 1]];

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
