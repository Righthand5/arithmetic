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
        [1,0],[0,1],
    ]
    const queue = [[0,0]]
    const visited = {"0-0":true}
    while(queue.length){
        const [x,y] = queue.shift();//不小心写为const {x,y} = queue.shift()导致错误
        console.log([x,y])
        if(bitSum(x)+bitSum(y)>k){
            continue;    
        }
        ++res
        for(let directions of direction){
            let newx = directions[0] + x;
            let newy = directions[1] + y;
            if(newx>=0 && newy>=0 && newx<m && newy<n && !visited[`${newx}-${newy}`])                {
                queue.push([newx,newy]);
                visited[`${newx}-${newy}`] = true;
            }
        }
    }
    return res;
};
