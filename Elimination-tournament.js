/*
In this challenge you will be given an array 
(or another language-appropriate collection) representing contestant ranks. 
You must eliminate contestant in series of rounds comparing consecutive 
pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is 
eliminated while the highest proceeds to the next round. 
This goes on until one contestant only is left. 
If the number of contestants is odd, the last one of 
the current array becomes the first of the next round.

At the end of the competition, 
return the results of all the rounds in the form of array of arrays.

Example:
  input = [9, 5, 4, 7, 6, 3, 8, 2];
  output = [
    [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
    [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
    [9, 8],                    // results of 9 vs 7 and 6 vs 8
    [9]                        // results of 9 vs 8
  ];

Notes:
  Array length will alway be >= 2 and <= 100
  Elements of the array will always be >=1 and <= 100
  Input must not be altered.
*/


// Solution

const tourney = arr => {
  if (arr.length === 1)
    return [ arr ];
  
  let next = arr.length % 2 ? arr.slice(-1) : [];

  for (let i = 0; i < arr.length - 1; i += 2)
    next.push(Math.max(arr[i], arr[i + 1]));
  
  return [ arr ].concat(tourney(next));
}

// or

const tournament = array => {
  let finalResult = [array],
    roundResult = [...array],
    currentlyTracking = [];

  while (finalResult.slice(-1)[0].length > 1) {
    if (roundResult.length % 2 != 0) {
      currentlyTracking.unshift(roundResult.pop());
    }

    if (roundResult.length === 0) {
      finalResult.push(currentlyTracking.slice(0));
      roundResult = currentlyTracking.slice(0);

      currentlyTracking = [];
    
    } else {
      let doingChanges = currentlyTracking.push(
        Math.max(...roundResult.splice(0, 2))
      );
    }
  }
  return finalResult;
};