//import  from ''
import('./counter.js').then(res => {
  console.log(res)
  console.log(res.count++)
  const { count } = res
  console.log(count)
  setTimeout(function () {
    console.log('read count after 1000ms in es6 is', count)
  }, 1000)
})
