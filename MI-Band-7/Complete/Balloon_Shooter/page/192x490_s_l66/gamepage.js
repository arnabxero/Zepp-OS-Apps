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
            const road = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              src: "background-min.png",
            });

            const layer1 = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              h: 490,
              w: 192,
              src: "bg.png",
            });

            var score = 0;

            var scoreText;
            function createScore() {
              scoreText = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 0,
                y: 36,
                w: 192,
                h: 20,
                text: "" + score,
                text_size: 15,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
              });
            }
            createScore();

            function updateScore() {
              scoreText.setProperty(hmUI.prop.MORE, {
                text: "" + score,
              });
            }

            ///////////////////////////////
            // Function That Creates A Random Y Speed within a range
            function createRandomYSpeed() {
              // const min = 3;
              // const max = 4;

              const min = hmFS.SysProGetInt("speed");
              const max = hmFS.SysProGetInt("speed") + 1;

              const randomNumber =
                Math.floor(Math.random() * (max - min + 1)) + min;
              return randomNumber;
            }

            // function that gives a random time interval for enemy creation within 2-6 seconds
            function createRandomInterval() {
              // const min = 1000;
              // const max = 2000;

              // const min = hmFS.SysProGetInt("interval");
              // const max = hmFS.SysProGetInt("interval") + 1000;

              // const randomNumber =
              //   Math.floor(Math.random() * (max - min + 1)) + min;
              // return randomNumber;
              return 1000;
            }

            function createRandomXPosition() {
              //return Math.floor(Math.random() * 141) + 10;
              return Math.floor(Math.random() * (155 - 5 + 1) + 5);
            }

            /////////////////////////////////////////////////////
            function animateSprite(
              hmUIObject,
              frames_number,
              sprite_name,
              hide_sprite_on_end,
              frame_delay
            ) {
              console.log("ANimation going on");

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
                    hmUI.deleteWidget(hmUIObject);
                    timer.stopTimer(animationTimer);
                  }
                }
              );
            }

            let health = 110;

            const fill_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 41,
              y: 431,
              w: health,
              h: 10,
              radius: 100,
              color: 0x07fa1c,
            });

            let health_minus = 10;

            function updateHealth(symb) {
              if (symb === "-") {
                health = health - health_minus;
              } else if (symb === "+") {
                health = health + 10;
              } else {
                health = health;
              }
              if (health < 1) {
                callGameOver();
              }
              if (health > 110) {
                health = 110;
              }

              fill_rect.setProperty(hmUI.prop.MORE, {
                w: health,
              });

              var healthColor = {
                110: 0x00ff00,
                105: 0x00ff00,
                100: 0x00ff00,
                95: 0x1dff00,
                90: 0x3bff00,
                85: 0x58ff00,
                80: 0x76ff00,
                75: 0x93ff00,
                70: 0xb1ff00,
                65: 0xceff00,
                60: 0xecff00,
                55: 0xffe600,
                50: 0xffc800,
                45: 0xffab00,
                40: 0xff8d00,
                35: 0xff7000,
                30: 0xff5200,
                25: 0xff3500,
                20: 0xff1700,
                15: 0xe50000,
                10: 0xc30000,
                5: 0xa10000,
                0: 0x7f0000,
              };

              var color = healthColor[health - (health % 5)];
              fill_rect.setProperty(hmUI.prop.MORE, { color: color });

              console.log(health);
            }
            /////////////////////////////////////////////////////
            function createRandomBalloons(xPos, ySpeed) {
              var currentPos = 380;
              const totalFrames = 10;
              var currentFrame = Math.floor(Math.random() * totalFrames);

              var widthofballon = 50;

              if (
                currentFrame === 0 ||
                currentFrame === 1 ||
                currentFrame === 2
              ) {
                widthofballon = 60;
              }
              const randomBalloon = hmUI.createWidget(hmUI.widget.IMG, {
                x: xPos,
                y: currentPos,
                h: 100,
                w: widthofballon,
                src: "balloons/" + currentFrame + ".png",
              });

              randomBalloon.addEventListener(
                hmUI.event.CLICK_DOWN,
                function (info) {
                  // animateSprite(randomBalloon, 2, "balloon_", false, 1000);
                  score += 10;
                  updateScore();

                  if (currentFrame === 5) {
                    updateHealth("+");
                  }

                  animateSprite(randomBalloon, 8, "shootanim/frame_", true, 30);
                  // hmUI.deleteWidget(randomBalloon);
                  timer.stopTimer(singleBalloonTimer);
                }
              );

              var singleBalloonTimer = timer.createTimer(0, 10, function () {
                currentPos = currentPos - ySpeed;

                if (currentPos < 80) {
                  updateHealth("-");
                  hmUI.deleteWidget(randomBalloon);
                  timer.stopTimer(singleBalloonTimer);
                }

                randomBalloon.setProperty(hmUI.prop.MORE, {
                  x: xPos,
                  y: currentPos,
                });
              });
            }
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////
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

            function callGameOver() {
              // DELETE ALL TIMERs
              timer.stopTimer(mainTimer);

              hmUI.deleteWidget(scoreText);
              hmUI.deleteWidget(fill_rect);

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

            const mainTimer = timer.createTimer(
              0,
              createRandomInterval(),
              function () {
                createRandomBalloons(
                  createRandomXPosition(),
                  createRandomYSpeed()
                  // createRandomCarName(totalCars)
                );
              }
            );
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
