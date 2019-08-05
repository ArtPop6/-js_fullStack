var arr = [1, 2, 1, 1, '1'];
// es6 Map
function unique(arr) {
    // return [...new Set(arr)];
    const seen = new Map();
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1));
}
