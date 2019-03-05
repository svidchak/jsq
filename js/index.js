const a = parseFloat(prompt('enter A'));
const b = parseFloat(prompt('enter B'));
const c = parseFloat(prompt('enter C'));
const d = calcDiscr(a, b, c);
const result = solveQard(a, b, c);
alert(result); 
function solveQard(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d === 0) {
        const x = -b / (2 * a);
        return 'D = 0: X = ' + x;
    }
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'X1 = ' + x1 + ' , X2 = ' + x2;
    } else if (d < 0) {
        return 'D < 0';
    }
}
function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}