window.onload = function () {
  window.backHome();
};

let decounce = (fn,delay)=>{
  let timer = null
  return function (arg) {
    if(timer) clearTimeout(timer); 
    timer = setTimeout(() => {
      fn.call(this,arg)
    }, delay);
  }
}
const throttle = (fn,delay) =>{
  let timer = null
  return function (arg) {
    if(timer) return 
    timer = setTimeout(() => {
      fn.call(this,arg)
      timer = null
    }, delay);
  }
}
