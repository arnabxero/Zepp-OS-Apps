try {
  (() => {
    var _app = __$$hmAppManager$$__.currentApp;
    var _module = _app.current;

    ////////// Prayer time json data ////////////////
    const prayerTimes = {
      "09-04-2022": [
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

    function parsePrayerTime(prayerTime) {
      // Extracts the time part and ignores the timezone part
      const timePart = prayerTime.split(' ')[0];
      const [hours, minutes] = timePart.split(':').map(Number);
      return hours * 60 + minutes; // convert time to minutes
    }

    const prayerNames = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    function getPrayerTimesForToday() {
      const dateString = getDateString();
      // console.log(dateString);
      return prayerTimes[dateString] || [];
    }

    function getCurrentAndNextPrayer() {
      const times = getPrayerTimesForToday();
      const now = new Date();
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes(); // convert current time to minutes
      let currentPrayer = null;
      let nextPrayer = null;

      for (let i = 0; i < times.length; i++) {
        const prayerTimeInMinutes = parsePrayerTime(times[i]); // parse prayer time

        if (currentTimeInMinutes < prayerTimeInMinutes) {
          nextPrayer = { name: prayerNames[i], time: times[i] };
          if (i > 0) {
            currentPrayer = { name: prayerNames[i - 1], time: times[i - 1] };
          }
          break;
        }
      }

      // Handle edge case for last prayer of the day
      if (!nextPrayer) {
        nextPrayer = { name: prayerNames[0], time: times[0] };
        currentPrayer = { name: prayerNames[times.length - 1], time: times[times.length - 1] };
      }

      return { currentPrayer: currentPrayer, nextPrayer: nextPrayer };
    }

    function calculateTimeLeftForPrayer(prayerTime) {
      const prayerTimeInMinutes = parsePrayerTime(prayerTime);
      const now = new Date();
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
      return prayerTimeInMinutes - currentTimeInMinutes;
    }
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
      x: 0,
      y: 320,
      h: 60,
      w: 192,
      color: 0x000000,
      text_size: 18,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.RIGHT,
      text: ''
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
      let remaining = Math.floor((remainingTime / totalTime) * 140);
      console.log(remaining);

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


    function updateWF() {
      let prayerTimesAll = getCurrentAndNextPrayer();

      // console.log(prayerTimesAll.nextPrayer);
      // const { currentPrayer, nextPrayer } = getCurrentAndNextPrayer();
      // const timeLeftForNextPrayer = calculateTimeLeftForPrayer(nextPrayer.time);
      console.log("time left" + getCurrentAndNextPrayer().nextPrayer.time);



      // Update the time remaining bar
      remainingTime = getCurrentAndNextPrayer().nextPrayer.time;
      totalTime = calculateTimeLeftForPrayer(getCurrentAndNextPrayer().currentPrayer.time) + remainingTime; // Total time between the current and next prayer
      updateTimeRemainBar();
      // console.log("time left");

      let hijriInfo = convertToHijri(jstime);
      arDate.setProperty(hmUI.prop.TEXT, 'Ar: ' + hijriInfo.hijriDate);

      enDate.setProperty(hmUI.prop.TEXT, 'En: ' + getDateString());
      enTime.setProperty(hmUI.prop.TEXT, getTimeString().time);
      enAMPM.setProperty(hmUI.prop.TEXT, getTimeString().ampm);
      // updateTimeRemainBar();

    }

    const logger = DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    _module.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.setLayerScrolling(false);

        const dateTimer = timer.createTimer(0, 1000, (function (option) {
          updateWF();
          remainingTime = remainingTime - 10;
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