1. 上嘴唇的画法
  将两个矩形旋转，用border画
2. 调速功能
  改变定时器的执行时间，必须通过setTimeOut嵌套实现，因为setInterval只会读一次时间
3. 清除setTimeOut
```
// 这样无法清除定时器，因为timer拿到的值总是上一个定时器执行完后返回的
if (codeIndex >= code.length) {
  clearTimeout(timer);
}

// 只在有需要的时候开启定时器，不用去清除
if (codeIndex < code.length) {
  timer = setTimeout(fn, window.speed);
}
```