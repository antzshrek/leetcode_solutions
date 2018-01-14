/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n){
  for (let x = 1; x <= n; x *= 2) {
     
    if (x == n){
        return true
    }else{
        return false
    }
  }
    
};

//OR

var isPowerOfTwo = function(n){
    return (n != 0)  && ((n & (n - 1)) == 0);
}