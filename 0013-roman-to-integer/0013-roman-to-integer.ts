const romans: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s: string): number {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] < romans[s[i + 1]]) {
            total -= romans[s[i]];
        } else {
            total += romans[s[i]];
        }
    }
    return total;
}

console.log("should be 3:", romanToInt("III"))
console.log("should be 58:", romanToInt("LVIII"))
console.log("should be 1994:", romanToInt("MCMXCIV"));
