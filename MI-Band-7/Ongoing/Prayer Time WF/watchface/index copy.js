try {
  (() => {
    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;
    var h = new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
      "drink"
    );
    ("use strict");
    console.log("----->>>currenthello");

    console.log(__$$hmAppManager$$__.currentApp.pid);
    console.log(__$$hmAppManager$$__.currentApp.current);

    const jstime = hmSensor.createSensor(hmSensor.id.TIME)
    const weather = hmSensor.createSensor(hmSensor.id.WEATHER)


    let timeHourTensFontArray, timeHourOnesFontArray, timeMinutesTensFontArray, timeMinutesOnesFontArray
    let timeHourTens, timeHourOnes, timeMinutesTens, timeMinutesOnes
    let weatherWidget

    function setImgNumber(widget, fontArray, number) {
      widget.setProperty(hmUI.prop.SRC, fontArray[number]);
    }

    function updateTime() {


      setImgNumber(timeHourTens, timeHourTensFontArray, parseInt(jstime.format_hour / 10));
      setImgNumber(timeHourOnes, timeHourOnesFontArray, parseInt(jstime.format_hour % 10));
      setImgNumber(timeMinutesTens, timeMinutesTensFontArray, parseInt(jstime.minute / 10));
      setImgNumber(timeMinutesOnes, timeMinutesOnesFontArray, parseInt(jstime.minute % 10));

      setImgNumber(timeHourTensAOD, timeHourTensFontArray, parseInt(jstime.format_hour / 10));
      setImgNumber(timeHourOnesAOD, timeHourOnesFontArray, parseInt(jstime.format_hour % 10));
      setImgNumber(timeMinutesTensAOD, timeMinutesTensFontArray, parseInt(jstime.minute / 10));
      setImgNumber(timeMinutesOnesAOD, timeMinutesOnesFontArray, parseInt(jstime.minute % 10));
    }



    function updateWeather() {
      const forecastData = weather.getForecastWeather().forecastData
      if (forecastData.count) {
        const element = forecastData.data[0]
        weatherWidget.setProperty(hmUI.prop.TEXT, element.high + "u." + element.low + "u");
      }
    }

    const logger = DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    __$$module$$__.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 20,
          y: 0,
          src: 'images/0.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        });
        hmUI.createWidget(hmUI.widget.IMG_ANIM, {
          x: -35,
          y: 77,
          anim_path: 'images',
          anim_prefix: 'anim0',
          anim_ext: 'png',
          anim_fps: 50,
          anim_size: 100,
          repeat_count: 255,
          anim_repeat: true,
          anim_status: hmUI.anim_status.START,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_ANIM, {
          x: 30,
          y: 385,
          anim_path: 'images',
          anim_prefix: 'anim1',
          anim_ext: 'png',
          anim_fps: 31,
          anim_size: 31,
          repeat_count: 255,
          anim_repeat: true,
          anim_status: hmUI.anim_status.START,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_ANIM, {
          x: 126,
          y: 338,
          anim_path: 'images',
          anim_prefix: 'anim2',
          anim_ext: 'png',
          anim_fps: 27,
          anim_size: 27,
          repeat_count: 255,
          anim_repeat: true,
          anim_status: hmUI.anim_status.START,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        timeHourTensFontArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png']
        timeHourOnesFontArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png']
        timeMinutesTensFontArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png']
        timeMinutesOnesFontArray = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png']
        timeHourTens = hmUI.createWidget(hmUI.widget.IMG, {
          x: 23,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        timeHourOnes = hmUI.createWidget(hmUI.widget.IMG, {
          x: 59,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        timeMinutesTens = hmUI.createWidget(hmUI.widget.IMG, {
          x: 103,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        timeMinutesOnes = hmUI.createWidget(hmUI.widget.IMG, {
          x: 139,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })

        timeHourTensAOD = hmUI.createWidget(hmUI.widget.IMG, {
          x: 23,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_AOD
        })
        timeHourOnesAOD = hmUI.createWidget(hmUI.widget.IMG, {
          x: 59,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_AOD
        })
        timeMinutesTensAOD = hmUI.createWidget(hmUI.widget.IMG, {
          x: 103,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_AOD
        })
        timeMinutesOnesAOD = hmUI.createWidget(hmUI.widget.IMG, {
          x: 139,
          y: 279,
          src: 'images/1.png',
          show_level: hmUI.show_level.ONLY_AOD
        })

        hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 20,
          y: 390,
          h_space: 3,
          font_array: ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png'],
          align_h: hmUI.align.RIGHT,
          type: hmUI.data_type.STEP,
          w: 143,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_DATE, {
          day_startX: 36,
          day_startY: 353,
          day_align: hmUI.align.CENTER_H,
          day_space: 2,
          day_zero: true,
          day_en_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          day_sc_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          day_tc_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_DATE, {
          day_startX: 36,
          day_startY: 353,
          day_align: hmUI.align.CENTER_H,
          day_space: 2,
          day_zero: true,
          day_en_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          day_sc_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          day_tc_array: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'],
          show_level: hmUI.show_level.ONLY_AOD
        })
        hmUI.createWidget(hmUI.widget.IMG_TIME, {
          am_x: 124,
          am_y: 263,
          pm_x: 124,
          pm_y: 263,
          am_en_path: 'images/28.png',
          pm_en_path: 'images/29.png',
          am_sc_path: 'images/28.png',
          pm_sc_path: 'images/29.png',
          show_level: hmUI.show_level.ONLY_AOD
        })
        hmUI.createWidget(hmUI.widget.IMG_TIME, {
          am_x: 124,
          am_y: 263,
          pm_x: 124,
          pm_y: 263,
          am_en_path: 'images/28.png',
          pm_en_path: 'images/29.png',
          am_sc_path: 'images/28.png',
          pm_sc_path: 'images/29.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_WEEK, {
          x: 78,
          y: 353,
          week_en: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          week_sc: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          week_tc: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          show_level: hmUI.show_level.ONLY_AOD
        })
        hmUI.createWidget(hmUI.widget.IMG_WEEK, {
          x: 78,
          y: 353,
          week_en: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          week_sc: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          week_tc: ['images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png'],
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 45,
          y: 28,
          src: 'images/41.png',
          type: hmUI.system_status.DISTURB,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 84,
          y: 28,
          src: 'images/42.png',
          type: hmUI.system_status.LOCK,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 123,
          y: 28,
          src: 'images/40.png',
          type: hmUI.system_status.DISCONNECT,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 25,
          y: 58,
          image_array: ['images/43.png', 'images/44.png', 'images/45.png', 'images/46.png', 'images/47.png', 'images/48.png', 'images/49.png', 'images/50.png', 'images/51.png', 'images/52.png'],
          image_length: 10,
          type: hmUI.data_type.BATTERY,
          show_level: hmUI.show_level.ONLY_AOD
        })
        hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 25,
          y: 58,
          image_array: ['images/43.png', 'images/44.png', 'images/45.png', 'images/46.png', 'images/47.png', 'images/48.png', 'images/49.png', 'images/50.png', 'images/51.png', 'images/52.png'],
          image_length: 10,
          type: hmUI.data_type.BATTERY,
          show_level: hmUI.show_level.ONLY_NORMAL
        })

        updateTime();
        hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
          resume_call: (function () {
            updateTime();
          })
        })
        timer.createTimer(0, 1000, (function (option) {
          updateTime();
        }))

      },
      onInit() {
        console.log("index page.js on init invoke");
        this.init_view();
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
    /*
     * end js
     */
  })();
} catch (e) {
  console.log(e);
}