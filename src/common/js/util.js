function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//洗牌函数
export function shuffle(arr) {
  let _arr = arr.slice() //复制数组，返回新数组，避免修改原数组
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

export function debounce(func, delay) { //节流函数
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}