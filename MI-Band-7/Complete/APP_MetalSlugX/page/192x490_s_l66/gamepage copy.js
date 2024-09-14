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

            //////////////////////////////
            let moveHero = 0;

            // Create forward button
            function createButton() {
              const forwardButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 0,
                y: 0,
                text: "",
                w: 192,
                h: 64,
                normal_src: "buttons/forward_normal.png",
                press_src: "buttons/forward_pressed.png",
                click_func: () => {
                  if (moveHero) {
                    moveHero = 0;
                  } else {
                    moveHero = 1;
                  }
                },
              });
              const fireButton = hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 140,
                y: 70,
                text: "",
                w: 50,
                h: 50,
                normal_src: "buttons/firebutton_normal.png",
                press_src: "buttons/firebutton_pressed.png",
                click_func: () => {
                  createBullet();
                },
              });
            }

            // Scene Create Function
            function createScene() {
              // let scene_height = 1188;
              // let scene_width = 192;
              let scene_ypos = -528;

              // Scene Create
              const scene = hmUI.createWidget(hmUI.widget.IMG, {
                x: 0,
                y: scene_ypos,
                src: "backgrounds/bgfinal8.png",
              });

              let moveScene = 1;

              // Scene Timer
              const runScene = timer.createTimer(0, 30, function () {
                if (moveHero == 1) {
                  scene_ypos += moveScene;

                  if (scene_ypos > 0) {
                    scene_ypos = -528;
                  }
                  scene.setProperty(hmUI.prop.MORE, {
                    y: scene_ypos,
                  });
                }
              });
            }

            // Create hero function
            function createHero() {
              let heroArrayNum = 0;

              // Hero Create
              const hero = hmUI.createWidget(hmUI.widget.IMG, {
                x: 130,
                y: 350,
                src: "hero/hero_" + heroArrayNum + ".png",
              });

              // Hero Timer
              const runHero = timer.createTimer(0, 100, function () {
                heroArrayNum++;
                if (heroArrayNum > 10) {
                  heroArrayNum = 0;
                }
                if (moveHero == 1) {
                  hero.setProperty(hmUI.prop.MORE, {
                    src: "hero/hero_" + heroArrayNum + ".png",
                  });
                } else {
                  hero.setProperty(hmUI.prop.MORE, {
                    src: "hero/hero_4.png",
                  });
                }
              });
            }

            function createRandomSpeed() {
              return Math.floor(Math.random() * 5) + 1;
            }

            var currentEnemy = "";

            function createEnemy() {
              let enemyArrayNum = 0;
              let initPos = 100;
              const enemySpeed = createRandomSpeed();

              const currentEnemy = hmUI.createWidget(hmUI.widget.IMG, {
                x: 132,
                y: initPos,
                src: "enemy/enemy1_0.png",
              });

              const moveAndAnimateEnemy = timer.createTimer(0, 30, function () {
                enemyArrayNum++;
                if (enemyArrayNum > 5) {
                  enemyArrayNum = 0;
                }
                currentEnemy.setProperty(hmUI.prop.MORE, {
                  y: (initPos += enemySpeed),
                  src: "enemy/enemy1_" + enemyArrayNum + ".png",
                });

                currentEnemy.currntPos = initPos;

                if (initPos > 490) {
                  hmUI.deleteWidget(currentEnemy);
                  moveAndAnimateEnemy.stop();
                }
              });
            }

            function createRandomTime() {
              return Math.floor(Math.random() * (4001 - 1000)) + 1000;
            }

            function createRandomEnemy() {
              let randomTime = createRandomTime();

              const randomEnemyTimer = timer.createTimer(0, 2000, function () {
                console.log(randomTime);
                createEnemy();
                randomTime = createRandomTime();
              });
            }

            function createBullet() {
              let bulletInitPos = 330;

              const bullet = hmUI.createWidget(hmUI.widget.IMG, {
                x: 142,
                y: bulletInitPos,
                src: "bullets/bullet_0.png",
              });

              const moveBullet = timer.createTimer(0, 30, function () {
                bullet.setProperty(hmUI.prop.MORE, {
                  y: (bulletInitPos -= 5),
                });

                if (bulletInitPos < 0) {
                  hmUI.deleteWidget(enemy);
                  moveAndAnimateEnemy.stop();
                }

                const prop = currentEnemy.getProperty(hmUI.prop.MORE, {});
                const { x, y} = prop;

                const abcd = currentEnemy.getProperty(hmUI.prop.Y);

                console.log(bulletInitPos + " -------- " + abcd);

                if (bulletInitPos >= currentEnemy.currntPos) {
                  hmUI.deleteWidget(currentEnemy);
                  moveAndAnimateEnemy.stop();
                }
              });
            }

            createScene();
            createButton();
            createHero();
            createRandomEnemy();

            // let moveHero = 0;
            // let heroOnjump = false;

            // function callHeroJump() {
            //   const surface = 130;
            //   const jumpheight = surface + 50;

            //   let startFrom = 130;

            //   const jumpHeroTimer = timer.createTimer(0, 30, function () {
            //     startFrom += 5;

            //     hero.setProperty(hmUI.prop.MORE, {
            //       x: startFrom,
            //     });

            //     if (startFrom >= jumpheight) {
            //       jumpHeroTimer.stop();
            //     }
            //   });
            // }

            // const jump_button = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 100,
            //   y: 420,
            //   text: "",
            //   h: 64,
            //   w: 76,
            //   normal_src: "buttons/jump_normal.png",
            //   press_src: "buttons/jump_pressed.png",
            //   click_func: () => {
            //     hero.setProperty(hmUI.prop.MORE, {
            //       x: 160,
            //     });

            //     console.log("Jumped");
            //   },
            // });

            // const backward_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 0,
            //   y: 420,
            //   text: "",
            //   w: 192,
            //   h: 64,
            //   normal_src: "buttons/stop_normal.png",
            //   press_src: "buttons/stop_pressed.png",
            //   click_func: () => {
            //     moveHero = 0;
            //   },
            // });

            // const jump_button = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 100,
            //   y: 420,
            //   text: "",
            //   h: 64,
            //   w: 76,
            //   normal_src: "buttons/jump_normal.png",
            //   press_src: "buttons/jump_pressed.png",
            //   click_func: () => {
            //    heroOnjump = true;
            //     console.log("Jumped");
            //   },
            // });

            // function callHeroJump() {
            //   const surface = 130;
            //   const jumpheight = surface + 50;

            //   let startFrom = 130;

            //   const jumpHeroTimer = timer.createTimer(0, 30, function () {
            //     hero.setProperty(hmUI.prop.MORE, {
            //       y: scene_ypos,
            //     });
            //   });
            // }

            // let bg_height = 1560;
            // let bg_width = 192;

            // let yPos = -1070;

            // const bg = hmUI.createWidget(hmUI.widget.IMG, {
            //   x: 0,
            //   y: yPos,
            //   src: "backgrounds/bgfinal2.png",
            // });

            // let moveHero = 0;

            // const runBg = timer.createTimer(0, 30, function () {
            //   yPos += moveHero;

            //   if (yPos > 0) {
            //     yPos = -1070;
            //   }
            //   bg.setProperty(hmUI.prop.MORE, {
            //     y: yPos,
            //   });
            // });

            // // let moveRunRoad = 0;

            // // const runroadTimer = timer.createTimer(0, 30, function () {
            // //   runroad_yPos += moveRunRoad;

            // //   if (runroad_yPos > 0) {
            // //     runroad_yPos = -1208;
            // //   }
            // //   bg.setProperty(hmUI.prop.MORE, {
            // //     y: runroad_yPos,
            // //   });
            // // });

            // let heroArrayNum = 0;

            // const hero = hmUI.createWidget(hmUI.widget.IMG, {
            //   x: 130,
            //   y: 200,
            //   src: "hero1/hero_" + heroArrayNum + ".png",
            // });

            // const runHero = timer.createTimer(0, 100, function () {
            //   heroArrayNum++;
            //   if (heroArrayNum > 10) {
            //     heroArrayNum = 0;
            //   }
            //   if (moveHero == 1) {
            //     hero.setProperty(hmUI.prop.MORE, {
            //       src: "hero1/hero_" + heroArrayNum + ".png",
            //     });
            //   } else {
            //     hero.setProperty(hmUI.prop.MORE, {
            //       src: "hero1/hero_4.png",
            //     });
            //   }
            // });

            // let enemyArrayNum = 0;

            // const enemy1 = hmUI.createWidget(hmUI.widget.IMG, {
            //   x: 130,
            //   y: 300,
            //   src: "enemy1/enemy1_0.png",
            // });

            // const runEnemy1 = timer.createTimer(0, 100, function () {
            //   enemyArrayNum++;
            //   if (enemyArrayNum > 5) {
            //     enemyArrayNum = 0;
            //   }
            //   enemy1.setProperty(hmUI.prop.MORE, {
            //     src: "enemy1/enemy1_" + enemyArrayNum + ".png",
            //   });
            // });

            // // up move button
            // const up_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 72,
            //   y: 380,
            //   text: "",
            //   w: 50,
            //   h: 50,
            //   normal_src: "button/up_normal.png",
            //   press_src: "button/up_pressed.png",
            //   click_func: () => {
            //     moveHero = 1;
            //   },
            // });

            // //  down move button
            // const down_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 72,
            //   y: 440,
            //   text: "",
            //   w: 50,
            //   h: 50,
            //   normal_src: "button/down_normal.png",
            //   press_src: "button/down_pressed.png",
            //   click_func: () => {
            //     moveHero = 0;
            //   },
            // });

            // timer.createTimer(0, 1, function () {
            //       yPos += 1;

            //       if (yPos > 0) {
            //         yPos = -1070;
            //       }
            //       bg.setProperty(hmUI.prop.MORE, {
            //         y: yPos,
            //       });
            //     });
            //   }
            ////////////////////////////////////////////////
            // Create the road animation
            // function createRoad() {
            //   let img_height = 964;
            //   let screen_height = 490;
            //   let yPos = img_height - screen_height;
            //   const road = hmUI.createWidget(hmUI.widget.IMG, {
            //     x: 0,
            //     y: yPos,
            //     src: "road/road_" + hmFS.SysProGetInt("road") + ".png",
            //   });

            //   timer.createTimer(0, 1, function () {
            //     yPos += 1;

            //     if (yPos > 0) {
            //       yPos = -474;
            //     }
            //     road.setProperty(hmUI.prop.MORE, {
            //       y: yPos,
            //     });
            //   });
            // }

            // createRoad();
            // ///////////////////////////////////////////////

            // let x_current = 80;
            // let y_current = 200;
            // let move_sensetivity = 5;

            // // create the hero animation
            // let frameNumber = 0;
            // const frameLim = 11;

            // const hero = hmUI.createWidget(hmUI.widget.IMG, {
            //   x: x_current,
            //   y: y_current,
            //   src: "hero/hero_" + frameNumber + ".png",
            // });

            // var animateHero = timer.createTimer(0, 30, function () {
            //   frameNumber++;
            //   if (frameNumber > frameLim) {
            //     frameNumber = 0;
            //   }
            //   hero.setProperty(hmUI.prop.MORE, {
            //     src: "hero/hero_" + frameNumber + ".png",
            //   });
            // });

            // const left_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 5,
            //   y: 400,
            //   text: "",
            //   w: 60,
            //   h: 60,
            //   normal_src: "button/left_normal.png",
            //   press_src: "button/left_pressed.png",
            //   click_func: () => {
            //     car_move("left");
            //   },
            // });

            // // right move button
            // const right_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 130,
            //   y: 400,
            //   text: "",
            //   w: 60,
            //   h: 60,
            //   normal_src: "button/right_normal.png",
            //   press_src: "button/right_pressed.png",
            //   click_func: () => {
            //     car_move("right");
            //   },
            // });

            // // up move button
            // const up_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 72,
            //   y: 380,
            //   text: "",
            //   w: 50,
            //   h: 50,
            //   normal_src: "button/up_normal.png",
            //   press_src: "button/up_pressed.png",
            //   click_func: () => {
            //     car_move("up");
            //   },
            // });

            // //  down move button
            // const down_btn = hmUI.createWidget(hmUI.widget.BUTTON, {
            //   x: 72,
            //   y: 440,
            //   text: "",
            //   w: 50,
            //   h: 50,
            //   normal_src: "button/down_normal.png",
            //   press_src: "button/down_pressed.png",
            //   click_func: () => {
            //     car_move("down");
            //   },
            // });

            // function car_move(direction) {
            //   if (direction == "left") {
            //     x_current = x_current - move_sensetivity;
            //   } else if (direction == "right") {
            //     x_current = x_current + move_sensetivity;
            //   } else if (direction == "up") {
            //     y_current = y_current - move_sensetivity;
            //   } else if (direction == "down") {
            //     y_current = y_current + move_sensetivity;
            //   }

            //   // Fix Bounds
            //   if (x_current <= 0) {
            //     x_current = 0;
            //   }
            //   if (x_current > 175) {
            //     x_current = 175;
            //   }
            //   if (y_current < 0) {
            //     y_current = 0;
            //   }
            //   if (y_current > 400) {
            //     y_current = 400;
            //   }

            //   // Apply the new position to the car
            //   hero.setProperty(hmUI.prop.MORE, {
            //     x: x_current,
            //     y: y_current,
            //   });

            //   console.log("Current X: " + x_current);
            //   console.log("Current Y: " + y_current);
            // }

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
