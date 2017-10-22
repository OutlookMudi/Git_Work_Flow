/**
     * The function checks the difference and ratio of each element
     * in the provided array. If at the end of the check the 'val' is
     * 'Arithmetic', it prints that. Same for the others. If the length of the
     * array is 0 it prints 0
     */
    const aritGeo = (arr) => 
    {
      let val;      

      if (arr.length == 0) return 0; // case of array is empty
      if (typeof arr === 'boolean') return 'this is boolean'; //case of boolean inputs
      if (typeof arr === 'string') return 'string input is invalid'; // case of string inputs
      if (arr === Infinity) val = 'undefined'; // case of undefined input       
      if (arr%2 == 0) val = 'even integer'; // case of even integer input
      if (arr%2 == 1) val = 'odd integer';  // case of odd integer input
      
      

     




      // For loop that loops through the array and performs the mathematical 
      // calculations on the values of the array
      for (let i = 0; i < arr.length - 2; i++) 
      {
        if (arr[i] - arr[i + 1] == arr[i + 1] - arr[i + 2]) 
          val = 'Arithmetic';
        else if (arr[i] / arr[i + 1] == arr[i + 1] / arr[i + 2]) 
          val = 'Geometric';
        else val = -1;
      }

      return val;
    }

    module.exports = aritGeo;