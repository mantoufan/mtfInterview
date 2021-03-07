let count = 0
export {count}
setTimeout(function () {
  console.log('increase count to', ++count, 'in counter.js after 500ms')
}, 500)