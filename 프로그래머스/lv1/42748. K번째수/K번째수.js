function solution(array, commands) {
    var answer = [];
    for (let i = 0; i<commands.length; i++){
        var tmp = array.slice(commands[i][0]-1, commands[i][1])
        tmp.sort((a,b)=>a-b)
        var k = tmp[commands[i][2]-1]
        answer.push(k)
    }
    return answer;
}