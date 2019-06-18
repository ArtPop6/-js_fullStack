var PerformanceS = function() {

}
var PerformanceA = function() {

}
var PerformanceB = function() {

}
// 从函数变一个类，设计模式
PerformanceS.prototype.calculate = function(salary) {
    return salary*5;
}
PerformanceA.prototype.calculate = function(salary) {
    return salary*3;
}
PerformanceB.prototype.calculate = function(salary) {
    return salary*2;
} 
var Bounce = function() {
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
    return this.strategy.calculate(this.salary);
}

var bounce = new Bounce(4000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());

var bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceB());
console.log(bounce2.getBounce());