function solution(s) {
    var answer = '';
    var sarr = s.toLowerCase().split(' ').map((v)=> v.charAt(0).toUpperCase()+ v.substring(1));
    return sarr.join(' ');
}