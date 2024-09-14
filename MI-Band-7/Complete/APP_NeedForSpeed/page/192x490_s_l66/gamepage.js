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

            ////////////////////////////////////////////////
            var roadTimer = "";
            // Create the road animation
            function createRoad() {
              let img_height = 964;
              let screen_height = 490;
              let yPos = img_height - screen_height;
              const road = hmUI.createWidget(hmUI.widget.IMG, {
                x: 0,
                y: yPos,
                src: "road/road_" + hmFS.SysProGetInt("road") + ".png",
              });

              roadTimer = timer.createTimer(0, 1, function () {
                yPos += 1;

                if (yPos > 0) {
                  yPos = -474;
                }
                road.setProperty(hmUI.prop.MORE, {
                  y: yPos,
                });
              });
            }

            createRoad();
            // Create the road animation
            ////////////////////////////////////////////////

            ///////////// Variables /////////////
            let x_current = 89;
            let y_current = 300;
            const move_sensetivity = 10;
            var scoreIncrement = 1;
            var extraScoreFromSpeed = hmFS.SysProGetInt("speed");

            /////////////////////////////////////

            let currentCarFrame = 0;

            const car = hmUI.createWidget(hmUI.widget.IMG, {
              x: x_current,
              y: y_current,
              src: "car/car_main_normal_" + currentCarFrame + ".png",
            });

            const frameLimit = 4;
            const animateCar = timer.createTimer(0, 100, function () {
              currentCarFrame++;
              if (currentCarFrame > frameLimit) {
                currentCarFrame = 0;
              }
              car.setProperty(hmUI.prop.MORE, {
                src: "car/car_main_normal_" + currentCarFrame + ".png",
              });
            });

            // const car = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
            //   x: x_current,
            //   y: y_current,
            //   anim_path: "car",
            //   anim_prefix: "car_main",
            //   anim_ext: "png",
            //   anim_fps: 4,
            //   anim_size: 2,
            //   repeat_count: 255,
            //   anim_repeat: true,
            //   anim_status: hmUI.anim_status.START,
            //   show_level: hmUI.show_level.ONLY_NORMAL,
            // });

            // left move button
            const left_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 5,
              y: 400,
              text: "",
              w: 60,
              h: 60,
              normal_src: "button/left_normal.png",
              press_src: "button/left_pressed.png",
              click_func: () => {
                car_move("left");
              },
            });

            // right move button
            const right_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 130,
              y: 400,
              text: "",
              w: 60,
              h: 60,
              normal_src: "button/right_normal.png",
              press_src: "button/right_pressed.png",
              click_func: () => {
                car_move("right");
              },
            });

            // up move button
            const up_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 72,
              y: 380,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/up_normal.png",
              press_src: "button/up_pressed.png",
              click_func: () => {
                car_move("up");
              },
            });

            //  down move button
            const down_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 72,
              y: 440,
              text: "",
              w: 50,
              h: 50,
              normal_src: "button/down_normal.png",
              press_src: "button/down_pressed.png",
              click_func: () => {
                car_move("down");
              },
            });

            var warningAnim = "";
            var warningAnimCreated = false;

            // Apply the new position to the car
            // function setCarPosNow() {
            //   setTimeout(function () {
            //     car.setProperty(hmUI.prop.MORE, {
            //       x: x_current,
            //       y: y_current,
            //     });
            //   }, 100);
            // }
            // function to move the car
            function car_move(direction) {
              if (direction == "left") {
                x_current = x_current - move_sensetivity;
              } else if (direction == "right") {
                // for (let i = 0; i < move_sensetivity; i++) {
                //   x_current = x_current + 1;
                //   setCarPosNow();
                // }
                x_current = x_current + move_sensetivity;
              } else if (direction == "up") {
                y_current = y_current - move_sensetivity;
              } else if (direction == "down") {
                y_current = y_current + move_sensetivity;
              }

              // Fix Bounds
              if (x_current <= 0) {
                x_current = 0;
              }
              if (x_current > 175) {
                x_current = 175;
              }
              if (y_current < 0) {
                y_current = 0;
              }
              if (y_current > 400) {
                y_current = 400;
              }

              // Apply the new position to the car
              car.setProperty(hmUI.prop.MORE, {
                x: x_current,
                y: y_current,
              });

              console.log("Current X: " + x_current);
              console.log("Current Y: " + y_current);

              // Check if the car is on the road
              if (isOnRoad()) {
                console.log("On Road");
                if (warningAnimCreated == false) {
                  warningAnim = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                    x: 50,
                    y: 70,
                    anim_path: "utility",
                    anim_prefix: "offroad",
                    anim_ext: "png",
                    anim_fps: 2,
                    anim_size: 2,
                    repeat_count: 255,
                    anim_repeat: true,
                    anim_status: hmUI.anim_status.START,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                  });
                  scoreIncrement = 0;
                  extraScoreFromSpeed = 0;
                }
                warningAnimCreated = true;
              } else {
                console.log("Off Road");
                hmUI.deleteWidget(warningAnim);
                warningAnimCreated = false;
                scoreIncrement = 1;
                extraScoreFromSpeed = hmFS.SysProGetInt("speed");
              }
            }

            ///////////////////////////////////////////////////////////////
            function isOnRoad() {
              if (
                x_current <= roadX_start - 10 ||
                x_current >= roadX_end + 10
              ) {
                return true;
              } else {
                return false;
              }
            }

            ///////////////////////////////////////////////////////////////

            // Variables for the enemy creation
            const roadX_start = 50;
            const roadX_end = 122;
            const roadX_interval = 24;

            const totalCars = 6;

            let x_pos = 50;
            let y_speed = 1;
            let car_type = 0;

            // Function That Creates A Random Car Name
            function createRandomCarName(allCars) {
              let car_name = "car/car_";
              let car_number = Math.floor(Math.random() * allCars);
              car_name = car_name + car_number + ".png";
              return car_name;
            }

            // Function That Creates A Random X Position within the road
            function createRandomXPosition() {
              const numbers = [50, 74, 98, 122];
              const randomNumber =
                numbers[Math.floor(Math.random() * numbers.length)];
              return randomNumber;
            }

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

              const min = hmFS.SysProGetInt("interval");
              const max = hmFS.SysProGetInt("interval") + 1000;

              const randomNumber =
                Math.floor(Math.random() * (max - min + 1)) + min;
              return randomNumber;
            }

            ///////////////////////////////////////////////////////////////
            // Function That Calls The Random Enemy Creation Function Every 1 Second
            const enemyCreatorTimer = timer.createTimer(
              0,
              createRandomInterval(),
              function () {
                createRandomEnemy(
                  createRandomXPosition(),
                  createRandomYSpeed(),
                  createRandomCarName(totalCars)
                );
              }
            );

            ///////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////
            // Function That Creates A Random Enemy in each call
            function createRandomEnemy(x_pos, y_speed, car_type) {
              let movePos = y_speed;
              let initYPos = -50;
              let initXPos = x_pos;
              let carName = car_type;

              const enemyCar = hmUI.createWidget(hmUI.widget.IMG, {
                x: initXPos,
                y: initYPos,
                src: carName,
              });

              var singleEnemyTimer = timer.createTimer(0, 30, function () {
                initYPos = initYPos + movePos;

                enemyCar.setProperty(hmUI.prop.MORE, {
                  x: initXPos,
                  y: initYPos,
                });

                // if (initYPos > 430) {
                //   // scoreNum = scoreNum + 1;
                //   hmUI.deleteWidget(enemyCar);
                //  // timer.stopTimer(singleEnemyTimer);
                // }

                /////////////////////////// Collision Detection ///////////////////////////
                let enemyCar_CommonWidth = 18;
                let enemyCar_CommonHeight = 38;

                // Collision Detection
                if (
                  // if the enemy car is in the same x position as the player car
                  initXPos > x_current - enemyCar_CommonWidth &&
                  initXPos < x_current + enemyCar_CommonWidth &&
                  initYPos > y_current - enemyCar_CommonHeight &&
                  initYPos < y_current + enemyCar_CommonHeight
                ) {
                  console.log("Collision Detected");
                  // hmApp.gotoPage({
                  //   url: "page/192x490_s_l66/gameoverpage",
                  // });
                  // hmUI.deleteWidget(enemyCar);
                  // hmUI.deleteWidget(car);
                  hmUI.deleteWidget(left_btn);
                  hmUI.deleteWidget(right_btn);
                  hmUI.deleteWidget(up_btn);
                  hmUI.deleteWidget(down_btn);
                  // hmUI.deleteWidget(score);
                  timer.stopTimer(enemyCreatorTimer);
                  timer.stopTimer(roadTimer);
                  //timer.stopTimer(singleEnemyTimer);
                  timer.stopTimer(scoreTimer);
                  timer.stopTimer(animateCar);

                  let currentBlustFrame = 0;
                  const blustFrameLimit = 6;

                  const carBlustAnimation = timer.createTimer(

                    0,
                    100,
                    function () {
                      car.setProperty(hmUI.prop.MORE, {
                        src: "car/car_blust_" + currentBlustFrame + ".png",
                      });
                      currentBlustFrame++;
                      if (currentBlustFrame > blustFrameLimit) {
                          currentBlustFrame = 0;
                      }
                    }
                  );

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
                    text: "Your Score: " + scoreNum,
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
                }

                if (initYPos > 430) {
                  // scoreNum = scoreNum + 1;
                  hmUI.deleteWidget(enemyCar);
                  timer.stopTimer(singleEnemyTimer);
                }
              });
            }
            ///////////////////////////////////////////////////////////////
            //console.log(hmFS.SysProGetInt('js_test_int'));

            ///////////////////////////////////////////////////////////////

            // Create the score text
            let scoreNum = 0;
            const score = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 40,
              y: 20,
              text: "Score: 0",
              font_size: 10,
              color: "#ffffff",
            });

            // Update ScoreBoard
            const scoreTimer = timer.createTimer(0, 1000, function () {
              scoreNum = scoreNum + scoreIncrement + extraScoreFromSpeed;
              score.setProperty(hmUI.prop.MORE, {
                text: "Score: " + scoreNum,
              });
            });

            ///////////////////////////////////////////////////////////////

            console.log("ok bye");
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
