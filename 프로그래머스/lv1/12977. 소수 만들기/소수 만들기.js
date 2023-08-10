function solution(nums) {
    var l1 = [];
    
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            for (let k=j+1; k<nums.length; k++){
                l1.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    let cnt = 0;
    for (let n=0; n<l1.length; n++){
        let check = 0;
        const tmp=l1[n]
        for (let m=2; m<tmp; m++){
            if (tmp%m==0){
                check=1;
                break;
            }
        }
        if (check==0){
            cnt++;
        }
    }
    
    return cnt;
}