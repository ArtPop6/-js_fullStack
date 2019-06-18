var Bounce = function (salary) {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function () {
    return this.strategy.calculate(this.salary);
}
var PerfomanceS = function () {
    
}
PerfomanceS.prototype.calculate = function (salary) {
    return salary * 5;
}
var PerfomanceA = function () {
    
}
PerfomanceA.prototype.calculate = function (salary) {
    return salary * 4;
}
var PerfomanceB = function () {
    
}
PerfomanceB.prototype.calculate = function (salary) {
    return salary * 3;
}
var bounce = new Bounce(20000);
bounce.setStrategy(new PerfomanceS());
console.log(bounce.getBounce());

var bounce2 = new Bounce(13000);
bounce2.setStrategy(new PerfomanceA());
console.log(bounce2.getBounce());
