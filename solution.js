/*
There are n stairs, a person standing at the bottom wants to reach the top. 
The person can climb either 1 stair or 2 stairs at a time. 
Count the number of ways, the person can reach the top.
                                  
                                 __ top
                              __|
                           __|                        
                   base __|
*/

/****************** Solution with Dynamic Programming **********************/

function numWaysDynamic(n){
  const numbers = [1,1]
  // if n == 0 or n == 1 
  if (n<2) { return numbers[0]}
  
  // for loop start:2 end:n+1
  for (let i = 2; i < n+1; i++) {
    numbers[i] = numbers[i-2] + numbers[i-1]
  }  
  
  return numbers[n]
}

// driver code
console.log(numWaysDynamic(6));

