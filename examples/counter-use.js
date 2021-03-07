//import  from ''
const {count} = import('./counter.js');
setTimeout(function () {
  console.log('read count after 1000ms in es6 is', count)
}, 1000)