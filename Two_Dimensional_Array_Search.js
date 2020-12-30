/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//方法一无脑for
var findNumberIn2DArray = function(matrix, target) {
    for(let i = 0; i<matrix.length;i++){
        for(let j = 0;j<matrix[i].length;j++){
            if(target === matrix[i][j]){
                return  true;
            }
            console.log(matrix[i][j]);
        }
    }
  return false;
};
findNumberIn2DArray(
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
],5)
//
