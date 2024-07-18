window.onload = function () {
  window.backHome();
};

// 数组扁平化

const flatter = (arg) => {
  return arg.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatter(cur) : cur);
  }, []);
};
const arr = [[1], [2, [2, 3], [4]]];
const res = flatter(arr);
