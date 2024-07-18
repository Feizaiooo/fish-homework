console.log('Hello!');
window.backHome = function () {
  const a = document.createElement('a');
  a.innerText = 'HOME';
  a.href = '/';
  const div = document.createElement('div');
  div.append(a);
  document.body.prepend(div);
};
