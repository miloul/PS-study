function solution(s) {
    var answer = 0;
    let s1 = [...s]; //배열로만들고
    for (let i=0; i<s1.length; i++){
        let check = 0;
        var stack = [];
        const a = s1.shift();
        s1.push(a); //왼쪽으로 회전
        for (let word of s1){ //올바른 괄호 판단
            if (word === '(' || word ==='[' || word === '{') {
                stack.push(word);
            }
            else {
                const pop1 = stack.pop();
                //console.log(pop1, word)
                if (word === ')' && pop1 === '(') continue;
                else if (word === ']' && pop1 === '[') continue;
                else if (word === '}' && pop1 === '{') continue;
                else check = 1; break;
            }
        }
        //console.log(s1, stack, check)
        if (check == 0 && stack.length == 0) answer++;
    }
    return answer;
}