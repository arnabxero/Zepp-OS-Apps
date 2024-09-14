try {
  (() => {
    var _app = __$$hmAppManager$$__.currentApp;
    var _module = _app.current;

    ////////// Prayer time json data ////////////////
    const prayerTimes = {
      "22-01-2022": [
        "05:30 (+03)",
        "11:56 (+03)",
        "14:55 (+03)",
        "17:15 (+03)",
        "18:23 (+03)"
      ],
      "03-03-2022": [
        "05:30 (+03)",
        "11:57 (+03)",
        "14:56 (+03)",
        "17:16 (+03)",
        "18:23 (+03)"
      ],
      "05-04-2022": [
        "05:31 (+03)",
        "11:57 (+03)",
        "14:56 (+03)",
        "17:17 (+03)",
        "18:24 (+03)"
      ],
      "07-05-2022": [
        "05:31 (+03)",
        "11:58 (+03)",
        "14:57 (+03)",
        "17:17 (+03)",
        "18:24 (+03)"
      ],
      "09-06-2022": [
        "05:31 (+03)",
        "11:58 (+03)",
        "14:57 (+03)",
        "17:18 (+03)",
        "18:25 (+03)"
      ]
    };

    ///////// UI Modules API ////////////
    const jstime = hmSensor.createSensor(hmSensor.id.TIME)

    /////// Color Array ///////////
    var barColor = {};

    // Define key points for color transitions
    const colorPoints = {
      140: { r: 0, g: 255, b: 0 },    // Green
      115: { r: 255, g: 255, b: 0 },  // Yellow
      90: { r: 255, g: 165, b: 0 },   // Orange
      65: { r: 255, g: 105, b: 180 }, // Pink
      40: { r: 255, g: 20, b: 147 },  // Reddish Pink
      0: { r: 255, g: 0, b: 0 }       // Red
    };

    // Function to interpolate between two colors
    function interpolateColor(color1, color2, factor) {
      var result = color1.slice();
      for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }
      return result;
    }

    // Generate the colors for the barColor array
    var colorKeys = Object.keys(colorPoints).map(Number).sort((a, b) => b - a);
    for (let i = 0; i < colorKeys.length - 1; i++) {
      let start = colorKeys[i];
      let end = colorKeys[i + 1];
      let startColor = colorPoints[start];
      let endColor = colorPoints[end];
      let steps = (start - end) / 5;
      for (let j = 0; j <= steps; j++) {
        let factor = j / steps;
        let color = interpolateColor([startColor.r, startColor.g, startColor.b], [endColor.r, endColor.g, endColor.b], factor);
        let colorCode = `0x${(color[0] << 16 | color[1] << 8 | color[2]).toString(16).padStart(6, '0')}`;
        barColor[start - j * 5] = colorCode;
      }
    }
    ///////// COlor Array ///////////////

    ///////// Hijri Convertion ///////////////
    // Hijri date conversion function
    function convertToHijri(jsTime) {
      const WDAYS = ['Ahad', 'Ithnin', 'Thulatha', 'Arbaa', 'Khamis', 'Jumuah', 'Sabt'];
      const MONTHS = ['Muharram', 'Safar', 'Rabi\'ul Awwal', 'Rabi\'uth Thani', 'Jumadal Ula', 'Jumadal Akhira', 'Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal', 'Dhul Qa\'dah', 'Dhul Hijjah'];
      let day = jsTime.day,
        month = jsTime.month,
        year = jsTime.year;

      // Calculation based on Umm al-Qura calendar
      let m = month + 1;
      let y = year;
      if (m < 3) {
        y -= 1;
        m += 12;
      }

      let a = Math.floor(y / 100.);
      let b = 2 - a + Math.floor(a / 4.);
      let ijd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;

      let z = ijd - 1948440 + 10632;
      let n = Math.floor((z - 1) / 10631.);
      z = z - 10631 * n + 354;
      let j = (Math.floor((10985 - z) / 5316)) * (Math.floor((50 * z) / 17719)) + (Math.floor(z / 5670)) * (Math.floor((43 * z) / 15238));
      z = z - (Math.floor((30 - j) / 15)) * (Math.floor((17719 * j) / 50)) - (Math.floor(j / 16)) * (Math.floor((15238 * j) / 43)) + 29;

      month = Math.floor((24 * z) / 709);
      day = z - Math.floor((709 * month) / 24);
      year = 30 * n + j - 30;

      let wday = (ijd + 1) % 7; // Day of the week

      return {
        hijriDate: `${String(day).padStart(2, '0')}-${String(month + 1).padStart(2, '0')}-${year}`,
        hijriMonth: MONTHS[month],
        hijriWeekday: WDAYS[wday]
      };
    }
    ///////// Hijri Convertion ///////////////

    function getDateString() {
      let currentDay = String(jstime.day).padStart(2, '0');
      let currentMonth = String(jstime.month).padStart(2, '0');
      let currentYear = jstime.year;
      return `${currentDay}-${currentMonth}-${currentYear}`;
    }

    ////////////////////////////////////////////




    ////////////////////////////////////////////
    const background = hmUI.createWidget(hmUI.widget.IMG, {
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      src: "bg/bg-1.png",
      show_level: hmUI.show_level.ONLY_NORMAL
    });

    const enDate = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 55,
      h: 40,
      w: 192,
      color: 0xffffff,
      text_size: 20,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: ''
    });

    const arDate = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 30,
      h: 40,
      w: 192,
      color: 0xffffff,
      text_size: 20,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: ''
    });

    const enTime = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 228,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 70,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text: ''
    });

    const enAMPM = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 293,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 15,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.RIGHT,
      text: ''
    });

    const NextPrayerStr = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 320,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.RIGHT,
      text: 'Next Prayer'
    });

    const NextPrayerTime = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 31,
      y: 362,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 25,
      // align_h: hmUI.align.CENTER_H,
      text: '12:12'
    });

    const NextPrayerWaqt = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 107,
      y: 367,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 17,
      // align_h: hmUI.align.CENTER_H,
      text: 'Juhar'
    });

    const CurrentPrayerWaqt = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 110,
      y: 114,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 17,
      // align_h: hmUI.align.CENTER_H,
      text: 'Fajr'
    });

    const CurrentPrayerTime = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 33,
      y: 108,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 25,
      // align_h: hmUI.align.CENTER_H,
      text: '06:00'
    });

    const RemainingPrayerTime = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 30,
      y: 157,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 25,
      // align_h: hmUI.align.CENTER_H,
      text: '06:00'
    });


    var totalTime = 100;
    var remainingTime = 100;

    const timeRemainBar = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 26,
      y: 203,
      w: 140,
      h: 14,
      radius: 20,
      color: 0x00ff00
    })

    function updateTimeRemainBar() {
      let remaining = 20; // Math.floor((remainingTime / totalTime) * 140);

      var color = barColor[remaining - (remaining % 5)];
      timeRemainBar.setProperty(hmUI.prop.MORE, {
        w: remaining,
      });

      timeRemainBar.setProperty(hmUI.prop.MORE, { color: color });
    }

    function getTimeString() {
      let hours = jstime.hour;
      let minutes = String(jstime.minute).padStart(2, '0');
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      hours = String(hours).padStart(2, '0');
      return {
        time: `${hours}:${minutes}`,
        ampm: ampm
      };
    }

    function getTodayPrayerTimes() {
      return prayerTimes[getDateString()] || [];
    }

    function convertToSeconds(inputString) {
      const timePart = inputString.split(' ')[0].trim();
      const [hours, minutes] = timePart.split(':').map(Number);
      const totalSeconds = (hours * 3600) + (minutes * 60);
      return totalSeconds;
    }

    function findCurrentPrayerTime(TodayPrayerTimes) {
      let currentTimeInSeconds = (jstime.hour * 60 * 60) + (jstime.minute * 60);
      let TodayPrayerTimesInSeconds = [];
      let AllWaqt = ["Fajr", "Juhar", "Asar", "Magrib", "Isha"];
      let currentWaqt = "Fajr";
      let nextWaqt = "Fajr";

      let nextPrayerTime = "00:00";
      let currentPrayerTime = "00:00";

      for (let i = 0; i < TodayPrayerTimes.length; i++) {
        TodayPrayerTimesInSeconds[i] = convertToSeconds(TodayPrayerTimes[i]);
      }

      for (let i = 0; i < TodayPrayerTimes.length; i++) {
        if (currentTimeInSeconds >= TodayPrayerTimesInSeconds[i] && currentTimeInSeconds < TodayPrayerTimesInSeconds[i + 1]) {
          currentWaqt = AllWaqt[i];
          nextWaqt = AllWaqt[i + 1];
          currentPrayerTime = TodayPrayerTimes[i];
          nextPrayerTime = TodayPrayerTimes[i + 1];
        }
      }
      CurrentPrayerTime.setProperty(hmUI.prop.MORE, {
        text: currentPrayerTime.split(' ')[0].trim(),
      });
      NextPrayerTime.setProperty(hmUI.prop.MORE, {
        text: nextPrayerTime.split(' ')[0].trim(),
      });

      CurrentPrayerWaqt.setProperty(hmUI.prop.MORE, {
        text: currentWaqt,
      });
      NextPrayerWaqt.setProperty(hmUI.prop.MORE, {
        text: nextWaqt,
      });

      totalTime = parseInt((convertToSeconds(nextPrayerTime) - convertToSeconds(currentPrayerTime)));
      remainingTime = parseInt(convertToSeconds(nextPrayerTime) - ((jstime.hour * 60 * 60) + (jstime.minute * 60)));

      RemainingPrayerTime.setProperty(hmUI.prop.MORE, {
        text: remainingTime,
      });
    }

    function updateWF() {
      let hijriInfo = convertToHijri(jstime);
      arDate.setProperty(hmUI.prop.TEXT, 'Ar: ' + hijriInfo.hijriDate);
      enDate.setProperty(hmUI.prop.TEXT, 'En: ' + getDateString());
      enTime.setProperty(hmUI.prop.TEXT, getTimeString().time);
      enAMPM.setProperty(hmUI.prop.TEXT, getTimeString().ampm);
      updateTimeRemainBar();

      let TodayPrayerTimes = getTodayPrayerTimes();
      findCurrentPrayerTime(TodayPrayerTimes);



    }

    const logger = DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    _module.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.setLayerScrolling(false);

        const dateTimer = timer.createTimer(0, 1000, (function (option) {
          updateWF();
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