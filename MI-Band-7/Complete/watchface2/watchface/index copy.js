try {
  (() => {
    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;
    var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), 'drink');
    /*
  * huamiOS bundle tool v1.0.17
  * Copyright © Huami. All Rights Reserved
  */
    'use strict';
    console.log("----->>>current");
    console.log(__$$hmAppManager$$__.currentApp.pid);
    console.log(__$$hmAppManager$$__.currentApp.current);

    let nHourX = 35
    let nHourY = 157
    // let nMinuteX = 35
    let nMinuteY = 247
    let nAmPmX = 80
    let nAmPmY = 125
    let nWeekX = 31
    let nWeekY = 341
    let nDayX = 20
    let nDayY = 258

    let arrFont = [];
    let arrFonte = [];
    let arrWeek = [];
    let arrWeekSc = [];
    let arrWeekTc = [];
    let arrTime = [];
    let arrPower = [];
    let arrStep = []
    let arrStepText = []   
    for (let i = 0; i < 10; i++) {
      arrFont.push(`images/data/${i}.png`)
      arrFonte.push(`images/date/${i}.png`)
      arrTime.push(`images/time/${i}.png`)
      arrPower.push(`images/power/${i}.png`)
      arrStep.push(`images/steplevel/${i}.png`)
      arrStepText.push(`images/stepdata/${i}.png`)
    }
    for (let i = 1; i < 8; i++) {
      arrWeek.push(`images/week/en/${i}.png`)
      arrWeekSc.push(`images/week/sc/${i}.png`)
      arrWeekTc.push(`images/week/Tc/${i}.png`)
    }   
    const objWeekOption = {
      x: nWeekX,
      y: nWeekY,
      week_en: arrWeek,
      week_sc: arrWeekSc,
      week_tc: arrWeekTc,
      show_level: hmUI.show_level.ONLY_NORMAL 
    }
    let objTime = {
      hour_zero: true,
      hour_startX: nHourX,
      hour_startY: nHourY,
      hour_array: arrTime,
      hour_align: hmUI.align.LEFT,
      hour_unit_sc: "images/time/dot.png",
      hour_unit_tc: "images/time/dot.png",
      hour_unit_en: "images/time/dot.png",
      hour_space: 8,
      minute_space: 8,
      minute_zero: true,
      minute_startX: nHourX,
      minute_startY: nMinuteY,
      minute_array: arrTime,
      minute_align: hmUI.align.LEFT,
      show_level: hmUI.show_level.ONLY_NORMAL ,
    }
    let objMonthOption = {
      month_startX: 90,
      month_startY: 341,
      month_zero: 1,
      month_en_array: arrFonte,
      month_sc_array: arrFonte,
      month_tc_array: arrFonte,
      month_unit_sc: "images/date/fenhao.png", //单位
      month_unit_tc: "images/date/fenhao.png",
      month_unit_en: "images/date/fenhao.png",
      month_space: 1,//文字间隔
      // day_startX: nDayX,
      // day_startY: nDayY,
      day_zero: 1,
      day_follow: true,
      day_space: 1,//文字间隔
      day_en_array: arrFonte,
      day_sc_array: arrFonte,
      day_tc_array: arrFonte,
      show_level: hmUI.show_level.ONLY_NORMAL ,
    }
    let objAmPm = {
      am_x: nAmPmX,
      am_y: nAmPmY,
      am_sc_path: "images/ampm/am_cn.png",
      am_en_path: "images/ampm/am_en.png",
      pm_x: nAmPmX,
      pm_y: nAmPmY,
      pm_sc_path: "images/ampm/pm_cn.png",
      pm_en_path: "images/ampm/pm_en.png",
      show_level: hmUI.show_level.ONLY_NORMAL ,
    } 
    const objImgBg = {
      objBgImg : { //表盘底层背景
          x: 0,
          y: 0,
          src: "images/bg/bg.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
      },
      objBgTime : { //表盘24小时
        x: 79,
        y: 125,
        src: "images/ampm/24H.png",
        show_level: hmUI.show_level.ONLY_NORMAL,
    },      
      objstatusBgLock : { //锁屏背景
          x: 88,
          y: 13,
          src: "images/status/lockclose.png",
          alpha:80,
          show_level: hmUI.show_level.ONLY_NORMAL,
      },
      objstatusBg : { //开启锁屏
          x: 88,
          y: 13,
          src: "images/status/lock.png",
          type:hmUI.system_status.LOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
      },
    }
    let objHeartText = {
      x: 90,
      y: 47,
      w: 100,
      type: hmUI.data_type.HEART,
      font_array: arrFont,
      invalid_image: `images/data/none.png`,
      show_level: hmUI.show_level.ONLY_NORMAL,
    }
    const objStep = {
      bg:{
        x: 50,
        y: 390,    
        src: "images/stepbg.png",
        show_level: hmUI.show_level.ONLY_NORMAL
      },
      text:{
        x: 0,
        y: 439,
        w: 192,       
        type: hmUI.data_type.STEP,
        font_array: arrFont,    
        h_space: -1,      
        align_h: hmUI.align.CENTER_H,
        show_level: hmUI.show_level.ONLY_NORMAL,
      },
      point:{
        center_x: 96,
        center_y: 435,
        x: 2,
        y: 38,
        start_angle:0,
        end_angle:360,
        src: `images/pointer.png`,
        type:hmUI.data_type.STEP,    
        show_level: hmUI.show_level.ONLY_NORMAL,  
      }
    }
    const logger = DeviceRuntimeCore.HmLogger.getLogger("defult");
    __$$module$$__.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        hmUI.createWidget(hmUI.widget.IMG, objImgBg.objBgImg)
        hmUI.createWidget(hmUI.widget.IMG, objImgBg.objBgTime)
        hmUI.createWidget(hmUI.widget.IMG, objImgBg.objstatusBgLock)
        hmUI.createWidget(hmUI.widget.TEXT_IMG, objHeartText)       
        hmUI.createWidget(hmUI.widget.IMG_WEEK, objWeekOption)
        hmUI.createWidget(hmUI.widget.IMG_TIME, objTime)
        hmUI.createWidget(hmUI.widget.IMG_TIME, objAmPm)
        hmUI.createWidget(hmUI.widget.IMG_DATE, objMonthOption)
        
        hmUI.createWidget(hmUI.widget.IMG, objStep.bg)
        hmUI.createWidget(hmUI.widget.IMG_POINTER, objStep.point);
        hmUI.createWidget(hmUI.widget.TEXT_IMG, objStep.text)
        hmUI.createWidget(hmUI.widget.IMG_STATUS, objImgBg.objstatusBg)    
       
      },
      onInit() {
        console.log('index page.js on init invoke');
        this.init_view();
      },
      onReady() {
        console.log('index page.js on ready invoke')
      },
      onShow() {
        console.log('index page.js on show invoke')
      },
      onHide() {
        console.log('index page.js on hide invoke')
      },
      onDestory() {
        console.log('index page.js on destory invoke')
      },
    });
    /*
    * end js
    */
  })()
} catch (e) {
  console.log(e)
}
