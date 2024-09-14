/**
 * Build with ZMake tool
 */

(() => {
  class line {
    mapWidth = 12;
    mapHeight = 12;

    //12*12
    // worldMap= new Array(
    //   new Array(1,1,1,1,1,1,1,1,1,1,1,1),
    //   new Array(1,0,0,0,0,0,0,0,0,0,0,1),
    //   new Array(1,0,0,0,0,0,0,0,0,0,0,1),
    //   new Array(1,0,0,0,0,0,0,1,1,1,0,1),
    //   new Array(1,0,0,0,0,0,0,0,0,1,0,1),
    //   new Array(1,0,0,1,0,0,0,0,0,1,0,1),
    //   new Array(1,0,0,1,0,0,0,0,0,0,0,1),
    //   new Array(1,0,0,1,1,0,0,1,1,0,0,1),
    //   new Array(1,0,0,1,1,1,0,0,0,0,0,1),
    //   new Array(1,0,0,0,0,0,0,0,0,1,0,1),
    //   new Array(1,0,0,0,0,0,0,0,0,0,0,1),
    //   new Array(1,1,1,1,1,1,1,1,1,1,1,1),
    // );

    worldMap = new Array(
      new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1),
      new Array(1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1),
      new Array(1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
      new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
    );

    posX = 2.0;
    posY = 2.0;
    //x and y start position

    dirX = 1.0;
    dirY = 0.0;
    //initial direction vector

    planeX = 0.0;
    planeY = 0.66;
    //the 2d raycaster version of camera plane

    widgetArray = [0, 1, 2];
    //存储渲染的线条，渲染下一帧前要销毁前一帧
    up = 0;
    down = 0;
    left = 0;
    right = 0;

    sky = 0;

    moveSpeed = 0.6;
    rotSpeed = 0.3;

    /*
    更新帧流程：

    删除所有组件
    画背景
    渲染
    添加透明按钮组件
    */

    deleteAllWidget() {
      hmUI.deleteWidget(this.up);
      hmUI.deleteWidget(this.left);
      hmUI.deleteWidget(this.right);
      hmUI.deleteWidget(this.down);

      for (let x = 0; x < 192; x = x + 6) {
        hmUI.deleteWidget(this.widgetArray[x]);
      }
    }

    addMyBotton() {
      this.up = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        w: 192,
        h: 160,
        src: "empty.png",
      });

      this.down = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 320,
        w: 192,
        h: 160,
        src: "empty.png",
      });

      this.left = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 160,
        w: 96,
        h: 160,
        src: "empty.png",
      });

      this.right = hmUI.createWidget(hmUI.widget.IMG, {
        x: 96,
        y: 160,
        w: 96,
        h: 160,
        src: "empty.png",
      });

      this.up.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        if (
          this.worldMap[parseInt(this.posX + this.dirX * this.moveSpeed)][
            parseInt(this.posY)
          ] === 0
        ) {
          this.posX += this.dirX * this.moveSpeed;
        }
        if (
          this.worldMap[parseInt(this.posX)][
            parseInt(this.posY + this.dirY * this.moveSpeed)
          ] === 0
        ) {
          this.posY += this.dirY * this.moveSpeed;
        }

        this.deleteAllWidget();
        this.render();
        console.log("up");
      });

      this.down.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        if (
          this.worldMap[parseInt(this.posX - this.dirX * this.moveSpeed)][
            parseInt(this.posY)
          ] === 0
        ) {
          this.posX -= this.dirX * this.moveSpeed;
        }
        if (
          this.worldMap[parseInt(this.posX)][
            parseInt(this.posY - this.dirY * this.moveSpeed)
          ] === 0
        ) {
          this.posY -= this.dirY * this.moveSpeed;
        }

        this.deleteAllWidget();
        this.render();
        console.log("down");
      });

      this.left.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        let oldDirX = this.dirX;
        this.dirX =
          this.dirX * Math.cos(-this.rotSpeed) -
          this.dirY * Math.sin(-this.rotSpeed);
        this.dirY =
          oldDirX * Math.sin(-this.rotSpeed) +
          this.dirY * Math.cos(-this.rotSpeed);

        let oldPlaneX = this.planeX;
        this.planeX =
          this.planeX * Math.cos(-this.rotSpeed) -
          this.planeY * Math.sin(-this.rotSpeed);
        this.planeY =
          oldPlaneX * Math.sin(-this.rotSpeed) +
          this.planeY * Math.cos(-this.rotSpeed);
        console.log("left");
        this.deleteAllWidget();
        this.render();
      });

      this.right.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
        let oldDirX = this.dirX;
        this.dirX =
          this.dirX * Math.cos(this.rotSpeed) -
          this.dirY * Math.sin(this.rotSpeed);
        this.dirY =
          oldDirX * Math.sin(this.rotSpeed) +
          this.dirY * Math.cos(this.rotSpeed);
        let oldPlaneX = this.planeX;
        this.planeX =
          this.planeX * Math.cos(this.rotSpeed) -
          this.planeY * Math.sin(this.rotSpeed);
        this.planeY =
          oldPlaneX * Math.sin(this.rotSpeed) +
          this.planeY * Math.cos(this.rotSpeed);
        console.log("right");
        this.deleteAllWidget();
        this.render();
      });
    }

    //0 <= num <=191
    drawPerpLine(startX, startY, height, myColor, num) {
      let temp = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: startX,
        y: startY,
        w: 6,
        h: height,
        color: myColor,
      });
      this.widgetArray[num] = temp;
    }

    render() {
      for (let x = 0; x < 192; x = x + 6) {
        //calculate ray position and direction

        let cameraX = (2.0 * x) / 192.0 - 1; //x-coordinate in camera space //float
        let rayDirX = this.dirX + this.planeX * cameraX; //float
        let rayDirY = this.dirY + this.planeY * cameraX; //float

        //which box of the map we're in
        let mapX = parseInt(this.posX); //int
        let mapY = parseInt(this.posY); //int

        //length of ray from current position to next x or y-side
        let sideDistX; //float
        let sideDistY; //float

        //length of ray from one x or y-side to next x or y-side
        let deltaDistX =
          Math.abs(rayDirX) < 1e-30 ? 1e30 : Math.abs(1 / rayDirX); //float
        let deltaDistY =
          Math.abs(rayDirY) < 1e-30 ? 1e30 : Math.abs(1 / rayDirY); //float
        let perpWallDist = 0.0; //float

        //what direction to step in x or y-direction (either +1 or -1)
        let stepX;
        let stepY;

        let hit = false; //was there a wall hit?
        let side; //was a NS or a EW wall hit?

        //calculate step and initial sideDist
        if (rayDirX < 0) {
          stepX = -1;
          sideDistX = (this.posX - mapX) * deltaDistX;
        } else {
          stepX = 1;
          sideDistX = (mapX + 1.0 - this.posX) * deltaDistX;
        }
        if (rayDirY < 0) {
          stepY = -1;
          sideDistY = (this.posY - mapY) * deltaDistY;
        } else {
          stepY = 1;
          sideDistY = (mapY + 1.0 - this.posY) * deltaDistY;
        }

        //perform DDA
        while (hit === false) {
          //jump to next map square, either in x-direction, or in y-direction
          if (sideDistX < sideDistY) {
            sideDistX += deltaDistX;
            mapX += stepX;
            side = 0;
          } else {
            sideDistY += deltaDistY;
            mapY += stepY;
            side = 1;
          }
          //Check if ray has hit a wall
          if (this.worldMap[mapX][mapY] > 0) {
            hit = true;
          }
        }

        //Calculate distance projected on camera direction (Euclidean distance would give fisheye effect!)
        if (side === 0) perpWallDist = sideDistX - deltaDistX;
        else perpWallDist = sideDistY - deltaDistY;

        //Calculate height of line to draw on screen
        let lineHeight = 480 / perpWallDist; //int

        //calculate lowest and highest pixel to fill in current stripe
        let drawStart = -lineHeight / 2 + 480 / 2;
        if (drawStart < 0) drawStart = 0;
        let drawEnd = parseInt(lineHeight / 2.0 + 480 / 2);
        if (drawEnd >= 480) drawEnd = 480 - 1;

        if (side === 1) {
          //两种颜色
          //console.log(`${x}+${drawStart}+${drawEnd}`);
          this.drawPerpLine(x, drawStart, lineHeight, 0x66ff00, x);
        } else {
          //两种颜色
          //console.log(`${x}+${drawStart}+${drawEnd}`);
          this.drawPerpLine(x, drawStart, lineHeight, 0xccff33, x);
        }
      }

      this.addMyBotton();
      //hmUI.redraw();
      console.log("render complete");
    }
  }

  let __$$app$$__ = __$$hmAppManager$$__.currentApp;
  let __$$module$$__ = __$$app$$__.current;
  __$$module$$__.module = DeviceRuntimeCore.Page({
    onInit() {
      // let temp = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 192,
      //   h: 480,
      //   color: 0x3c44ff,
      // });

      // let temp1 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      //   x: 0,
      //   y: 0,
      //   w: 150,
      //   h: 150,
      //   color: 0x3c4467,
      // });

      let cg = new line();
      cg.sky = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: 0,
        w: 192,
        h: 240,
        color: 0xccffff,
      });

      cg.floor = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: 240,
        w: 192,
        h: 240,
        color: 0xc0033cc,
      });

      cg.render();
    },

    onDestroy() {
      // On destroy, remove if not required
    },
  });
})();
