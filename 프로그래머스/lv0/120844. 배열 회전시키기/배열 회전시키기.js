function solution(numbers, direction) {
    if (direction=='left'){
        numbers.push(numbers[0])
        numbers.shift(numbers[0])
    }else{
        numbers.unshift(numbers[numbers.length-1]);
        numbers.pop(numbers[numbers.length-1])
    }
    return numbers;
}