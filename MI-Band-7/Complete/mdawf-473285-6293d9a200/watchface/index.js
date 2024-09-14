try {
  (() => {
    const init_view = () => {
      const ColorsArray = ['0xffffff', '0xff0000', '0xff7000', '0xffd800', '0x00ff00', '0x00ffff', '0x0000ff', '0x7000ff']

      const editColorGroup = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 101,
        x: 0,
        y: 70,
        w: 192,
        h: 120,
        select_image: 'images/zero.png',
        un_select_image: 'images/zero.png',
        default_type: 0,
        optional_types: [
          { type: 0, preview: 'images/edit/cg_0.png', title_en: 'Градации серого' },
          { type: 1, preview: 'images/edit/cg_1.png', title_en: 'Красный-зелёный' },
          { type: 2, preview: 'images/edit/cg_2.png', title_en: 'Зелёный-синий' },
          { type: 3, preview: 'images/edit/cg_3.png', title_en: 'Синий-красный' }
        ],
        count: 4,
        tips_x: 50,
        tips_y: -40,
        tips_width: 92,
        tips_margin: 5,
        tips_BG: 'images/tips_bg.png'
      })

      let colorGroupIndex = editColorGroup.getProperty(hmUI.prop.CURRENT_TYPE)

      const editColor = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 102,
        x: 0,
        y: 190,
        w: 192,
        h: 100,
        select_image: 'images/zero.png',
        un_select_image: 'images/zero.png',
        default_type: 0,
        optional_types: [
          { type: 0, preview: 'images/edit/cb_0.png', title_en: '1' },
          { type: 1, preview: 'images/edit/cb_1.png', title_en: '2' },
          { type: 2, preview: 'images/edit/cb_2.png', title_en: '3' },
          { type: 3, preview: 'images/edit/cb_3.png', title_en: '4' },
          { type: 4, preview: 'images/edit/cb_4.png', title_en: '5' },
          { type: 5, preview: 'images/edit/cb_5.png', title_en: '6' },
          { type: 6, preview: 'images/edit/cb_6.png', title_en: '7' },
          { type: 7, preview: 'images/edit/cb_7.png', title_en: '8' },
          { type: 8, preview: 'images/edit/cb_8.png', title_en: '9' },
          { type: 9, preview: 'images/edit/cb_9.png', title_en: '10' },
          { type: 10, preview: 'images/edit/cb_10.png', title_en: '11' }
        ],
        count: 11,
        tips_x: 50,
        tips_y: 50,
        tips_width: 92,
        tips_margin: 5,
        tips_BG: 'images/tips_bg.png'
      })

      let colorIndex = editColor.getProperty(hmUI.prop.CURRENT_TYPE)

      let ObjectColor = String, ObjectColor2 = String
      function doubleZero(a) {
        return a == 0? '00' : a.toString(16)
      }
 
      if (hmSetting.getScreenType() != hmSetting.screen_type.SETTINGS) {
        if (colorGroupIndex == 0) {
          if (colorIndex == 0) {
            ObjectColor = '0xffffff'
            ObjectColor2 = '0x7f7f7f'
          } else {
            ObjectColor = '0x' + doubleZero(Math.round(255 * (1 - colorIndex * 0.08)).toString(16))
                               + doubleZero(Math.round(255 * (1 - colorIndex * 0.08)).toString(16))
                               + doubleZero(Math.round(255 * (1 - colorIndex * 0.08)).toString(16))
            ObjectColor2 = '0x' + doubleZero(Math.round(255 * (1 - colorIndex * 0.08) * 0.5).toString(16))
                                + doubleZero(Math.round(255 * (1 - colorIndex * 0.08) * 0.5).toString(16))
                                + doubleZero(Math.round(255 * (1 - colorIndex * 0.08) * 0.5).toString(16))
          }
        } else if (colorGroupIndex == 1) {
          if (colorIndex < 5) {
            ObjectColor = '0xff' +  doubleZero(colorIndex * 51) + '00'
            ObjectColor2 = '0x7f' +  doubleZero(colorIndex * 25) + '00'
          } else if (colorIndex == 5) {
            ObjectColor = '0xffff00'
            ObjectColor2 = '0x7f7f00'
          } else {
            ObjectColor = '0x' + doubleZero(255 - (colorIndex - 5)  * 51) + 'ff00'
            ObjectColor2 = '0x' + doubleZero(125 - (colorIndex - 5)  * 25) + '7f00'
          }
        } else if (colorGroupIndex == 2) {
          if (colorIndex < 5) {
            ObjectColor = '0x00ff' +  doubleZero(colorIndex * 51)
            ObjectColor2 = '0x007f' +  doubleZero(colorIndex * 25)
          } else if (colorIndex == 5) {
            ObjectColor = '0x00ffff'
            ObjectColor2 = '0x007f7f'
          } else {
            ObjectColor = '0x00' + doubleZero(255 - (colorIndex - 5)  * 51) + 'ff'
            ObjectColor2 = '0x00' + doubleZero(125 - (colorIndex - 5)  * 25) + '7f'
          }
        } else if (colorGroupIndex == 3) {
          if (colorIndex < 5) {
            ObjectColor = '0x' +  doubleZero(colorIndex * 51) + '00ff'
            ObjectColor2 = '0x' +  doubleZero(colorIndex * 25) + '007f'
          } else if (colorIndex == 5) {
            ObjectColor = '0xff00ff'
            ObjectColor2 = '0x7f007f'
          } else {
            ObjectColor = '0xff00' + doubleZero(255 - (colorIndex - 5)  * 51)
            ObjectColor2 = '0x7f00' + doubleZero(125 - (colorIndex - 5)  * 25)
          }
        }
      }

      const editAnimationTime = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 103,
        x: 0,
        y: 298,
        w: 192,
        h: 192,
        select_image: 'images/zero.png',
        un_select_image: 'images/zero.png',
        default_type: 40,
        optional_types: [
          { type: 20, preview: 'images/edit/at_1.png', title_en: 'Резко' },
          { type: 40, preview: 'images/edit/at_2.png', title_en: 'Быстро' },
          { type: 60, preview: 'images/edit/at_3.png', title_en: 'Плавно' },
          { type: 100, preview: 'images/edit/at_5.png', title_en: 'Красиво' }
        ],
        count: 4,
        tips_x: 50,
        tips_y: 130,
        tips_width: 92,
        tips_margin: 5,
        tips_BG: 'images/tips_bg.png'
      })

      let count = editAnimationTime.getProperty(hmUI.prop.CURRENT_TYPE)

      let Time = hmSensor.createSensor(hmSensor.id.TIME)
      let HourTens = parseInt(Time.hour / 10)
      let HourOnes = parseInt(Time.hour % 10)
      let MinuteTens = parseInt(Time.minute / 10)
      let MinuteOnes = parseInt(Time.minute % 10)
      const DigitalDetails = []
      const PosArray = [[12, 106], [112, 106], [12, 256], [112, 256]]
      for (let i = 0; i < 4; i++) { DigitalDetails[i] = [] }

      function DigitalDelete(i) {
        for (let k = 0; k < 15; k++) {
          if (DigitalDetails[i][k] != undefined) hmUI.deleteWidget(DigitalDetails[i][k])
        }
      }

      function DigitalCreate(num, i) {

        DigitalDetails[i][0] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0] + 30,
          y: PosArray[i][1],
          w: 38,
          h: 38,
          start_angle: -90,
          end_angle: 0,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][1] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0] + 60,
          y: PosArray[i][1] + 15,
          w: 8,
          h: 38,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][2] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0] + 30,
          y: PosArray[i][1] + 30,
          w: 38,
          h: 38,
          start_angle: 0,
          end_angle: 90,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        if (i != 0) {
          DigitalDetails[i][3] = hmUI.createWidget(hmUI.widget.ARC, {
            x: PosArray[i][0] + 30,
            y: PosArray[i][1] + 60,
            w: 38,
            h: 38,
            start_angle: -90,
            end_angle: 0,
            color: ObjectColor,
            line_width: 8,
            show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
          })
        }

        DigitalDetails[i][4] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0] + 60,
          y: PosArray[i][1] + 75,
          w: 8,
          h: 38,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][5] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0] + 30,
          y: PosArray[i][1] + 90,
          w: 38,
          h: 38,
          start_angle: 0,
          end_angle: 90,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][6] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0] + 15,
          y: PosArray[i][1] + 120,
          w: 38,
          h: 8,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][7] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0],
          y: PosArray[i][1] + 90,
          w: 38,
          h: 38,
          start_angle: 90,
          end_angle: 180,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][8] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0],
          y: PosArray[i][1] + 75,
          w: 8,
          h: 38,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][9] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0],
          y: PosArray[i][1] + 60,
          w: 38,
          h: 38,
          start_angle: 180,
          end_angle: 270,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        if (i != 0) {
          DigitalDetails[i][10] = hmUI.createWidget(hmUI.widget.ARC, {
            x: PosArray[i][0],
            y: PosArray[i][1] + 30,
            w: 38,
            h: 38,
            start_angle: 90,
            end_angle: 180,
            color: ObjectColor,
            line_width: 8,
            show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
          })
        }

        DigitalDetails[i][11] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0],
          y: PosArray[i][1] + 15,
          w: 8,
          h: 38,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })
        
        DigitalDetails[i][12] = hmUI.createWidget(hmUI.widget.ARC, {
          x: PosArray[i][0],
          y: PosArray[i][1],
          w: 38,
          h: 38,
          start_angle: 180,
          end_angle: 270,
          color: ObjectColor,
          line_width: 8,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][13] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0] + 15,
          y: PosArray[i][1],
          w: 38,
          h: 8,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        DigitalDetails[i][14] = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: PosArray[i][0] + 15,
          y: PosArray[i][1] + 60,
          w: 38,
          h: 8,
          radius: 4,
          color: ObjectColor,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        if (num == 0) {
          DigitalDetails[i][1].setProperty(hmUI.prop.H, 98)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][3] != undefined) DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.Y, PosArray[i][1] + 15)
          DigitalDetails[i][8].setProperty(hmUI.prop.H, 98)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][10] != undefined) DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][14].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 1) {
          DigitalDetails[i][1].setProperty(hmUI.prop.H, 113)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][3] != undefined) DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][5].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][6].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][7].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][10] != undefined) DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][12].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][13].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][14].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 2) {
          if (DigitalDetails[i][3] != undefined) DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][5].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][6].setProperty(hmUI.prop.W, 53)
          if (DigitalDetails[i][10] != undefined) DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 3) {
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 4) {
          DigitalDetails[i][0].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][1].setProperty(hmUI.prop.Y, PosArray[i][1])
          DigitalDetails[i][1].setProperty(hmUI.prop.H, 128)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][5].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][6].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][7].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.Y, PosArray[i][1])
          DigitalDetails[i][11].setProperty(hmUI.prop.H, 53)
          DigitalDetails[i][12].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][13].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 5) {
          DigitalDetails[i][0].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][1].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][13].setProperty(hmUI.prop.W, 53)
        }
        if (num == 6) {
          DigitalDetails[i][0].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][1].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.Y, PosArray[i][1] + 15)
          DigitalDetails[i][8].setProperty(hmUI.prop.H, 98)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][13].setProperty(hmUI.prop.W, 53)
        }
        if (num == 7) {
          DigitalDetails[i][1].setProperty(hmUI.prop.H, 113)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][3] != undefined) DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][5].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][6].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][7].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
          if (DigitalDetails[i][10] != undefined) DigitalDetails[i][10].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][11].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][12].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][13].setProperty(hmUI.prop.X, PosArray[i][0])
          DigitalDetails[i][13].setProperty(hmUI.prop.W, 53)
          DigitalDetails[i][14].setProperty(hmUI.prop.VISIBLE, false)
        }
        if (num == 9) {
          DigitalDetails[i][1].setProperty(hmUI.prop.H, 98)
          DigitalDetails[i][2].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][3].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][4].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][8].setProperty(hmUI.prop.VISIBLE, false)
          DigitalDetails[i][9].setProperty(hmUI.prop.VISIBLE, false)
        }
      }

      DigitalCreate(HourTens, 0)
      DigitalCreate(HourOnes, 1)
      DigitalCreate(MinuteTens, 2)
      DigitalCreate(MinuteOnes, 3)

      // const timer1 = []
      // for (let t = 0; t < 4; t++) { timer1[t] = timer.createTimer() }
      // a - past number, b - current number, type = 0 - Hour Tens, 1 - Hour Ones, 2 - Minute Tens, 3 - Minute Ones
      function DigitalUpdate(type, a, b) {
        let percent = 1
        const timer1 = timer.createTimer(0, 50, function (option) {
          if (a == 0 & b == 1) {
            if (percent <= count / 10) DigitalDetails[type][13].setProperty(hmUI.prop.W, 38 - percent * 300 / count)
            else if (percent <= count / 5) {
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 270 - (percent - count / 10) * 900 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 98 - (percent - count / 5) * 225 / count)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 15 + (percent - count / 5) * 225 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 180 - (percent - count * 0.6) * 900 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 38 - (percent - count * 0.7) * 300 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + (percent - count * 0.7) * 300 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.8) * 900 / count)
            } else {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 98 + (percent - count * 0.9) * 150 / count)
            }
          }

          if (a == 1 & b == 2) {
            if (percent <= count * 0.3) DigitalDetails[type][1].setProperty(hmUI.prop.H, 113 - percent * 250 / count)
            if (percent <= count / 5) {
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][13].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - percent * 150 / count)
              DigitalDetails[type][13].setProperty(hmUI.prop.W, 8 + percent * 150 / count)
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 270)
              DigitalDetails[type][12].setProperty(hmUI.prop.START_ANGLE, 270 - (percent - count / 5) * 900 / count)
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, (percent - count * 0.3) * 900 / count)
            } else if (percent <= count / 2) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.4) * 300 / count)
              DigitalDetails[type][14].setProperty(hmUI.prop.W, 8 + (percent - count * 0.4) * 300 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][9].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][9].setProperty(hmUI.prop.START_ANGLE, 270 - (percent - count / 2) * 900 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 75)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + (percent - count * 0.6) * 300 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 180)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 180 - (percent - count * 0.7) * 900 / count)
            } else {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.8) * 225 / count)
            }
          }

          if (a == 2 & b == 3) {
            if (percent <= count / 5) DigitalDetails[type][6].setProperty(hmUI.prop.W, 53 - percent * 225 / count)
            else if (percent <= count * 0.3) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90 + (percent - count / 5) * 900 / count)
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 38 - (percent - count * 0.3) * 300 / count)
            } else if (percent <= count / 2) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][9].setProperty(hmUI.prop.START_ANGLE, 180 + (percent - count * 0.4) * 900 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][9].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90)
              DigitalDetails[type][3].setProperty(hmUI.prop.END_ANGLE, -90 + (percent - count / 2) * 900 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][4].setProperty(hmUI.prop.Y, PosArray[type][1] + 75)
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 8 + (percent - count * 0.6) * 300 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, (percent - count * 0.7) * 900 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.8) * 300 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.8) * 300 / count)
            } else {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.9) * 900 / count)
            }
          }
          
          if (a == 3 & b == 4) {
            if (percent <= count / 10) {
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 180 - percent * 900 / count)
              DigitalDetails[type][12].setProperty(hmUI.prop.START_ANGLE, 180 + percent * 900 / count)
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 38 - (percent - count / 10) * 150 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + (percent - count / 10) * 150 / count)
              DigitalDetails[type][13].setProperty(hmUI.prop.W, 38 - (percent - count / 10) * 150 / count)
              DigitalDetails[type][13].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + (percent - count / 10) * 150 / count)
            }
            else if (percent <= count * 0.4) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.3) * 900 / count)
              DigitalDetails[type][0].setProperty(hmUI.prop.START_ANGLE, - 90 + (percent - count * 0.3) * 900 / count)
            } else if (percent <= count * 0.6) {
              if (percent <= count / 2) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][0].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 38 + (percent - count * 0.4) * 150 / count)
              DigitalDetails[type][1].setProperty(hmUI.prop.Y, PosArray[type][1] + 15 - (percent - count * 0.4) * 150 / count)
              }
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 38 - (percent - count * 0.4) * 300 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][3].setProperty(hmUI.prop.END_ANGLE, - (percent - count * 0.6) * 900 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.7) * 900 / count)
              DigitalDetails[type][10].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][10].setProperty(hmUI.prop.START_ANGLE, 90)
              DigitalDetails[type][10].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.7) * 900 / count)
            } else {
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 53 + (percent - count * 0.8) * 375 / count)
              DigitalDetails[type][11].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][11].setProperty(hmUI.prop.H, 8 + (percent - count * 0.8) * 240 / count)
              DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + 45 - (percent - count * 0.8) * 225 / count)
            }
          }

          if (a == 4 & b == 5) {
            if (percent <= count * 0.6) {
              if (percent <= count / 2) {
                DigitalDetails[type][1].setProperty(hmUI.prop.H, 128 - percent * 240 / count)
              } else DigitalDetails[type][1].setProperty(hmUI.prop.VISIBLE, false)
              if (percent > count / 10 & percent <= count / 5) {
                DigitalDetails[type][11].setProperty(hmUI.prop.H, 56 - (percent - count / 10) * 110 / count)
                DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + (percent - count / 10) * 110 / count)
              } else if (percent > count / 5 & percent <= count * 0.3) {
                DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][12].setProperty(hmUI.prop.START_ANGLE, 180)
                DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 180 + (percent - count / 5) * 900 / count)
              } else if (percent > count * 0.3) {
                if (percent <= count * 0.4) {
                  DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, true)
                  DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90)
                  DigitalDetails[type][3].setProperty(hmUI.prop.END_ANGLE, -90 + (percent - count * 0.3) * 900 / count)
                }
                if (percent <= count / 2) {
                  DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, true)
                  DigitalDetails[type][13].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
                  DigitalDetails[type][13].setProperty(hmUI.prop.W, 8 + (percent - count * 0.3) * 225 / count)
                }
                if (percent > count * 0.4) {
                  DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, true)
                  DigitalDetails[type][4].setProperty(hmUI.prop.H, 8 + (percent - count * 0.4) * 150 / count)
                }
              }
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, (percent - count * 0.6) * 900 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.7) * 150 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.7) * 150 / count)
            } else {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.9) * 900 / count)
            }
          }

          if (a == 5 & b == 6) {
            if (percent <= count / 5) DigitalDetails[type][13].setProperty(hmUI.prop.W, 53 - percent * 225 / count)
            else if (percent <= count * 0.3) {
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 270 - (percent - count / 5) * 900 / count)
            } else if (percent <= count * 0.7) {
              if (percent <= count / 2) {
                DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][11].setProperty(hmUI.prop.H, 38 - (percent - count * 0.3) * 150 / count)
                DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + 15 + (percent - count * 0.3) * 150 / count)
              } else if (percent <= count * 0.6) {
                DigitalDetails[type][11].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][10].setProperty(hmUI.prop.END_ANGLE, 180 - (percent - count / 2) * 900 / count)
              } else DigitalDetails[type][10].setProperty(hmUI.prop.VISIBLE, false)
              if (percent > count * 0.4) {
                DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + (percent - count * 0.4) * 300 / count)
                DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - (percent - count * 0.4) * 300 / count)
              }
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 180 + (percent - count * 0.7) * 900 / count)
            } else {
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][13].setProperty(hmUI.prop.W, 8 + (percent - count * 0.8) * 225 / count)
            }
          }

          if (a == 6 & b == 7) {
            if (percent <= count / 10) {
              DigitalDetails[type][13].setProperty(hmUI.prop.W, 53 - percent * 110 / count)
              DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + percent * 300 / count)
              DigitalDetails[type][14].setProperty(hmUI.prop.W, 38 - percent * 300 / count)
            } else if (percent <= count / 5) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][0].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][0].setProperty(hmUI.prop.START_ANGLE, -90)
              DigitalDetails[type][0].setProperty(hmUI.prop.END_ANGLE, -90 + (percent - count / 10) * 900 / count)
              DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90 + (percent - count / 10) * 900 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][1].setProperty(hmUI.prop.Y, PosArray[type][1] + 15)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 8 + (percent - count / 5) * 262.5 / count)
              if (percent <= count * 0.3) {
                DigitalDetails[type][4].setProperty(hmUI.prop.Y, PosArray[type][1] + 75 + (percent - count / 5) * 300 / count)
                DigitalDetails[type][4].setProperty(hmUI.prop.H, 38 - (percent - count / 5) * 300 / count)
              } else if (percent <= count * 0.4) {
                DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][5].setProperty(hmUI.prop.START_ANGLE, (percent - count * 0.3) * 900 / count)
              } else if (percent <= count / 2) {
                DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][6].setProperty(hmUI.prop.W, 38 - (percent - count * 0.4) * 300 / count)
              } else {
                DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90 + (percent - count / 2) * 900 / count)
              }
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 15)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 98 - (percent - count * 0.6) * 450 / count)
            }
            else if (percent <= count * 0.9) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][12].setProperty(hmUI.prop.START_ANGLE, 180 + (percent - count * 0.8) * 900 / count)
            } else {
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][13].setProperty(hmUI.prop.X, PosArray[type][0] + 15 - (percent - count * 0.9) * 150 / count)
              DigitalDetails[type][13].setProperty(hmUI.prop.W, 38 + (percent - count * 0.9) * 150 / count)
            }
          }

          if (a == 7 & b == 8) {
            if (percent <= count / 5) {
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 113 - percent * 375 / count)
              if (percent <= count / 10) {
                DigitalDetails[type][13].setProperty(hmUI.prop.X, PosArray[type][0] + percent * 150 / count)
                DigitalDetails[type][13].setProperty(hmUI.prop.W, 53 - percent * 150 / count)
              } else {
                DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][12].setProperty(hmUI.prop.START_ANGLE, 270 - (percent - count / 10) * 900 / count)
              }
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][11].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + 15)
              DigitalDetails[type][11].setProperty(hmUI.prop.H, 8 + (percent - count / 5) * 300 / count)
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, (percent - count / 5) * 900 / count)
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][10].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][10].setProperty(hmUI.prop.END_ANGLE, 180)
              DigitalDetails[type][10].setProperty(hmUI.prop.START_ANGLE, 180 - (percent - count * 0.3) * 900 / count)
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90)
              DigitalDetails[type][3].setProperty(hmUI.prop.END_ANGLE, -90 + (percent - count * 0.3) * 900 / count)
            } else if (percent <= count / 2) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
              DigitalDetails[type][14].setProperty(hmUI.prop.W, 8 + (percent - count * 0.4) * 300 / count)
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][4].setProperty(hmUI.prop.Y, PosArray[type][1] + 75)
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 8 + (percent - count * 0.4) * 300 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.START_ANGLE, 0)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, (percent - count / 2) * 900 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.6) * 300 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.6) * 300 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.7) * 900 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - (percent - count * 0.8) * 300 / count)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + (percent - count * 0.8) * 300 / count)
            } else {
              DigitalDetails[type][9].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][9].setProperty(hmUI.prop.START_ANGLE, 180)
              DigitalDetails[type][9].setProperty(hmUI.prop.END_ANGLE, 180 + (percent - count * 0.9) * 900 / count)
            }
          }

          if (a == 8 & b == 9) {
            if (percent <= count / 10) {
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, 90 - percent * 900 / count)
              DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90 + percent * 900 / count)
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][4].setProperty(hmUI.prop.Y, PosArray[type][1] + 75 + (percent - count / 10) * 150 / count)
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 38 - (percent - count / 10) * 150 / count)
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 38 + (percent - count * 0.3) * 200 / count)
              DigitalDetails[type][5].setProperty(hmUI.prop.START_ANGLE, (percent - count * 0.3) * 900 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 53 + (percent - count * 0.4) * 220 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 38 - (percent - count * 0.4) * 300 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.START_ANGLE, 0)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, (percent - count * 0.6) * 900 / count)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90 + (percent - count * 0.6) * 900 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.7) * 150 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.7) * 150 / count)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 75)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 38 - (percent - count * 0.7) * 150 / count)
            } else {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.9) * 900 / count)
              DigitalDetails[type][9].setProperty(hmUI.prop.START_ANGLE, 180 + (percent - count * 0.9) * 900 / count)
              if (percent == count) DigitalDetails[type][9].setProperty(hmUI.prop.VISIBLE, false)
            }
          }

          if (a == 2 & b == 0) {
            if (percent <= count / 10) DigitalDetails[type][6].setProperty(hmUI.prop.W, 53 - percent * 450 / count)
            else if (percent <= count * 0.15) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90 + (percent - count / 10) * 1800 / count)
            } else if (percent <= count / 4) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 38 - (percent - count * 0.15) * 300 / count)
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][9].setProperty(hmUI.prop.START_ANGLE, 180 + (percent - count / 4) * 1800 / count)
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][9].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + (percent - count * 0.3) * 300 / count)
              DigitalDetails[type][14].setProperty(hmUI.prop.W, 38 - (percent - count * 0.3) * 300 / count)
            } else if (percent <= count * 0.45) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.4) * 1800 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 38 + (percent - count * 0.45) * 400 / count)
            } else if (percent <= count * 0.65) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, (percent - count * 0.6) * 1800 / count)
            } else if (percent <= count * 0.75) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.65) * 300 / count)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 45 - (percent - count * 0.65) * 300 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 90)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 90 + (percent - count * 0.75) * 1800 / count)
            } else {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + (percent - count * 0.8) * 450 / count)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - (percent - count * 0.8) * 450 / count)
            }
          }

          if (a == 3 & b == 0) {
            if (percent <= count * 0.3) {
              if (percent <= count / 5) {
                DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + percent * 150 / count)
                DigitalDetails[type][14].setProperty(hmUI.prop.W, 38 - percent * 150 / count)
              }
              else DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, false)
              if (percent <= count / 10) DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 180 - percent * 900 / count)
              else {
                DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][6].setProperty(hmUI.prop.W, 38 - (percent - count / 10) * 150 / count)
                DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15 + (percent - count / 10) * 150 / count)
              }
            } else if (percent <= count * 0.4) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.3) * 900 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 38 - (percent - count * 0.4) * 150 / count)
            } else if (percent <= count * 0.7) {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][3].setProperty(hmUI.prop.END_ANGLE, - (percent - count * 0.6) * 900 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][2].setProperty(hmUI.prop.END_ANGLE, 90 - (percent - count * 0.7) * 900 / count)
            } else {
              DigitalDetails[type][2].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 38 + (percent - count * 0.8) * 200 / count)
            }
            if (percent <= count / 2) {
              DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 15)
              DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + percent * 180 / count)
            } else if (percent <= count * 0.6) {
              DigitalDetails[type][7].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][7].setProperty(hmUI.prop.END_ANGLE, 180)
              DigitalDetails[type][7].setProperty(hmUI.prop.START_ANGLE, 180 - (percent - count / 2) * 900 / count)
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][6].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][6].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
              DigitalDetails[type][6].setProperty(hmUI.prop.W, 8 + (percent - count * 0.6) * 150 / count)
            } else if (percent <= count * 0.9) {
              DigitalDetails[type][5].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][5].setProperty(hmUI.prop.END_ANGLE, 90)
              DigitalDetails[type][5].setProperty(hmUI.prop.START_ANGLE, 90 - (percent - count * 0.8) * 900 / count)
            } else {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][4].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - (percent - count * 0.9) * 200 / count)
              DigitalDetails[type][4].setProperty(hmUI.prop.H, 8 + (percent - count * 0.9) * 200 / count)
              if (percent == count) {
                DigitalDetails[type][1].setProperty(hmUI.prop.H, 98)
                DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
              }
            }
          }

          if (a == 5 & b == 0) {
            if (percent <= count / 5) DigitalDetails[type][13].setProperty(hmUI.prop.W, 53 - percent * 225 / count)
            else if (percent <= count * 0.3) {
              DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 270 - (percent - count / 5) * 900 / count)
            } else if (percent <= count * 0.7) {
              if (percent <= count / 2) {
                DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][11].setProperty(hmUI.prop.H, 38 - (percent - count * 0.3) * 150 / count)
                DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + 15 + (percent - count * 0.3) * 150 / count)
              } else if (percent <= count * 0.6) {
                DigitalDetails[type][11].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][10].setProperty(hmUI.prop.END_ANGLE, 180 - (percent - count / 2) * 900 / count)
              } else {
                DigitalDetails[type][10].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][14].setProperty(hmUI.prop.W, 48 - (percent - count * 0.6) * 300 / count)
                DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 8 + (percent - count * 0.6) * 300 / count)
              }
              if (percent > count * 0.4) {
                DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + (percent - count * 0.4) * 300 / count)
                DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - (percent - count * 0.4) * 300 / count)
              }
            } else if (percent <= count * 0.8) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][3].setProperty(hmUI.prop.START_ANGLE, -90 + (percent - count * 0.7) * 900 / count)
              DigitalDetails[type][12].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][12].setProperty(hmUI.prop.END_ANGLE, 180 + (percent - count * 0.7) * 900 / count)
            } else {
              DigitalDetails[type][4].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][1].setProperty(hmUI.prop.VISIBLE, true)
              DigitalDetails[type][1].setProperty(hmUI.prop.Y, PosArray[type][1] + 75 - (percent - count * 0.8) * 300 / count)
              DigitalDetails[type][1].setProperty(hmUI.prop.H, 38 + (percent - count * 0.8) * 300 / count)
              if (percent <= count * 0.9) {
                DigitalDetails[type][3].setProperty(hmUI.prop.VISIBLE, false)
                DigitalDetails[type][13].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][13].setProperty(hmUI.prop.W, 8 + (percent - count * 0.8) * 300 / count)
              } else {
                DigitalDetails[type][0].setProperty(hmUI.prop.VISIBLE, true)
                DigitalDetails[type][0].setProperty(hmUI.prop.START_ANGLE, -90)
                DigitalDetails[type][0].setProperty(hmUI.prop.END_ANGLE, -90 + (percent - count * 0.9) * 900 / count)
              }
            }
          }

          if (a == 9 & b == 0) {
            if (percent <= count / 5) {
              DigitalDetails[type][14].setProperty(hmUI.prop.X, PosArray[type][0] + 15)
              DigitalDetails[type][14].setProperty(hmUI.prop.W, 38 - percent * 150 / count)
            } else if (percent <= count * 0.3) {
              DigitalDetails[type][14].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][10].setProperty(hmUI.prop.START_ANGLE, 90 + (percent - count / 5) * 900 / count)
            } else if (percent <= count / 2) {
              DigitalDetails[type][10].setProperty(hmUI.prop.VISIBLE, false)
              DigitalDetails[type][11].setProperty(hmUI.prop.Y, PosArray[type][1] + 15)
              DigitalDetails[type][11].setProperty(hmUI.prop.H, 38 - (percent - count * 0.3) * 150 / count)
            } else DigitalDetails[type][11].setProperty(hmUI.prop.VISIBLE, false)
            DigitalDetails[type][8].setProperty(hmUI.prop.VISIBLE, true)
            DigitalDetails[type][8].setProperty(hmUI.prop.Y, PosArray[type][1] + 105 - percent * 90 / count)
            DigitalDetails[type][8].setProperty(hmUI.prop.H, 8 + percent * 90 / count)
          }

          percent++
          if (percent > count) timer.stopTimer(timer1)
        })
      }

      function CheckTime() {
        if (HourTens != parseInt(Time.hour / 10)) {
          if (HourTens == parseInt(Time.hour / 10) - 1) {
            DigitalUpdate(0, HourTens, HourTens + 1)
            HourTens = parseInt(Time.hour / 10)
          } else if (HourTens == 2 & parseInt(Time.hour / 10) == 0) {
            DigitalUpdate(0, HourTens, 0)
            HourTens = 0
          } else {
            HourTens = parseInt(Time.hour / 10)
            DigitalDelete(0)
            DigitalCreate(HourTens, 0)
          }
        }
        if (HourOnes != parseInt(Time.hour % 10)) {
          if (HourOnes == parseInt(Time.hour % 10) - 1) {
            DigitalUpdate(1, HourOnes, HourOnes + 1)
            HourOnes = parseInt(Time.hour % 10)
          } else if ((HourOnes == 3 | HourOnes == 9) & parseInt(Time.hour % 10) == 0) {
            DigitalUpdate(1, HourOnes, 0)
            HourOnes = 0
          } else {
            HourOnes = parseInt(Time.hour % 10)
            DigitalDelete(1)
            DigitalCreate(HourOnes, 1)
          }
        }
        if (MinuteTens != parseInt(Time.minute / 10)) {
          if (MinuteTens == parseInt(Time.minute / 10) - 1) {
            DigitalUpdate(2, MinuteTens, MinuteTens + 1)
            MinuteTens = parseInt(Time.minute / 10)
          } else if (MinuteTens == 5 & parseInt(Time.minute / 10) == 0) {
            DigitalUpdate(2, MinuteTens, 0)
            MinuteTens = 0
          } else {
            MinuteTens = parseInt(Time.minute / 10)
            DigitalDelete(2)
            DigitalCreate(MinuteTens, 2)
          }
        }
        if (MinuteOnes != parseInt(Time.minute % 10)) {
          if (MinuteOnes == parseInt(Time.minute % 10) - 1) {
            DigitalUpdate(3, MinuteOnes, MinuteOnes + 1)
            MinuteOnes = parseInt(Time.minute % 10)
          } else if (MinuteOnes == 9 & parseInt(Time.minute % 10) == 0) {
            DigitalUpdate(3, MinuteOnes, 0)
            MinuteOnes = 0
          } else {
            MinuteOnes = parseInt(Time.minute % 10)
            DigitalDelete(3)
            DigitalCreate(MinuteOnes, 3)
          }
        }
      }

      const battery = hmSensor.createSensor(hmSensor.id.BATTERY)

      const batteryParam = {
        x: 12,
        y: 12,
        w: 168,
        h: 168,
        start_angle: 190,
        line_width: 8,
        show_level: hmUI.show_level.ONLY_NORMAL
      }

      const BatteryBGArc = hmUI.createWidget(hmUI.widget.ARC, {
        ... batteryParam,
        end_angle: 350,
        color: ObjectColor2
      })

      const BatteryArc = hmUI.createWidget(hmUI.widget.ARC, {
        ... batteryParam,
        end_angle: 190,
        color: ObjectColor
      })

      const textParams = {
        x: 33,
        w: 125,
        h: 32,
        h_space: 0,
        font_array: Array.from(Array(10), (v, k) => 'images/text/' + k + '.png'),
        align_h: hmUI.align.CENTER_H,
        show_level: hmUI.show_level.ONLY_NORMAL
      }

      const BatteryTextBG = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        y: 54,
        h: 32,
        color: ObjectColor,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const BatteryText = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        y: 54,
        type: hmUI.data_type.BATTERY,
        ... textParams
      })

      const circle = hmUI.createWidget(hmUI.widget.CIRCLE, {
        center_x: 96,
        center_y: 444,
        radius: 4,
        color: 0xff0000,
        show_level: hmUI.show_level.ONLY_AOD
      })

      function BatteryUpdate() {
        BatteryArc.setProperty(hmUI.prop.END_ANGLE, 190 + battery.current * 1.6)
        BatteryTextBG.setProperty(hmUI.prop.X, 95.5 - battery.current.toString().length * 12.5)
        BatteryTextBG.setProperty(hmUI.prop.W, battery.current.toString().length * 25)
        battery.current <= 10 ? circle.setProperty(hmUI.prop.VISIBLE, true) :  circle.setProperty(hmUI.prop.VISIBLE, false)
      }

      battery.addEventListener(hmSensor.event.CHANGE, function () {
        BatteryUpdate()
      })

      const steps = hmSensor.createSensor(hmSensor.id.STEP)

      const stepsParam = {
        x: 12,
        y: 310,
        w: 168,
        h: 168,
        start_angle: 10,
        line_width: 8,
        show_level: hmUI.show_level.ONLY_NORMAL
      }
      const StepsBGArc = hmUI.createWidget(hmUI.widget.ARC, {
        ... stepsParam,
        end_angle: 170,
        color: ObjectColor2,
      })

      const StepsArc = hmUI.createWidget(hmUI.widget.ARC, {
        x: 12,
        y: 310,
        w: 168,
        h: 168,
        start_angle: 10,
        end_angle: 10,
        color: ObjectColor,
        line_width: 8,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const StepsTextBG = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        y: 404,
        h: 32,
        color: ObjectColor,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const StepsText = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        y: 404,
        type: hmUI.data_type.STEP,
        ... textParams
      })

      function StepsUpdate() {
        let stepsEndAngle = steps.current / steps.target >= 1 ? 170 : 10 + steps.current / steps.target * 160
        StepsArc.setProperty(hmUI.prop.END_ANGLE, stepsEndAngle)
        StepsTextBG.setProperty(hmUI.prop.X, 95.5 - steps.current.toString().length * 12.5)
        StepsTextBG.setProperty(hmUI.prop.W, steps.current.toString().length * 25)
      }

      steps.addEventListener(hmSensor.event.CHANGE, function () {
        StepsUpdate()
      })

      BatteryUpdate()
      StepsUpdate()

      hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
        resume_call: function () {
          BatteryUpdate()
          StepsUpdate()
          if (HourTens != parseInt(Time.hour / 10)) {
            DigitalDelete(0)
            DigitalCreate(parseInt(Time.hour / 10), 0)
            HourTens = parseInt(Time.hour / 10)
          }
          if (HourOnes != parseInt(Time.hour % 10)) {
            DigitalDelete(1)
            DigitalCreate(parseInt(Time.hour % 10), 1)
            HourOnes = parseInt(Time.hour % 10)
          }
          if (MinuteTens != parseInt(Time.minute / 10)) {
            DigitalDelete(2)
            DigitalCreate(parseInt(Time.minute / 10), 2)
            MinuteTens = parseInt(Time.minute / 10)
          }
          if (MinuteOnes != parseInt(Time.minute % 10)) {
            DigitalDelete(3)
            DigitalCreate(parseInt(Time.minute % 10), 3)
            MinuteOnes = parseInt(Time.minute % 10)
          }
         },
        pause_call: function () { console.log("ui pause") }
      })

      const timer0 = timer.createTimer( 0, 1e3, function () { CheckTime() })
    }

    __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
      onInit() {},
      build() {
        init_view()
      },
      onDestory() {}
    })
  })()
} catch (error) {
  console.log(error)
}