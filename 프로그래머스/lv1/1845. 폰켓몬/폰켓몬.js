function solution(nums) {
    var answer = [];
    answer.push(nums[0])
    for (let i=0; i< nums.length; i++){
        if (!(answer.includes(nums[i]))){
            answer.push(nums[i])
        }
        if (answer.length == nums.length/2) break;
    }
    return answer.length;
}