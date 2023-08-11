function solution(answers) {
    var answer = [];
    var one = [1, 2, 3, 4, 5];
    var two = [2, 1, 2, 3, 2, 4, 2, 5];
    var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var cnt_one = 0, cnt_two = 0, cnt_three = 0;
    for (let i = 0; i<answers.length; i++) {
        if (answers[i] == one[i % one.length]) cnt_one++;
        if (answers[i] == two[i % two.length]) cnt_two++;
        if (answers[i] == three[i % three.length]) cnt_three++;
    }
    if (cnt_one > cnt_two){
        if (cnt_one > cnt_three) {answer.push(1);}
        else if (cnt_one < cnt_three) {answer.push(3);}
        else {answer.push(1); answer.push(3);}
    }
    else if (cnt_two > cnt_one){
        if (cnt_two > cnt_three) {answer.push(2);}
        else if (cnt_two < cnt_three) {answer.push(3);}
        else {answer.push(2); answer.push(3);}
    }
    else {
        if (cnt_one > cnt_three) {answer.push(1); answer.push(2);}
        else if (cnt_one < cnt_three) {answer.push(3);}
        else {answer.push(1); answer.push(2); answer.push(3);}
    }
    console.log(cnt_one, cnt_two, cnt_three)
    return answer;
}