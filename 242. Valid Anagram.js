/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = Array.from(s).sort().join('');
    t = Array.from(t).sort().join('');
    if (s == t){
        return true
    }else{
        return false
    }
    
};