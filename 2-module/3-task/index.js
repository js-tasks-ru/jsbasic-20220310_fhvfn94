let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b
  }, 
  sum: function(a, b) {
    return this.a + this.b;
  },
  mul(a, b) {
    return this.a * this.b;
  },
};

calculator.a = 0;
calculator.b = 0;
calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul());

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
