function solution(my_string, letter) {
    let reg=RegExp(letter, 'g');
    return my_string.replace(reg, '');
}