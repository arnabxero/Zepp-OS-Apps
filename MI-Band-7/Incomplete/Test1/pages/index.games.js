
Page({
  build() {
    hmUI.setStatusBarVisible(false);
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 140,
      color: 0xffffff,
      text_size: 27,
      text: "Co Ganh",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.coganh', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 44,
      y: 295,
      color: 0xffffff,
      text_size: 25,
      text: "Coloring",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.colors', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 508,
      color: 0xffffff,
      text_size: 23,
      text: "Checkers",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.dames', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 38,
      y: 663,
      w: 150,
      color: 0xffffff,
      text_size: 19,
      text: "Tic-Tac-Toe",
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 876,
      color: 0xffffff,
      text_size: 30,
      text: "2048",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/2048', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 1031,
      color: 0xffffff,
      text_size: 20,
      text: "Push & Pop",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/pushpop', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 1234,
      color: 0xffffff,
      text_size: 25,
      text: "Sokoban",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/sokoban', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 1389,
      color: 0xffffff,
      text_size: 25,
      text: "AMAZE",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/laberinths', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 1602,
      color: 0xffffff,
      text_size: 25,
      text: "Enigmes",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/enigmes', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 48,
      y: 1757,
      color: 0xffffff,
      text_size: 25,
      text: "Math game",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/calculus', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 690,
      w: 87,
      h: 46,
      text: "Vs Bot",
      radius: 10,
      text_size: 27,
      color: 0xffffff,
      press_color: 0x0000ff,
      normal_color: 0x2233ff,
      click_func: function(){
        hmApp.gotoPage({ url: 'pages/tic2', param: '...' })
      }
    });
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 107,
      y: 690,
      w: 87,
      h: 46,
      radius: 10,
      text: "1 Vs 1",
      text_size: 27,
      color: 0xffffff,
      press_color: 0x0000ff,
      normal_color: 0x2233ff,
      click_func: function(){
        hmApp.gotoPage({ url: 'pages/tic1', param: '...' })
      }
    });
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 30,
      w: 100,
      h: 100,
      src: "coganh.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.coganh', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 185,
      w: 100,
      h: 100,
      src: "colors.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.colors', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 398,
      w: 100,
      h: 100,
      src: "dames.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/index.dames', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 553,
      w: 100,
      h: 100,
      src: "tictactoe.png",
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 766,
      w: 100,
      h: 100,
      src: "2048.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/2048', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 921,
      w: 100,
      h: 100,
      src: "pushpop.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/pushpop', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 1134,
      w: 100,
      h: 100,
      src: "sokoban.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/sokoban', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 1289,
      w: 100,
      h: 100,
      src: "lab.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/laberinths', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 1502,
      w: 100,
      h: 100,
      src: "enigmes.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/enigmes', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 48,
      y: 1657,
      w: 100,
      h: 100,
      src: "calc.png",
    }).addEventListener(hmUI.event.CLICK_DOWN, () => {
      hmApp.gotoPage({ url: 'pages/calculus', param: '...' })
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 153,
      y: 10,
      src: "info.png",
    });
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 153,
      y: 378,
      src: "info.png",
    });
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 153,
      y: 746,
      src: "info.png",
    });
    hmUI.createWidget(hmUI.widget.IMG, {
      x: 153,
      y: 1114,
      src: "info.png",
    });
  },
});
