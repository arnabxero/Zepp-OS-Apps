Page({
  build() {
    let current_Speed = hmFS.SysProGetInt("speed");
    let current_background = hmFS.SysProGetInt("gamebg");
    let current_Paddle = hmFS.SysProGetInt("paddlenum");
    let current_brick_row = hmFS.SysProGetInt("brickrow");

    // hmFS.SysProSetInt("paddlenum", parseInt(current_Paddle) + 1);

    if (current_brick_row < 18) {
      hmFS.SysProSetInt("brickrow", parseInt(current_brick_row) + 1);
    } else {
      hmApp.gotoPage({ url: "pages/index.page", param: "..." });
    }

    if (current_Speed < 5) {
      hmFS.SysProSetInt("speed", parseInt(current_Speed) + 1);
    }

    hmApp.gotoPage({ url: "pages/gamepage", param: "..." });
  },
});
