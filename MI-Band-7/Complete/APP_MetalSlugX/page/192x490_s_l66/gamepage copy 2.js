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

            var allowedToCreateBullet = false;

            class scene {
              constructor(x, y, bgname) {
                this.x = x;
                this.y = -528;
                this.bgname = bgname;
                // this.initY = -528;
                this.moveScene = 1;
                this.bg = null;
                this.createScene();
              }
              createScene() {
                this.bg = hmUI.createWidget(hmUI.widget.IMG, {
                  x: this.x,
                  y: this.y,
                  src: this.bgname,
                });
              }
              runScene(run) {
                if (run) {
                  this.y += this.moveScene;
                  if (this.y >= 0) {
                    this.y = -528;
                  }
                  this.bg.setProperty(hmUI.prop.MORE, {
                    y: this.y,
                  });
                }
              }
            }

            class hero {
              constructor(x, y, name, frames) {
                this.x = x;
                this.y = y;
                this.name = name;
                this.frames = frames;
                this.hero = null;
                this.heroArrayNum = 0;
                this.createHero();
              }
              createHero() {
                this.hero = hmUI.createWidget(hmUI.widget.IMG, {
                  x: this.x,
                  y: this.y,
                  src: this.name + this.heroArrayNum + ".png",
                });
              }
              runHero(run) {
                if (run) {
                  this.heroArrayNum++;
                  if (this.heroArrayNum > this.frames) {
                    this.heroArrayNum = 0;
                  }
                  this.hero.setProperty(hmUI.prop.MORE, {
                    src: this.name + this.heroArrayNum + ".png",
                  });
                } else {
                  this.hero.setProperty(hmUI.prop.MORE, {
                    src: this.name + "4.png",
                  });
                }
              }
            }

            class enemy {
              constructor(x, y, name, frames) {
                this.x = x;
                this.y = y;
                this.name = name;
                this.frames = frames;
                this.enemy = null;
                this.enemyArrayNum = 0;
              }

              createEnemy(y) {
                this.y = y;
                this.enemy = hmUI.createWidget(hmUI.widget.IMG, {
                  x: this.x,
                  y: this.y,
                  src: this.name + this.enemyArrayNum + ".png",
                });
              }

              deleteEnemy() {
                hmUI.deleteWidget(this.enemy);
              }

              runEnemy(pos) {
                this.enemyArrayNum++;
                if (this.enemyArrayNum > this.frames) {
                  this.enemyArrayNum = 0;
                }
                this.y = pos;
               
                this.enemy.setProperty(hmUI.prop.MORE, {
                  src: this.name + this.enemyArrayNum + ".png",
                  y: this.y,
                });
              }

              returnEnemyY() {
                return this.y;
              }
            }

            class bullet {
              constructor(x, y, name) {
                this.x = x;
                this.y = y;
                this.name = name;
                this.bullet = null;
              }
              createBullet(y) {
                this.y = y;
                this.bullet = hmUI.createWidget(hmUI.widget.IMG, {
                  x: this.x,
                  y: this.y,
                  src: this.name,
                });
              }
              deleteBullet() {
                hmUI.deleteWidget(this.bullet);
              }
              runBullet() {
                this.y -= 5;
                if (this.y < 0) {
                  console.log("bullet deleted");
                  hmUI.deleteWidget(this.bullet);
                }
                this.bullet.setProperty(hmUI.prop.MORE, {
                  y: this.y,
                });
              }
              returnBulletY() {
                return this.y;
              }
            }

            /////// All Classes ///////////
            const scene1 = new scene(0, 0, "backgrounds/bgfinal8.png");
            const hero1 = new hero(130, 350, "hero/hero_", 10);
            const enemy1 = new enemy(133, 0, "enemy/enemy1_", 5);
            const bullet1 = new bullet(142, 335, "bullets/bullet_0.png");
            /////// All Classes ///////////
            /////// globar vars ////////////
            let bulletY = 142;
            let enemyY = 0;

            var bulletExist = false;
            var enemyExist = false;

            var gameOver = false;
            /////// globar vars ////////////

            const gameLoop = timer.createTimer(0, 30, function () {
              if (!gameOver) {
                scene1.runScene(true);

                hero1.runHero(true);


                if (!enemyExist) {
                  enemyExist = true;
                  enemy1.createEnemy(-10);
                } else {
                  if (enemyY < 350) {
                    enemyY = enemyY+5;
                    enemy1.runEnemy(enemyY);
                  } else {
                    enemyY = 0;
                    console.log("Game Over");
                    enemyExist = false;
                    enemy1.deleteEnemy();
                    gameOver = true;
                  }
                }

                bulletY = bullet1.returnBulletY();

                if (!bulletExist && allowedToCreateBullet) {
                  bulletExist = true;
                  bullet1.createBullet(330);
                } else {
                  if (bulletY < enemyY) {
                    enemyY = 0;
                    bulletExist = false;
                    bullet1.deleteBullet();
                    enemy1.deleteEnemy();
                  } else {
                    bullet1.runBullet();
                  }
                }
              }
              // scene1.runScene(true);
              // hero1.runHero(true);

              // bulletY = bullet1.returnBulletY();
              // enemyY = enemy1.returnEnemyY();

              // if (enemyY > 490) {
              //   enemyExist = false;
              //   enemy1.deleteEnemy();
              // }

              // if (!enemyExist) {
              //   enemyExist = true;
              //   enemy1.createEnemy(0);
              // } else {
              //   enemy1.runEnemy(5);
              // }

              // if (!bulletExist && allowedToCreateBullet) {
              //   bulletExist = true;
              //   bullet1.createBullet(330);
              // } else {
              //   bullet1.runBullet();
              // }

              // if (bulletY < enemyY) {
              //   bulletExist = false;
              //   enemyExist = false;
              //   console.log("hit");
              //   enemy1.deleteEnemy();
              //   bullet1.deleteBullet();
              // }
            });

            const fireButton = hmUI.createWidget(hmUI.widget.IMG, {
              x: 140,
              y: 70,
              w: 50,
              h: 50,
              src: "buttons/firebutton_normal.png",
            });

            fireButton.addEventListener(hmUI.event.CLICK_DOWN, () => {
              fireButton.setProperty(hmUI.prop.MORE, {
                src: "buttons/firebutton_pressed.png",
              });
              allowedToCreateBullet = true;
            });

            fireButton.addEventListener(hmUI.event.CLICK_UP, () => {
              fireButton.setProperty(hmUI.prop.MORE, {
                src: "buttons/firebutton_normal.png",
              });
              allowedToCreateBullet = false;
            });

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
