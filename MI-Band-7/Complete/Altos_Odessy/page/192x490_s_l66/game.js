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
            var can_flag = true;
            var new_high = false;
            var max_alto = hmFS.SysProGetInt("alto_max");
            if (max_alto == undefined) {
              max_alto = 0;
              can_flag = false;
              hmFS.SysProSetInt("alto_max", 0);
            }
            var gameover = false;
            var ballom_arr = [];
            for (let i = 0; i < 368; i++) {
              if (i < 83) {
                ballom_arr.push(i);
              } else {
                ballom_arr.push(i - 83);
              }
            }
            var day_st;
            var day_num;
            var bridge = false;
            var on_liane = false;
            const colors_sky = [
              0x33afff, 0x2ea0e9, 0x288ed0, 0x2780b9, 0x1d6c9e, 0x145681,
              0x0d4366, 0x06314c,
            ];
            var rnd = Math.floor(Math.random() * 4);
            if (rnd == 0) {
              day_st = "day";
              day_num = 0;
            } else if (rnd == 1) {
              day_st = "m_day";
              day_num = 2;
            } else if (rnd == 2) {
              day_st = "night";
              day_num = 4;
            } else if (rnd == 3) {
              day_st = "m_night";
              day_num = 6;
            }

            var sky = hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 0,
              y: 0,
              w: 194,
              h: 492,
              color: colors_sky[day_num],
            });
            timer.createTimer(0, 7500, function () {
              day_num++;
              if (day_num > 7) {
                day_num = 0;
              }
              sky.setProperty(hmUI.prop.MORE, {
                color: colors_sky[day_num],
              });
            });

            function get_arr_ang() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push("j");
              }
              return arg;
            }
            function get_arr_ang_2() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push("j");
              }
              return arg;
            }
            function get_arr_floor() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push(0);
              }
              return arg;
            }
            function get_arr_floor_2() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push(0);
              }
              return arg;
            }
            function get_arr_floor_3() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                if (i > 14 && i < 355) {
                  arg.push("w");
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            function get_arr_ang_3() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push("j");
              }
              return arg;
            }
            function get_arr_ang_4() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push("j");
              }
              return arg;
            }
            function get_arr_floor_4() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                if (i > 25 && i < 323) {
                  arg.push("d");
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            function get_arr_ang_5() {
              return (Math.atan2(35, player_y) * 180) / Math.PI;
            }
            function get_arr_floor_5() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                if (i > 9 && i < 359) {
                  if (i > 83 && i < 257) {
                    arg.push("b");
                  } else {
                    arg.push("f_a");
                  }
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            function get_arr_ang_6() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                if (i < 116) {
                  arg.push(325);
                } else {
                  arg.push("j");
                }
              }
              return arg;
            }
            function get_arr_floor_6() {
              let arg = [];
              let n = 0;
              for (let i = 0; i < 368; i++) {
                if (i > 115 && i < 310) {
                  arg.push("f_a");
                } else if (i < 116) {
                  arg.push("u");
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            function get_arr_floor_7() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                if (i > 47 && i < 322) {
                  arg.push("br");
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            function get_arr_ang_7() {
              let arg = [];
              for (let i = 0; i < 368; i++) {
                arg.push("j");
              }
              return arg;
            }
            var x_start = 82;
            var y_start = 169;
            var rad = 106;
            function generateSemicircle(radius, vertices, centerY) {
              const angleIncrement = (2 * Math.PI) / vertices;
              const points = [];

              for (let i = 0; i < vertices; i++) {
                const angle = i * angleIncrement;
                const y = centerY + radius * Math.sin(angle);
                points.push(y);
              }

              return points;
            }
            var ground = 35;
            function get_arr_ground() {
              let arg = [];
              let grounds = generateSemicircle(rad, 180, 0);
              for (let i = 0; i < 368; i++) {
                if (i > 83 && i < 257) {
                  arg.push(35 + grounds[i - 84]);
                } else {
                  arg.push(35);
                }
              }
              return arg;
            }
            function get_arr_ground_2() {
              let arg = [];
              let n = 0;
              for (let i = 0; i < 368; i++) {
                if (i < 116) {
                  if (i % 3 == 0) {
                    n++;
                  }
                  arg.push(35 + n);
                } else {
                  arg.push(0);
                }
              }
              return arg;
            }
            var score = 0;
            var gravity = 1;
            var y_arr = [];
            var x_arr = [];
            var acantilate = false;
            var player_x = 10;
            var player_y = 125;
            var floor_arg = get_arr_floor();
            var angle_arg = get_arr_ang();
            var floor_x = 0;
            var floor_y = -315;
            var floor_num = 69;
            var sum_num = 0;
            var more_high = false;
            var floor = hmUI.createWidget(hmUI.widget.IMG, {
              x: floor_y,
              y: floor_x,
              src: "floor_0.png",
            });
            var next_floor = hmUI.createWidget(hmUI.widget.IMG, {
              x: floor_y,
              y: floor_x,
              src: next_asset,
            });
            var player = hmUI.createWidget(hmUI.widget.IMG, {
              x: player_y,
              y: player_x,
              //  pos_x: 10,
              //pos_y: 10,
              center_x: 44.5,
              center_y: 38.5,
              src: "alto.png",
            });
            var end_game = false;
            var rest_num = 0;
            var shield_dur = 1;
            var shield_status = true;
            var player_jump = false;
            var mod = 0;
            var new_game = true;
            var ang = 0;
            var game_vel = 4;
            var can_nitre = true;
            var score_timer = timer.createTimer(0, 100, function () {
              score++;
              update_score();
              if (
                max_alto - score < 299 &&
                can_flag == true &&
                score > max_alto
              ) {
                can_flag = false;
                create_flag();
              }
              if (score > max_alto) {
                console.log("new best");
                max_alto = score;
                can_flag = false;
                hmFS.SysProSetInt("alto_max", score);
              }
            });
            timer.createTimer(0, 25, function () {
              if (player_y < 34 && floor_arg[floor_num] != "f_a") {
                player_y = 34;
                mod = 0;
                player.setProperty(hmUI.prop.MORE, {
                  x: player_y,
                });
              }
              if (player_jump == false || end_game == true) {
                if (
                  player_y >= ground ||
                  floor_arg[floor_num] == "f" ||
                  end_game == true ||
                  floor_arg[floor_num] == "f_a"
                ) {
                  mod++;
                }
                player_y -= Math.floor((gravity / 4) * mod);
                player.setProperty(hmUI.prop.MORE, {
                  x: player_y,
                });
                if (
                  (player_y < ground &&
                    floor_arg[floor_num] != "f" &&
                    end_game == false) ||
                  (player_y > ground + 70 &&
                    player_y < ground + 75 &&
                    floor_arg[floor_num] == "d" &&
                    want == false)
                ) {
                  if (
                    (player_y < 0 && floor_arg[floor_num] == "f") ||
                    (player_y < 0 && floor_arg[floor_num] == "f_a")
                  ) {
                    end_game = true;
                    console.log("you fall");
                    game_over();
                  }
                  if (
                    player_y > ground + 60 &&
                    player_y < ground + 75 &&
                    floor_arg[floor_num] == "d"
                  ) {
                    //&& want == false) {
                    on_liane = true;
                    if (player_jump == false) {
                      player_y = 110;
                      ang = 0;
                    }
                  } else {
                    on_liane = false;
                  }
                  if (player_jump_ballom == true) {
                    player_jump_ballom = false;
                  }
                  rest_num = Math.floor((gravity / 4) * mod);
                  if (Math.abs(ang) >= 60 && Math.abs(ang) <= 300) {
                    game_over();
                  } else {
                    if (can_nitre == true) {
                      nitro(true);
                      can_nitre = false;
                    }
                  }
                  mod = 0;
                  if (new_game == true) {
                    move_obs();
                  }
                }
              }
            });

            var rock_generation = true;
            function nitro(increase) {
              shield_status = true;
              if (increase == true) {
                shield_dur *= 1.2;
              }
              game_vel = 6;
              let sec = 0;
              player.setProperty(hmUI.prop.MORE, {
                src: "shield.png",
              });
              let quit_timer = timer.createTimer(0, 100, function () {
                rock_generation = true;
                if (
                  floor_arg[floor_num] != "w" &&
                  floor_arg[floor_num] != "br"
                ) {
                  sec += 0.1;
                  if (sec > shield_dur) {
                    shield_status = false;
                    player.setProperty(hmUI.prop.MORE, {
                      src: "alto.png",
                    });
                    timer.stopTimer(quit_timer);
                    rest_shield();
                    game_vel = 4;
                    shield_status = false;
                  }
                }
              });
            }
            function rest_shield() {
              let sec = 0;
              let reduce_shield = timer.createTimer(0, 100, function () {
                shield_dur -= 0.1;
                if (shield_dur < 1) {
                  shield_dur = 1;
                  shield_status = false;
                  timer.stopTimer(reduce_shield);
                } else {
                  sec++;
                }
              });
            }
            var next_asset = "floor_0.png";
            var ballom = false;
            function move_obs() {
              new_game = false;
              console.log("start scroll");
              timer.createTimer(0, 25, function () {
                if (
                  floor_arg[floor_num] != "w" &&
                  floor_arg[floor_num] != "br"
                ) {
                  if (shield_status == true) {
                    game_vel = 6;
                  } else {
                    game_vel = 4;
                  }
                } else if (player_y < ground) {
                  game_vel = 8;
                  nitro(false);
                }
                if (floor_num + game_vel < floor_arg.length) {
                  floor_num += game_vel;
                  if (ballom == true) {
                    let arr = get_arr_ground();
                    ground = Math.abs(arr[floor_num]);
                    //console.log("floor_num: " + floor_num)
                    if (
                      player_y <= ground - 12 &&
                      floor_arg[floor_num] == "b"
                    ) {
                      bounce();
                    }
                    rock_generation = false;
                  } else if (acantilate == false) {
                    rock_generation = true;
                    ground = 35;
                  }
                  if (acantilate == true) {
                    let arr = get_arr_ground_2();
                    ground = Math.abs(arr[floor_num]);
                    rock_generation = false;
                  } else if (ballom == false) {
                    rock_generation = true;
                    ground = 35;
                  }
                } else {
                  if (next_asset == "floor_0.png") {
                    angle_arg = get_arr_ang();
                    floor_arg = get_arr_floor();
                    ballom = false;
                    acantilate = false;
                    bridge = false;
                  } else if (next_asset == "floor_1.png") {
                    angle_arg = get_arr_ang_2();
                    floor_arg = get_arr_floor_2();
                    ballom = false;
                    acantilate = false;
                    bridge = false;
                  } else if (next_asset == "floor_2.png") {
                    angle_arg = get_arr_ang_3();
                    floor_arg = get_arr_floor_3();
                    ballom = false;
                    acantilate = false;
                    bridge = false;
                  } else if (next_asset == "floor_3.png") {
                    angle_arg = get_arr_ang_4();
                    floor_arg = get_arr_floor_4();
                    ballom = false;
                    acantilate = false;
                    bridge = false;
                  } else if (next_asset == "floor_4.png") {
                    angle_arg = get_arr_ang_5();
                    floor_arg = get_arr_floor_5();
                    ballom = true;
                    acantilate = false;
                    bridge = false;
                  } else if (next_asset == "floor_5.png") {
                    angle_arg = get_arr_ang_6();
                    floor_arg = get_arr_floor_6();
                    ballom = false;
                    acantilate = true;
                    bridge = false;
                  } else if (next_asset == "floor_6.png") {
                    angle_arg = get_arr_ang_7();
                    floor_arg = get_arr_floor_7();
                    ballom = false;
                    acantilate = false;
                    bridge = true;
                  }
                  console.log("next_floor");
                  floor_num = 0;
                  floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  create_next_obs(true);
                }
                if (floor_num < angle_arg.length && player_y < ground) {
                  if (
                    angle_arg[floor_num] == "j" ||
                    floor_arg[floor_num] == "d" ||
                    on_liane == true
                  ) {
                    ang = 0;
                  } else {
                    ang = angle_arg[floor_num];
                  }
                  player.setProperty(hmUI.prop.MORE, {
                    angle: ang,
                  });
                }
                floor_x -= game_vel;
                if (
                  floor_arg[floor_num] != "w" &&
                  floor_arg[floor_num] != "br" &&
                  floor_arg[floor_num] != "d" &&
                  floor_arg[floor_num] != "f" &&
                  floor_arg[floor_num] != "b" &&
                  floor_arg[floor_num] != "u" &&
                  floor_arg[floor_num] != "f_a"
                ) {
                  floor_y += floor_arg[floor_num];
                } else if (
                  floor_arg[floor_num] != "l" &&
                  floor_arg[floor_num] != "u"
                ) {
                  floor_y += 0;
                } else if (floor_arg[floor_num] == "u") {
                  player_y += 2;
                  player.setProperty(hmUI.prop.MORE, {
                    x: player_y,
                  });
                }

                floor_y += sum_num;

                floor.setProperty(hmUI.prop.MORE, {
                  x: floor_y,
                  y: floor_x,
                });
                next_floor.setProperty(hmUI.prop.MORE, {
                  x: floor_y,
                  y: floor_x + 368,
                });
              });
              create_next_obs(false);
            }
            function create_next_obs(defined) {
              if (defined == false) {
                next_asset = "floor_1.png";
                next_floor.setProperty(hmUI.prop.MORE, {
                  src: "floor_1.png",
                });
                rock_generation = true;
              } else {
                let max = 7;
                if (next_asset == "floor_4.png") {
                  max = 4;
                } else if (next_asset == "floor_5.png") {
                  max = 4;
                }
                let num = Math.floor(Math.random() * max);
                console.log("rand: " + num);
                if (num == 0) {
                  next_asset = "floor_0.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = true;
                } else if (num == 1) {
                  next_asset = "floor_1.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = true;
                } else if (num == 2) {
                  next_asset = "floor_2.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = true;
                } else if (num == 3) {
                  next_asset = "floor_3.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = true;
                } else if (num == 4 && Math.floor(Math.random() * 3) == 0) {
                  next_asset = "floor_4.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = false;
                } else if (num == 5 && Math.floor(Math.random() * 4) == 0) {
                  next_asset = "floor_5.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = false;
                } else if (num == 6 && Math.floor(Math.random() * 2) == 0) {
                  next_asset = "floor_6.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = false;
                } else {
                  next_asset = "floor_0.png";
                  next_floor.setProperty(hmUI.prop.MORE, {
                    src: next_asset,
                  });
                  rock_generation = true;
                }
                floor_x += 368;
                floor.setProperty(hmUI.prop.MORE, {
                  x: floor_y,
                  y: floor_x,
                });
                next_floor.setProperty(hmUI.prop.MORE, {
                  x: floor_y,
                  y: floor_x + 368,
                });
              }
            }
            var can_rock = true;
            var can_cloud = true;
            timer.createTimer(0, 1500, function () {
              if (can_cloud == true && Math.floor(Math.random() * 4) < 1) {
                cloud();
              }
            });
            const cloud_imgs = ["cloud_1.png", "cloud_2.png", "cloud_3.png"];
            const cloud_x = [ground + 95, ground + 95, ground + 95];
            function cloud() {
              console.log("cloud time!");
              let num = Math.floor(Math.random() * 3);
              console.log("cloud_asset: " + cloud_imgs[num]);
              let rnd_num = cloud_x[num] + Math.floor(Math.random() * 30);
              let new_cloud = hmUI.createWidget(hmUI.widget.IMG, {
                x: rnd_num + sum_num,
                y: 368,
                src: cloud_imgs[num],
              });
              move_cloud(new_cloud, num, rnd_num);
            }
            function move_cloud(cloud, cloud_selected, x_pos) {
              console.log("rock move!");
              let current_x = 368;
              let end_rock = 0 - rock_weights[cloud_selected];
              can_cloud = false;
              let num = 0;
              let cloud_x = x_pos;
              cloud_x += sum_num;
              let cloud_vel = Math.ceil(Math.random() * 5);
              let cloud_move_timer = timer.createTimer(0, 25, function () {
                if (gameover == false) {
                  num += 0.25;
                  if (num == 4) {
                    can_cloud = true;
                  }
                  if (num % 1 == 0) {
                    //console.log("player_x:"  + player_y)
                    //console.log("player_y:"  + player_x)
                    //console.log("current_x:"  + current_x)
                    //console.log("current_y:"  + rock_x[rock_selected])
                  }
                  if (current_x > end_rock) {
                    current_x -= cloud_vel;
                    //console.log("current_x: "+ current_x)
                    cloud.setProperty(hmUI.prop.MORE, {
                      y: current_x,
                      x: cloud_x,
                    });
                  } else {
                    console.log("cloud hides");
                    hmUI.deleteWidget(cloud);
                    timer.stopTimer(cloud_move_timer);
                  }
                } else {
                  console.log("cloud hides by game_over");
                  hmUI.deleteWidget(cloud);
                  timer.stopTimer(cloud_move_timer);
                }
              });
            }
            timer.createTimer(0, 1500, function () {
              console.log("can_generate: " + rock_generation);
              if (
                can_rock == true &&
                Math.floor(Math.random() * 3) < 1 &&
                rock_generation == true &&
                gameover == false
              ) {
                rock();
              }
            });
            const rock_imgs = ["rock_1.png", "rock_2.png", "rock_3.png"];
            const rock_x = [ground + 15, ground + 15, ground + 15];
            function rock() {
              console.log("rock time!");
              let num = Math.floor(Math.random() * 3);
              console.log("rock_asset: " + rock_imgs[num]);
              let new_rock = hmUI.createWidget(hmUI.widget.IMG, {
                x: rock_x[num] + sum_num,
                y: 368,
                src: rock_imgs[num],
              });
              move_rock(new_rock, num);
            }
            const rock_weights = [40, 40, 66];
            const rock_heights = [32, 46, 45];
            function destroy(rock) {
              console.log("rock destroys");
              hmUI.deleteWidget(rock);
            }
            function move_rock(rock, rock_selected) {
              console.log("rock move!");
              let current_x = 368;
              let end_rock = 0 - rock_weights[rock_selected];
              can_rock = false;
              let num = 0;
              let rock_y = rock_x[rock_selected];
              let can_over = true;
              rock_y += sum_num;
              let rock_move_timer = timer.createTimer(0, 25, function () {
                if (rock_generation == true && gameover == false) {
                  num += 0.25;
                  if (num == 1.75) {
                    can_rock = true;
                  }
                  if (num % 1 == 0) {
                    //console.log("player_x:"  + player_y)
                    //console.log("player_y:"  + player_x)
                    //console.log("current_x:"  + current_x)
                    //console.log("current_y:"  + rock_x[rock_selected])
                  }
                  if (current_x > end_rock) {
                    current_x -= game_vel;
                    //console.log("current_x: "+ current_x)
                    rock.setProperty(hmUI.prop.MORE, {
                      y: current_x,
                      x: rock_y,
                    });
                    if (
                      player_x + 61 >= current_x &&
                      player_x + 61 <=
                        current_x + rock_weights[rock_selected] &&
                      player_y + 17 >= rock_x[rock_selected] &&
                      player_y + 17 <=
                        rock_x[rock_selected] + rock_heights[rock_selected] &&
                      can_over == true
                    ) {
                      if (
                        player_y + 17 >= rock_x[rock_selected] &&
                        player_y + 17 <=
                          rock_x[rock_selected] +
                            rock_heights[rock_selected] -
                            13
                      ) {
                        console.log("no bounce");
                        if (shield_status == true) {
                          timer.stopTimer(rock_move_timer);
                          console.log("gameover, yes, but you have shield");
                          can_over = false;
                          destroy(rock);
                          shield_dur -= 0.25;
                          if (shield_dur < 1) {
                            shield_dur = 1;
                            shield_status = false;
                          }
                        } else {
                          console.log("gameover no shield and rock no jumped");
                          game_over();
                        }
                      } else {
                        console.log("rock_bounce");
                        rock_bounce();
                      }
                    }
                  } else {
                    console.log("rock hides");
                    hmUI.deleteWidget(rock);
                    timer.stopTimer(rock_move_timer);
                  }
                } else {
                  console.log("rock hides by ballom");
                  hmUI.deleteWidget(rock);
                  timer.stopTimer(rock_move_timer);
                }
              });
            }
            var want = false;
            var player_jump_ballom = false;
            var player_bounce = false;
            var number = 24;
            function jump_Sim() {
              console.log("jump call");
              let f = 0;
              let rest_nums = [];
              if (
                (player_jump == false &&
                  player_jump_ballom == false &&
                  player_bounce == false &&
                  player_y < ground) ||
                on_liane == true ||
                floor_arg[floor_num] == "u"
              ) {
                player_jump = true;
                let times = number;
                let jump_timer = timer.createTimer(0, 25, function () {
                  times--;
                  if (times > 0) {
                    if (player_y > ground + 65 && floor_arg[floor_num] == "d") {
                      more_high = true;
                      on_liane = true;
                      sum_num = -Math.floor((gravity / 3) * times);
                      rest_nums.push(Math.floor((gravity / 4) * times));
                      f = 1;
                    }
                    player_y += Math.floor((gravity / 3) * times);
                    player.setProperty(hmUI.prop.MORE, {
                      x: player_y,
                    });
                    jump.setProperty(hmUI.prop.MORE, {
                      src: "turn.png",
                    });
                  } else {
                    if (f == 1) {
                      console.log("rest_time_y");
                      rest_y(rest_nums);
                    }
                    player_jump = false;
                    mod = 0;
                    console.log("end");
                    timer.stopTimer(jump_timer);
                  }
                });
              }
            }
            function bounce() {
              console.log("bounce call");
              let f = 0;
              let rest_nums = [];
              if (
                player_jump_ballom == false &&
                player_jump == false &&
                player_bounce == false
              ) {
                player_jump_ballom = true;
                player_jump = true;
                let times = number - 4;
                let jump_timer = timer.createTimer(0, 25, function () {
                  times--;
                  if (times > 0) {
                    if (player_y > ground + 65 && floor_arg[floor_num] == "d") {
                      more_high = true;
                      on_liane = true;
                      sum_num = -Math.floor((gravity / 3) * times);
                      rest_nums.push(Math.floor((gravity / 4) * times));
                      f = 1;
                    }
                    player_y += Math.floor((gravity / 3) * times);
                    player.setProperty(hmUI.prop.MORE, {
                      x: player_y,
                    });
                    jump.setProperty(hmUI.prop.MORE, {
                      src: "turn.png",
                    });
                  } else {
                    if (f == 1) {
                      console.log("rest_time_y");
                      rest_y(rest_nums);
                    }
                    player_jump = false;
                    player_jump_ballom = false;
                    mod = 0;
                    console.log("end");
                    timer.stopTimer(jump_timer);
                    if (Math.max(...get_arr_ground()) > player_y) {
                      player_jump = true;
                      player_jump_ballom = true;
                      console.log("rebounce");
                      bounce();
                    }
                  }
                });
              }
            }
            function rock_bounce() {
              console.log("bounce call rock");
              let f = 0;
              let rest_nums = [];
              if (player_jump_ballom == false && player_jump == false) {
                player_bounce = true;
                player_jump = true;
                let times = number - 3;
                let jump_timer_ballom = timer.createTimer(0, 25, function () {
                  times--;
                  if (times > 0) {
                    if (player_y > ground + 65 && floor_arg[floor_num] == "d") {
                      more_high = true;
                      on_liane = true;
                      sum_num = -Math.floor((gravity / 3) * times);
                      rest_nums.push(Math.floor((gravity / 4) * times));
                      f = 1;
                    }
                    player_y += Math.floor((gravity / 3) * times);
                    player.setProperty(hmUI.prop.MORE, {
                      x: player_y,
                    });
                    jump.setProperty(hmUI.prop.MORE, {
                      src: "turn.png",
                    });
                  } else {
                    if (f == 1) {
                      console.log("rest_time_y");
                      rest_y(rest_nums);
                    }
                    player_jump = false;
                    player_bounce = false;
                    console.log("end");
                    timer.stopTimer(jump_timer_ballom);
                  }
                });
              }
            }
            function turn() {
              let round = timer.createTimer(0, 25, function () {
                if (want == true && player_y > ground) {
                  ang += 12;
                  player.setProperty(hmUI.prop.MORE, {
                    angle: ang,
                  });
                  can_nitre = true;
                } else {
                  timer.stopTimer(round);
                  jump.setProperty(hmUI.prop.MORE, {
                    src: "jump.png",
                  });
                  want = false;
                }
              });
            }
            function turn_op() {
              let round_op = timer.createTimer(0, 35, function () {
                if (want == false && player_y > ground) {
                  if (on_liane == false) {
                    ang -= 5;
                  }
                  player.setProperty(hmUI.prop.MORE, {
                    angle: ang,
                  });
                } else {
                  timer.stopTimer(round_op);
                  jump.setProperty(hmUI.prop.MORE, {
                    src: "jump.png",
                  });
                  want = true;
                }
              });
            }
            function rest_y(rest_arg) {
              let p = -1;
              let rest_timer_y = timer.createTimer(0, 25, function () {
                p++;
                sum_num = rest_arg[p];
                console.log("rest_arg: " + rest_arg[p]);
                if (p > rest_arg.length - 1) {
                  rest_num = 0;
                  sum_num = 0;
                  floor_y = -315;
                  timer.stopTimer(rest_timer_y);
                }
              });
            }
            function game_over() {
              game_vel = 0;
              gameover = true;
              hmUI.createWidget(hmUI.widget.FILL_RECT, {
                x: 0,
                y: 0,
                h: 492,
                w: 194,
                color: 0x000000,
              });
              hmUI.createWidget(hmUI.widget.IMG, {
                x: 65,
                y: 0,
                src: "end.png",
              });
            }
            var jump = hmUI.createWidget(hmUI.widget.IMG, {
              x: 93,
              y: 315,
              src: "jump.png",
            });
            jump.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
              if (
                player_y <= ground ||
                on_liane == true ||
                floor_arg[floor_num] == "u"
              ) {
                jump_Sim();
              } else {
                want = true;
                turn();
              }
            });
            jump.addEventListener(hmUI.event.CLICK_UP, (info) => {
              if (want == true) {
                want = false;
                turn_op();
              }
            });
            var scores = [];
            var t_Scores = String(score);
            for (let i = 0; i <= t_Scores.length; i++) {
              let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
                x: 10,
                y: 305 + 14 * i,
                src: "white/" + t_Scores.substring(i, i + 1) + ".png",
              });
              scores.push(score_TEXT);
            }
            //modification of score
            function update_score() {
              let t_Scores = String(score);
              for (let i = 0; i <= t_Scores.length; i++) {
                try {
                  scores[i].setProperty(hmUI.prop.MORE, {
                    src: "white/" + t_Scores.substring(i, i + 1) + ".png",
                  });
                } catch (e) {
                  let score_TEXT = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 10,
                    y: 305 + 14 * i,
                    src: "white/" + t_Scores.substring(i, i + 1) + ".png",
                  });
                  scores.push(score_TEXT);
                }
              }
            }
            function create_flag() {
              new_high = true;
              let flag = hmUI.createWidget(hmUI.widget.IMG, {
                x: ground + 17,
                y: 368,
                src: "flag.png",
              });
              console.log("cloud move!");
              let current_x = 368;
              let flag_move_timer = timer.createTimer(0, 25, function () {
                if (gameover == false) {
                  if (current_x > -55) {
                    current_x -= game_vel;
                    flag.setProperty(hmUI.prop.MORE, {
                      y: current_x,
                      x: ground + 17,
                    });
                  } else {
                    console.log("flag hides");
                    hmUI.deleteWidget(flag);
                    timer.stopTimer(flag_move_timer);
                  }
                } else {
                  console.log("flag hides by game_over");
                  hmUI.deleteWidget(flag);
                  timer.stopTimer(flag_move_timer);
                }
              });
            }
            ///////////
            hmUI.createWidget(hmUI.widget.BUTTON, {
              x: 50,
              y: 151,
              w: 40,
              h: 95,
              text: "",
              normal_src: "play.png",
              press_src: "play.png",
              click_func: (function (h) {
                return function () {
                  hmApp.gotoPage({
                    url: "page/192x490_s_l66/game",
                  });
                };
              })(e),
            });

            console.log("Menu Created");
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
