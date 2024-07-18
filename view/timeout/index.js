window.onload = function () {
  window.backHome();
};

function mySettimeout(fn, t, ...arg) {
  let timer = null;
  function interval() {
    fn.apply(this, arg);
    timer = setTimeout(interval, t);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
const getData = (a, b) => {
  console.log('getData', a, '-', b);
};
let a = mySettimeout(getData, 1000, 1, 23, 4);
setTimeout(() => {
  a.cancel();
  console.log('Interval cleared');
}, 5000);
