import originJsonp from 'jsonp'
// 二次封装jsonp方法
export default function jsonp(url, data, option) {
  // 判断url中是否有？，有的话说明url中已经有带参数了，后面要用&拼接
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 用来把data拼到url上
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : '' //拼回去的时候把第一个&去掉
}
