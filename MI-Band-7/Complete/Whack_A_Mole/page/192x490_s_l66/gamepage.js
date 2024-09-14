try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
    try {
      (() => {
        var e = __$$hmAppManager$$__.currentApp,
          t = e.current;
        new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t),
          "drink"
        );
        DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        t.module = DeviceRuntimeCore.Page({
          init_view() {
            hmUI.setLayerScrolling(false);

            const gamebgrnd = hmFS.SysProGetInt("gamebg");

            const bg = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "road/road_" + gamebgrnd + ".png",
            });

            const layer = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 192,
              h: 490,
              src: "layout.png",
            });

            let btnArray = [];
            let mouseArray = [];
            let hammerArray = [];
            let dizzynessArray = [];
            let currentOnClickBtnPos = {
              colNum: -99,
              rowNum: -99,
            };
            let currentMousePos = {
              colNum: -99,
              rowNum: -99,
            };

            let score = 0;

            function createMouse() {
              const mouse_width = 90;
              const mouse_height = 90;

              for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 1; j++) {
                  let x = j * mouse_width;
                  let y = i * mouse_height;

                  let mouseHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x + 26,
                    y: 65 + y,
                    w: mouse_width,
                    h: mouse_height,
                    src: "hidden_mouse.png",
                  });

                  let mouseObject = {
                    rowNum: i,
                    colNum: j,
                    mouse: mouseHere,
                    mouseLive: false,
                    mouseVisible: false,
                  };
                  mouseArray.push(mouseObject);
                }
              }
            }

            function createHammer() {
              let hammerHeight = 90;
              let hammerWidth = 90;

              for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 1; j++) {
                  let x = j * hammerWidth;
                  let y = i * hammerHeight;

                  let hammerHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x + 40,
                    y: 45 + y,
                    w: hammerWidth,
                    h: hammerHeight,
                    src: "hammer/frame_hidden.png",
                  });

                  let hammerObject = {
                    rowNum: i,
                    colNum: j,
                    hammer: hammerHere,
                  };
                  hammerArray.push(hammerObject);
                }
              }
            }

            function createDizzyness() {
              let dizzynessHeight = 90;
              let dizzynessWidth = 90;

              for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 1; j++) {
                  let x = j * dizzynessWidth;
                  let y = i * dizzynessHeight;

                  let dizzynessHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x + 10,
                    y: 20 + y,
                    w: dizzynessWidth,
                    h: dizzynessHeight,
                    src: "dizzyness/frame_hidden.png",
                  });

                  let dizzynessObject = {
                    rowNum: i,
                    colNum: j,
                    dizzyness: dizzynessHere,
                  };
                  dizzynessArray.push(dizzynessObject);
                }
              }
            }

            function createBtn() {
              const btn_height = 90;
              const btn_width = 90;

              for (let i = 0; i <= 4; i++) {
                for (let j = 0; j <= 1; j++) {
                  let x = j * btn_width;
                  let y = i * btn_height;

                  let btnHere = hmUI.createWidget(hmUI.widget.IMG, {
                    x: x + 6,
                    y: 20 + y,
                    w: btn_width,
                    h: btn_height,
                    src: "btn.png",
                  });

                  btnHere.addEventListener(
                    hmUI.event.CLICK_DOWN,
                    function (info) {
                      currentOnClickBtnPos.rowNum = i;
                      currentOnClickBtnPos.colNum = j;

                      console.log("Mouse");
                      console.log(currentMousePos);
                      console.log("Button");
                      console.log(currentOnClickBtnPos);

                      checkCoalision();
                    }
                  );

                  btnHere.addEventListener(
                    hmUI.event.CLICK_UP,
                    function (info) {
                      currentOnClickBtnPos.rowNum = -99;
                      currentOnClickBtnPos.colNum = -99;
                      console.log("--------------------");
                    }
                  );

                  let btnObject = {
                    rowNum: i,
                    colNum: j,
                    btn: btnHere,
                  };
                  btnArray.push(btnObject);
                }
              }
            }

            function checkCoalision() {
              if (
                currentOnClickBtnPos.colNum == currentMousePos.colNum &&
                currentOnClickBtnPos.rowNum == currentMousePos.rowNum
              ) {
                score = score + 10;
                updateScore();
                console.log("hit");

                animateSpriteMulti(
                  mouseArray[currentMiceIndex].mouse,
                  hammerArray[currentMiceIndex].hammer,
                  dizzynessArray[currentMiceIndex].dizzyness,
                  4,
                  "mole_hit/frame_",
                  "hammer/frame_",
                  "dizzy/frame_",
                  true,
                  100
                );

                currentMiceIndex = -99;
                currentMiceVis = false;
                health_minus = +2;
                updateHealth();
              } else {
                console.log("miss");
              }
            }

            function animateSpriteMulti(
              hmUIObject,
              hmUIObject2,
              hmUIObject3,
              frames_number,
              sprite_name,
              sprite_name2,
              sprite_name3,
              hide_sprite_on_end,
              frame_delay
            ) {
              let startFrom = 0;
              let endAt = frames_number;
              let currentFrame = startFrom;

              let animationTimer = timer.createTimer(
                0,
                frame_delay,
                function () {
                  hmUIObject.setProperty(hmUI.prop.MORE, {
                    src: sprite_name + currentFrame + ".png",
                  });

                  hmUIObject2.setProperty(hmUI.prop.MORE, {
                    src: sprite_name2 + currentFrame + ".png",
                  });

                  hmUIObject3.setProperty(hmUI.prop.MORE, {
                    src: sprite_name3 + currentFrame + ".png",
                  });

                  currentFrame++;
                  if (currentFrame >= endAt) {
                    if (hide_sprite_on_end) {
                      hmUIObject.setProperty(hmUI.prop.MORE, {
                        src: sprite_name + "hidden" + ".png",
                      });
                      hmUIObject2.setProperty(hmUI.prop.MORE, {
                        src: sprite_name2 + "hidden" + ".png",
                      });
                      hmUIObject3.setProperty(hmUI.prop.MORE, {
                        src: sprite_name3 + "hidden" + ".png",
                      });
                    }
                    timer.stopTimer(animationTimer);
                  }
                }
              );
            }

            function randomNumberGen(range) {
              return Math.floor(Math.random() * range);
            }

            let scoreText = null;

            function createScore() {
              scoreText = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 5,
                w: 192,
                h: 20,
                text: "Score: " + score,
                text_size: 15,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });
            }

            function updateScore() {
              scoreText.setProperty(hmUI.prop.MORE, {
                text: "Score: " + score,
              });
            }

            function animateSprite(
              hmUIObject,
              frames_number,
              sprite_name,
              hide_sprite_on_end,
              frame_delay
            ) {
              let startFrom = 0;
              let endAt = frames_number;
              let currentFrame = startFrom;

              let animationTimer = timer.createTimer(
                0,
                frame_delay,
                function () {
                  hmUIObject.setProperty(hmUI.prop.MORE, {
                    src: sprite_name + currentFrame + ".png",
                  });
                  currentFrame++;
                  if (currentFrame >= endAt) {
                    if (hide_sprite_on_end) {
                      hmUIObject.setProperty(hmUI.prop.MORE, {
                        src: sprite_name + "hidden" + ".png",
                      });
                    }
                    timer.stopTimer(animationTimer);
                  }
                }
              );
            }

            createMouse();
            createHammer();
            createDizzyness();
            createScore();

            createBtn();

            function callGameOver() {
              // DELETE ALL TIMERs
              timer.stopTimer(gameLoopTimer);

              hmUI.deleteWidget(scoreText);

              var gameOverAnim = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                x: 0,
                y: 70,
                anim_path: "utility",
                anim_prefix: "gameover",
                anim_ext: "png",
                anim_fps: 2,
                anim_size: 2,
                repeat_count: 255,
                anim_repeat: true,
                anim_status: hmUI.anim_status.START,
                show_level: hmUI.show_level.ONLY_NORMAL,
              });

              var showTotalScore = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 40,
                y: 100,
                w: 190,
                text: "Your Score: " + score,
                font_size: 15,
                color: 0x000000,
              });

              var Menu_Btn = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 22,
                y: 240,
                w: 150,
                h: 51,
                text: "",
                normal_src: "button/mainmenu_normal.png",
                press_src: "button/mainmenu_pressed.png",
                click_func: (function (h) {
                  return function () {
                    hmApp.gotoPage({
                      url: "page/192x490_s_l66/index.page",
                    });
                  };
                })(e),
              });
              console.log("Game Over");
            }

            var goback = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 0,
              y: 470,
              w: 192,
              h: 23,
              text: "",
              normal_src: "button/exit2_normal.png",
              press_src: "button/exit2_pressed.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/index.page",
                  });
                };
              })(e),
            });

            const fill_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 46,
              y: 25,
              w: 100,
              h: 10,
              radius: 100,
              color: 0x07fa1c,
            });

            let health = 100;
            let health_minus = 0;
            function updateHealth() {
              health = health + health_minus;
              if (health < 1) {
                callGameOver();
              }
              if (health > 100) {
                health = 100;
              }

              fill_rect.setProperty(hmUI.prop.MORE, {
                w: health,
              });

              if (health > 70) {
                fill_rect.setProperty(hmUI.prop.MORE, {
                  color: 0x07fa1c,
                });
              } else if (health <= 70 && health > 40) {
                fill_rect.setProperty(hmUI.prop.MORE, {
                  color: 0xe8f00a,
                });
              } else if (health <= 40 && health > 20) {
                fill_rect.setProperty(hmUI.prop.MORE, {
                  color: 0xfc8923,
                });
              } else {
                fill_rect.setProperty(hmUI.prop.MORE, {
                  color: 0xfa240c,
                });
              }

              console.log(health);
            }

            let currentMiceIndex = -99;
            let currentMiceVis = false;
            let setDelay = hmFS.SysProGetInt("speed");

            const gameLoopTimer = timer.createTimer(0, setDelay, function () {
              if (currentMiceVis) {
                updateHealth();
                currentMiceVis = false;
                // mouseArray[currentMiceIndex].mouse.setProperty(hmUI.prop.MORE, {
                //   src: "hidden_mouse.png",
                // });

                animateSprite(
                  mouseArray[currentMiceIndex].mouse,
                  6,
                  "mole_down/frame_",
                  true,
                  30
                );

                currentMiceIndex = -99;
                currentMousePos.rowNum = -99;
                currentMousePos.colNum = -99;
              } else {
                health_minus = -10;
                currentMiceVis = true;
                currentMiceIndex = randomNumberGen(mouseArray.length);
                console.log(currentMiceIndex);

                // mouseArray[currentMiceIndex].mouse.setProperty(hmUI.prop.MORE, {
                //   src: "mouse_0.png",
                // });

                currentMousePos.rowNum = mouseArray[currentMiceIndex].rowNum;
                currentMousePos.colNum = mouseArray[currentMiceIndex].colNum;

                animateSprite(
                  mouseArray[currentMiceIndex].mouse,
                  5,
                  "mole_up/frame_",
                  false,
                  30
                );
              }
              console.log(setDelay);
              updateScore();
            });
          },
          onInit() {
            console.log("index page.js on init invoke"), this.init_view();
          },
          onReady() {
            console.log("index page.js on ready invoke");
          },
          onShow() {
            console.log("index page.js on show invoke");
          },
          onHide() {
            console.log("index page.js on hide invoke");
          },
          onDestory() {
            console.log("index page.js on destory invoke");
          },
        });
      })();
    } catch (e) {
      console.log(e);
    }
  })();
} catch (e) {
  console.log(e);
}
