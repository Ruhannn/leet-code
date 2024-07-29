/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    const ns = x.toString()
    let r = ns.split('').reverse().join('');
    let num = parseInt(r)
    if (num > 2147483647)
        return 0
    return r.endsWith("-") ? -Math.abs(num) : num
};