//方法一，暴力双for
var findRepeatNumber = function(nums) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j])
            return nums[i];
        }
    }
    return null;
};
/*方法二 set，因为set会自动忽略重复的元素，遍历数组中的元素，若长度未增加，则删除当前元素
添加知识点：
for(let i in nums){} i 也是数组的序号
for(let i of nums){} i代表的是数组里具体的其中一个元素
*/
var findRepeatNumber_TWO = function(nums) {
    let s = new Set();
    for(let i of nums){
        let curLenth = s.size;
        s.add(i);
        if(s.size === curLenth)return i;
    }
}
/*方法三：返回一个哈希表*/
var findRepeatNumber_HaxiMap = function(nums){
    const map = {};
    for(const num of nums){
        if(!map[num]){
            map[num] = true;
            continue;
        }
        return num;
    }
}
/*方法四
先排序，相邻相同就返回
*/
var findRepeatNumber = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length;){
        if(nums[i++] == nums[i]) return nums[i];
    }
    return null;
};
