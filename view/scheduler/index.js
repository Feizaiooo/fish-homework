window.onload = function () {
  window.backHome();
};
// 实现有并行限制的 Promise 调度器
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.funList = [];
    this.runList = [];
  }
  add(delay, func, ...arg) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          func(...arg);
          resolve();
        }, delay);
      });
    };
    this.funList.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.limit; i++) {
      this.request();
    }
  }
  request() {
    if (
      !this.funList ||
      !this.funList.length ||
      this.runList.length >= this.limit
    ) {
      return;
    }
    const shift = this.funList.shift();
    this.runList.push(shift);
    shift().then(() => {
      this.runList = this.runList.filter((t) => t !== shift);
      this.request();
    });
  }
}
const scheduler = new Scheduler(2);

const task1 = (order) => {
  console.log('task1', order);
};
const task2 = (order) => {
  console.log('task2', order);
};
const task3 = (order) => {
  console.log('task3', order);
};
const task4 = (order) => {
  console.log('task4', order);
};
scheduler.add(1000, task1, '2131');
scheduler.add(500, task2, '2');
scheduler.add(300, task3, '3');
scheduler.add(400, task4, '4');
scheduler.taskStart();
