function solution(order) {
    var value = order.toString().match(/[369]/g) ?? []
    return value.length;
}