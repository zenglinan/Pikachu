!function () {
  let view = codeWrapper;
  let controller = {
    view: null,
    cssCode: `
    /*
    * 先来准备皮卡丘的皮
    */
    .show {
      background-color: rgb(253, 230, 68);
    }
    /*
    * 然后画皮卡丘的鼻
    */
    .nose {
      background-color: black;
      height: 14px;
      width: 28px;
      position: absolute;
      top: 74px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 40px/20px;
    }
    /*
    * 俩眼睛
    */
    .eye {
      background-color: rgb(51, 51, 51);
      width: 85px;
      height: 85px;
      position: absolute;
      left: 50%;
      border-radius: 50%;
    }
    /*
    * 左眼
    */
    .eyeLeft {
      transform: translateX(-202px);
    }
    /*
    * 右眼
    */
    .eyeRight {
      transform: translateX(117px);
    }
    /*
    * 画俩眼珠子
    */
    .eye::after {
      content: '';
      display: block;
      width: 36px;
      height: 36px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      right: 13px;
    }
    /*
    * 脸两边加点红晕
    */
    .flush {
      background-color: rgb(247, 31, 57);
      height: 75px;
      width: 75px;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      border: 2px solid black;
    }
    .flushLeft {
      left: 0;
    }
    .flushRight {
      right: 0;
    }
    /*
    * 小胡(嘴)须(唇)
    */
    .lip {
      background-color: rgb(253, 230, 68);
      width: 48px;
      height: 22px;
      position: absolute;
      left: 50%;
      border: 2px solid black;
      border-top: none;
      z-index: 99;
    }
    .lipLeft {
      top: 80px;
      border-right: none;
      transform: rotate(-30deg) translateX(-58px);
      border-bottom-left-radius: 30px 20px;
    }
    .lipRight {
      top: 109px;
      border-left: none;
      transform: rotate(30deg) ;
      border-bottom-right-radius: 30px 20px;
    }
    /*
    * 接下来画嘴
    */
    .mouseWrapper {
      width: 200px;
      height: 71px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      overflow: hidden;
    }
    .mouse {
      background-color: rgb(218, 62, 82);
      height: 400px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      border-radius: 40px/100px;
      border: 2px solid black;
      z-index: -1;
    }
    /* 画完啦，送你一只可爱的皮卡丘 */
    `,
    init() {
      this.view = view
      this.writeCode('', this.cssCode)
    },
    writeCode(preCode, code) {
      let codeIndex = 0;
        let timer = setInterval(() => {
          this.view.innerHTML = code.slice(0, codeIndex);
          codeStyle.innerHTML = code.slice(0, codeIndex);
          this.view.scrollTop = this.view.scrollHeight;
          codeIndex += 1;
          if (codeIndex >= code.length) {
            console.log(1);
            window.clearInterval(timer);
          }
        }, 20)
    }
  }
  controller.init(view);
}()