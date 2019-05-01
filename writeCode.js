!function () {
  let view = codeWrapper;
  let controller = {
    view: null,
    cssCode: window.cssCode,
    init() {
      this.view = view
      console.log(this.view)
      console.log(window.speed)
      this.writeCode('', this.cssCode)
    },
    writeCode(preCode, code, callback) {
      let codeIndex = 0;
      var timer = setTimeout(function fn() {
        controller.view.innerHTML = code.slice(0, codeIndex);
        codeStyle.innerHTML = code.slice(0, codeIndex);
        controller.view.scrollTop = controller.view.scrollHeight;
        codeIndex += 1;
        console.log(1);
        if (codeIndex < code.length) {
          timer = setTimeout(fn, window.speed);
        }
        else {
          callback && callback();
        }
      }, window.speed)
    }
  }
  controller.init(view);
}()