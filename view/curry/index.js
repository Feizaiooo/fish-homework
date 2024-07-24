window.onload = function () {
  window.backHome();
};

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function(...nextArgs) {
        return curried(...args, ...nextArgs);
      }
    }
  };
}


function add(...args) {
  // 定义一个内部函数，用于累加结果
  const adder = (...nextArgs) => {
    // 如果没有传入参数，则返回累加结果
    if (nextArgs.length === 0) {
      return args.reduce((sum, num) => sum + num, 0);
    }
    // 如果有传入参数，则将这些参数加入到 args 中，并返回 adder 函数本身
    args = args.concat(nextArgs);
    return adder;
  };
  return adder;
}
console.log(add(1)(2)(3)()); // 6
console.log(add(1, 2, 3)(4)()); // 10
console.log(add(1, 2)(3, 4)(5)()); // 15
console.log(add()(1, 2, 3)()); // 6