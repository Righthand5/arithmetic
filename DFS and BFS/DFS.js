/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */   
//位数和
function bitSum(n){
        let res = 0;
        while(n){
            res = res + n%10;
            n=Math.floor(n/10);    
        }
        return res;
}
var movingCount = function(m, n, k) {
 
    
    let res = 0;
    const direction = [
            [-1,0],[1,0],[0,1],[0,-1],
        ]
        let visited={}
        dfs(0,0)
        return res

        
    function dfs(x,y)
    {   
        visited[`${x}-${y}`]=true
        if(bitSum(x)+bitSum(y)>k){
            return;
        }
        ++res;
        for(let directions of direction){
            let newx = directions[0] + x;
            let newy = directions[1] + y;
            if(newx>=0 && newy>=0 && newx<m && newy<n && !visited[`${newx}-${newy}`] ){
                dfs(newx,newy)            
            } 
        }
    }
};
