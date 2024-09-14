try {
    (() => {
      var __$$app$$__ = __$$hmAppManager$$__.currentApp;
      var __$$module$$__ = __$$app$$__.current;
      var h = new DeviceRuntimeCore.WidgetFactory(
        new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
        "drink"
      );
      ("use strict");
      console.log("----->>>current");
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
            hmUI.createWidget(hmUI.widget.IMG, {x: 0, y: 0, src: 'bgx/bgx.png', show_level: hmUI.show_level.ONLY_NORMAL});
timeHourTensFontArray = ['images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png']
timeHourOnesFontArray = ['images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png']
timeMinutesTensFontArray = ['images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png']
timeMinutesOnesFontArray = ['images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png']
timeHourTens = hmUI.createWidget(hmUI.widget.IMG, { x: 48, y: 47, src: 'images/3.png', show_level: hmUI.show_level.ONLY_NORMAL })
timeHourOnes = hmUI.createWidget(hmUI.widget.IMG, { x: 99, y: 47, src: 'images/3.png', show_level: hmUI.show_level.ONLY_NORMAL })
timeMinutesTens = hmUI.createWidget(hmUI.widget.IMG, { x: 48, y: 122, src: 'images/3.png', show_level: hmUI.show_level.ONLY_NORMAL })
timeMinutesOnes = hmUI.createWidget(hmUI.widget.IMG, { x: 99, y: 122, src: 'images/3.png', show_level: hmUI.show_level.ONLY_NORMAL })
hmUI.createWidget(hmUI.widget.TEXT_IMG, { x: 21, y: 427, h_space: -2, font_array: ['images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png', 'images/21.png', 'images/22.png'], align_h: hmUI.align.CENTER_H, type: hmUI.data_type.BATTERY, unit_en: 'images/23.png', unit_sc: 'images/23.png', unit_tc: 'images/23.png', w: 151, show_level: hmUI.show_level.ONLY_NORMAL})
updateTime();
hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, { resume_call: (function () {updateTime(); }) })
timer.createTimer(0, 1000, (function (option) {updateTime(); }))
            
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