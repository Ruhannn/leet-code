/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        if (x < 0) return false;

    const inputX = x;
    let revX = 0;

    while (x > 0) {
        revX += x % 10;
        x = Math.floor(x / 10);

        if (x > 0) revX *= 10
    }

    return revX === inputX;
};