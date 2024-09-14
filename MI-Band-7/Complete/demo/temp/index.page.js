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
              /* Mi Band 7 is not compatible with applets,
               Therefore, all applets are rendered in 480*480 size,
               And Mi Band 7 has a resolution of 192*490,
               The bottom 10px pixels cannot be used,
               There are components beyond h480 that can slide up and down */
              hmUI.setLayerScrolling(false);
              //Disable page scrolling up and down
              // const Text = hmUI.createWidget(hmUI.widget.TEXT, {
              //   //Hello World text
              //   x: 0,
              //   y: 0,
              //   w: 192,
              //   h: 490,
              //   color: 0xfcba03,
              //   text_size: 30,
              //   align_h: hmUI.align.CENTER_H,
              //   align_v: hmUI.align.CENTER_V,
              //   text_style: hmUI.text_style.WRAP,
              //   text: "Good World!"
              // });
  
              // const background = hmUI.createWidget(hmUI.widget.IMG, {
              //   x: 20,
              //   y: 0,
              //   src: "images/road_0.png"
              // });
  
              // const img_button = hmUI.createWidget(hmUI.widget.BUTTON, {
              //   x: 100,
              //   y: 240,
              //   w: 50,
              //   h: 100,
              //   radius: 12,
              //   normal_color: 0xfc6950,
              //   press_color: 0xfeb4a8,
              //   text: 'Hello',
              //   click_func: (Text) => {
              //     Text.setProperty(hmUI.prop.MORE, {
              //       text: 'Hello dijneqwocdnw!'
              //     },
              //     console.log(img_button))
              //   }
              // });
  
              // hmUI.createWidget(hmUI.widget.IMG_ANIM, {
              //   x: 20,
              //   y: 0,
              //   anim_path: "images",
              //   anim_prefix: "road",
              //   anim_ext: "png",
              //   anim_fps: 5,
              //   anim_size: 5,
              //   repeat_count: 255,
              //   anim_repeat: true,
              //   anim_status: hmUI.anim_status.START,
              //   show_level: hmUI.show_level.ONLY_NORMAL,
              // });
  
              /////////////////////////////////////////////////////
  
              // const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
              //   x: px(96),
              //   y: px(120),
              //   w: px(288),
              //   h: px(46),
              //   color: 0xffffff,
              //   text_size: px(36),
              //   align_h: hmUI.align.CENTER_H,
              //   align_v: hmUI.align.CENTER_V,
              //   text_style: hmUI.text_style.NONE,
              //   text: 'HELLO ZEPPOS'
              // })
  
              // const anim_step1 = {
              //   anim_rate: "linear",
              //   anim_duration: 2000,
              //   anim_from: px(10),
              //   anim_to: px(110),
              //   anim_prop: hmUI.prop.X,
              // };
  
              // const anim_step2 = {
              //   anim_rate: "linear",
              //   anim_duration: 2000,
              //   anim_from: px(120),
              //   anim_to: px(300),
              //   anim_prop: hmUI.prop.Y,
              // };
  
              // const bg_road = hmUI.createWidget(hmUI.widget.IMG, {
              //   x: 20,
              //   y: 0,
              //   src: "images/road_0.png",
              // });
  
              // const animId = bg_road.setProperty(hmUI.prop.ANIM, {
              //   anim_steps: [anim_step1, anim_step2],
              //   anim_fps: 25,
              // });
  
              // bg_road.setProperty(hmUI.prop.ANIM_STATUS, {
              //   anim_id: animId,
              //   anim_status: hmUI.anim_status.PAUSE,
              // });
  
              // bg_road.setProperty(hmUI.prop.ANIM_STATUS, {
              //   anim_id: animId,
              //   anim_status: hmUI.anim_status.RESUME,
              // });
  
              //const currentStatus = bg_road.getProperty(hmUI.prop.ANIM_STATUS, animId)
  
              //console.log(currentStatus)
              // textWidget.setProperty(hmUI.prop.ANIM_STATUS, {
              //   anim_id: animId,
              //   anim_status: hmUI.anim_status.PAUSE
              // })
  
              // textWidget.setProperty(hmUI.prop.ANIM_STATUS, {
              //   anim_id: animId,
              //   anim_status: hmUI.anim_status.RESUME
              // })
  
              // const currentStatus = textWidget.getProperty(hmUI.prop.ANIM_STATUS, animId)
  
              const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
                x: px(96),
                y: px(120),
                w: px(288),
                h: px(46),
                color: 0xffffff,
                text_size: px(36),
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                text_style: hmUI.text_style.NONE,
                text: "HELLO ZEPPOS",
              });
  
              const anim_step1 = {
                anim_rate: "linear",
                anim_duration: 2000,
                anim_from: px(10),
                anim_to: px(110),
                anim_prop: hmUI.prop.X,
              };
  
              const anim_step2 = {
                anim_rate: "linear",
                anim_duration: 2000,
                anim_from: px(120),
                anim_to: px(300),
                anim_prop: hmUI.prop.Y,
              };
  
              const animId = textWidget.setProperty(hmUI.prop.ANIM, {
                anim_steps: [anim_step1, anim_step2],
                anim_fps: 25,
              });
  
              textWidget.setProperty(hmUI.prop.ANIM_STATUS, {
                anim_id: animId,
                anim_status: hmUI.anim_status.PAUSE,
              });
  
              textWidget.setProperty(hmUI.prop.ANIM_STATUS, {
                anim_id: animId,
                anim_status: hmUI.anim_status.RESUME,
              });
  
              const currentStatus = textWidget.getProperty(
                hmUI.prop.ANIM_STATUS,
                animId
              );
  
              /////////////////////////////////////////////////////
  
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
  