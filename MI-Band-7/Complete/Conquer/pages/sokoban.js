//原创GiveMeFive,小程序版由EthanLeung修改
var mapdata = [
  {
    name: "The begin",
    size: { col: 8, row: 8 },
    map: [
      [0, 0, 5, 5, 5, 0, 0, 0],
      [0, 0, 5, 10, 5, 0, 0, 0],
      [0, 0, 5, 10, 5, 5, 5, 5],
      [5, 5, 5, 80, 10, 80, 10, 5],
      [5, 10, 10, 80, 60, 5, 5, 5],
      [5, 5, 5, 5, 80, 5, 0, 0],
      [0, 0, 0, 5, 10, 5, 0, 0],
      [0, 0, 0, 5, 5, 5, 0, 0],
    ],
    correct: [
      { row: 1, col: 3 },
      { row: 3, col: 6 },
      { row: 4, col: 1 },
      { row: 6, col: 4 },
    ],
  },
  {
    name: "The loop",
    size: { col: 9, row: 9 },
    map: [
      [5, 5, 5, 5, 5, 0, 0, 0, 0],
      [5, 10, 10, 10, 5, 0, 0, 0, 0],
      [5, 10, 80, 10, 5, 0, 5, 5, 5],
      [5, 10, 80, 60, 5, 0, 5, 10, 5],
      [5, 5, 5, 80, 5, 5, 5, 10, 5],
      [0, 5, 5, 10, 10, 10, 10, 10, 5],
      [0, 5, 10, 10, 10, 5, 10, 10, 5],
      [0, 5, 10, 10, 10, 5, 5, 5, 5],
      [0, 5, 5, 5, 5, 5, 0, 0, 0],
    ],
    correct: [
      { row: 3, col: 7 },
      { row: 4, col: 7 },
      { row: 5, col: 7 },
    ],
  },
  {
    name: "Concluyed step",
    size: { col: 10, row: 7 },
    map: [
      [0, 5, 5, 5, 5, 5, 5, 5, 0, 0],
      [0, 5, 10, 10, 10, 10, 10, 5, 5, 5],
      [5, 5, 80, 5, 5, 5, 10, 10, 10, 5],
      [5, 10, 10, 60, 80, 10, 10, 80, 10, 5],
      [5, 10, 10, 10, 5, 10, 80, 10, 5, 5],
      [5, 5, 10, 10, 5, 10, 10, 10, 5, 0],
      [0, 5, 5, 5, 5, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 4, col: 2 },
      { row: 4, col: 3 },
      { row: 5, col: 2 },
      { row: 5, col: 3 },
    ],
  },
  {
    name: "Parallelism",
    size: { col: 13, row: 13 },
    map: [
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
      [5, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 5, 0],
      [5, 10, 5, 10, 10, 80, 10, 5, 10, 80, 10, 5, 0],
      [5, 10, 5, 10, 5, 5, 5, 5, 10, 10, 10, 5, 0],
      [5, 10, 10, 10, 10, 10, 10, 5, 5, 10, 5, 5, 5],
      [5, 10, 5, 10, 10, 10, 10, 10, 5, 10, 80, 10, 5],
      [5, 10, 5, 10, 5, 10, 60, 10, 5, 10, 5, 10, 5],
      [5, 10, 80, 10, 5, 10, 10, 10, 10, 10, 5, 10, 5],
      [5, 5, 5, 10, 5, 5, 10, 10, 10, 10, 10, 10, 5],
      [0, 5, 10, 10, 10, 5, 5, 5, 5, 10, 5, 10, 5],
      [0, 5, 10, 80, 10, 5, 10, 80, 10, 10, 5, 10, 5],
      [0, 5, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 5],
      [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 1, col: 1 },
      { row: 4, col: 1 },
      { row: 4, col: 4 },
      { row: 11, col: 11 },
      { row: 8, col: 11 },
      { row: 8, col: 8 },
    ],
  },
  {
    name: "Orientations",
    size: { col: 8, row: 8 },
    map: [
      [0, 5, 5, 5, 5, 5, 0, 0],
      [0, 5, 10, 60, 5, 5, 5, 0],
      [0, 5, 10, 80, 10, 10, 5, 0],
      [5, 5, 5, 10, 5, 10, 5, 5],
      [5, 10, 5, 10, 5, 10, 10, 5],
      [5, 10, 80, 10, 10, 5, 10, 5],
      [5, 10, 10, 10, 10, 80, 10, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 4, col: 1 },
      { row: 5, col: 1 },
      { row: 6, col: 1 },
    ],
  },
  {
    name: "The espiral",
    size: { col: 13, row: 11 },
    map: [
      [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
      [5, 5, 5, 5, 10, 10, 10, 10, 10, 5, 0, 0, 0],
      [5, 10, 10, 10, 10, 5, 5, 5, 10, 5, 0, 0, 0],
      [5, 10, 5, 10, 5, 10, 10, 10, 10, 5, 5, 0, 0],
      [5, 10, 5, 10, 80, 10, 80, 5, 10, 10, 5, 0, 0],
      [5, 10, 5, 10, 10, 10, 10, 10, 5, 10, 5, 0, 0],
      [5, 10, 10, 5, 80, 10, 80, 10, 5, 10, 5, 0, 0],
      [5, 5, 10, 10, 10, 10, 5, 10, 5, 10, 5, 5, 5],
      [0, 5, 10, 5, 5, 5, 10, 10, 10, 10, 10, 60, 5],
      [0, 5, 10, 10, 10, 10, 10, 5, 5, 10, 10, 10, 5],
      [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 2, col: 4 },
      { row: 4, col: 8 },
      { row: 6, col: 2 },
      { row: 8, col: 6 },
    ],
  },
  {
    name: "Box per box",
    size: { col: 10, row: 8 },
    map: [
      [0, 0, 0, 5, 5, 5, 5, 5, 5, 5],
      [0, 0, 5, 5, 10, 10, 5, 10, 60, 5],
      [0, 0, 5, 10, 10, 10, 5, 80, 10, 5],
      [0, 0, 5, 80, 10, 10, 80, 10, 10, 5],
      [0, 0, 5, 10, 80, 5, 5, 10, 10, 5],
      [5, 5, 5, 10, 80, 10, 5, 10, 5, 5],
      [5, 10, 10, 10, 10, 10, 10, 10, 5, 0],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 6, col: 1 },
      { row: 6, col: 2 },
      { row: 6, col: 3 },
      { row: 6, col: 4 },
      { row: 6, col: 5 },
    ],
  },
  {
    name: "This is the way",
    size: { col: 10, row: 7 },
    map: [
      [0, 0, 0, 5, 5, 5, 5, 5, 5, 0],
      [0, 5, 5, 5, 10, 10, 10, 10, 5, 0],
      [5, 5, 10, 10, 80, 5, 5, 10, 5, 5],
      [5, 10, 10, 80, 10, 80, 10, 10, 60, 5],
      [5, 10, 10, 10, 80, 10, 80, 10, 5, 5],
      [5, 5, 5, 5, 5, 5, 10, 10, 5, 0],
      [0, 0, 0, 0, 0, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 2, col: 2 },
      { row: 3, col: 1 },
      { row: 3, col: 2 },
      { row: 4, col: 1 },
      { row: 4, col: 2 },
    ],
  },
  {
    name: "Your own way",
    size: { col: 11, row: 9 },
    map: [
      [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
      [0, 5, 10, 10, 5, 5, 10, 10, 10, 5, 0],
      [0, 5, 10, 10, 10, 80, 10, 10, 10, 5, 0],
      [0, 5, 80, 10, 5, 5, 5, 10, 80, 5, 0],
      [0, 5, 10, 5, 10, 10, 10, 5, 10, 5, 0],
      [5, 5, 10, 5, 10, 10, 10, 5, 10, 5, 5],
      [5, 10, 80, 10, 10, 80, 10, 10, 80, 10, 5],
      [5, 10, 10, 10, 10, 10, 5, 10, 10, 60, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 4, col: 4 },
      { row: 4, col: 5 },
      { row: 4, col: 6 },
      { row: 5, col: 4 },
      { row: 5, col: 5 },
      { row: 5, col: 6 },
    ],
  },
  {
    name: "Beliefs",
    size: { col: 8, row: 7 },
    map: [
      [0, 0, 5, 5, 5, 5, 5, 5],
      [0, 0, 5, 10, 10, 10, 10, 5],
      [5, 5, 5, 80, 80, 80, 10, 5],
      [5, 60, 10, 80, 10, 10, 10, 5],
      [5, 10, 80, 10, 10, 10, 5, 5],
      [5, 5, 5, 5, 10, 10, 5, 0],
      [0, 0, 0, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 3, col: 4 },
      { row: 3, col: 5 },
      { row: 4, col: 3 },
      { row: 4, col: 4 },
      { row: 4, col: 5 },
    ],
  },
  {
    name: "Easy way",
    size: { col: 12, row: 6 },
    map: [
      [0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5],
      [5, 5, 10, 10, 5, 0, 0, 5, 10, 10, 10, 5],
      [5, 10, 80, 10, 5, 5, 5, 5, 80, 10, 10, 5],
      [5, 10, 10, 80, 10, 10, 10, 10, 10, 80, 10, 5],
      [5, 5, 10, 10, 10, 10, 10, 10, 60, 10, 5, 5],
      [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 3, col: 4 },
      { row: 3, col: 5 },
      { row: 3, col: 6 },
      { row: 3, col: 7 },
    ],
  },
  {
    name: "My only gift",
    size: { col: 8, row: 7 },
    map: [
      [0, 0, 5, 5, 5, 5, 5, 0],
      [5, 5, 5, 10, 10, 60, 5, 0],
      [5, 10, 10, 80, 10, 10, 5, 5],
      [5, 10, 10, 10, 80, 10, 10, 5],
      [5, 5, 5, 10, 10, 80, 10, 5],
      [0, 0, 5, 10, 10, 10, 5, 5],
      [0, 0, 5, 5, 5, 5, 5, 0],
    ],
    correct: [
      { row: 2, col: 4 },
      { row: 3, col: 3 },
      { row: 3, col: 5 },
    ],
  },
  {
    name: "Compilations",
    size: { col: 8, row: 8 },
    map: [
      [0, 0, 5, 5, 5, 5, 0, 0],
      [0, 0, 5, 10, 10, 5, 0, 0],
      [0, 5, 5, 10, 10, 5, 5, 0],
      [0, 5, 10, 10, 80, 10, 5, 0],
      [5, 5, 10, 80, 10, 10, 5, 5],
      [5, 10, 10, 5, 80, 80, 10, 5],
      [5, 10, 10, 60, 10, 10, 10, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 1, col: 3 },
      { row: 1, col: 4 },
      { row: 2, col: 4 },
      { row: 3, col: 5 },
    ],
  },
  {
    name: "Paralel logic",
    size: { col: 8, row: 7 },
    map: [
      [5, 5, 5, 5, 5, 5, 5, 5],
      [5, 10, 10, 5, 10, 10, 10, 5],
      [5, 10, 80, 10, 10, 80, 10, 5],
      [5, 60, 80, 10, 10, 10, 5, 5],
      [5, 10, 80, 10, 10, 80, 10, 5],
      [5, 10, 10, 5, 10, 10, 10, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 2, col: 3 },
      { row: 2, col: 4 },
      { row: 3, col: 3 },
      { row: 4, col: 3 },
      { row: 4, col: 4 },
    ],
  },
  {
    name: "Remembering",
    size: { col: 8, row: 9 },
    map: [
      [0, 5, 5, 5, 5, 5, 5, 0],
      [5, 5, 5, 10, 10, 10, 5, 0],
      [5, 10, 60, 80, 10, 10, 5, 0],
      [5, 5, 5, 10, 80, 10, 5, 0],
      [5, 10, 5, 5, 80, 10, 5, 0],
      [5, 10, 5, 10, 10, 10, 5, 5],
      [5, 80, 10, 80, 80, 80, 10, 5],
      [5, 10, 10, 10, 10, 10, 10, 5],
      [5, 5, 5, 5, 5, 5, 5, 5],
    ],
    correct: [
      { col: 1, row: 2 },
      { col: 5, row: 3 },
      { col: 1, row: 4 },
      { col: 4, row: 5 },
      { col: 3, row: 6 },
      { col: 6, row: 6 },
      { col: 4, row: 7 },
    ],
  },
  {
    name: "Not what you think",
    size: { col: 11, row: 10 },
    map: [
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0],
      [5, 10, 10, 10, 5, 10, 10, 10, 5, 0, 0],
      [5, 10, 10, 80, 10, 10, 10, 10, 5, 0, 0],
      [5, 10, 80, 10, 5, 10, 80, 10, 5, 0, 0],
      [5, 5, 10, 10, 5, 10, 80, 5, 5, 5, 0],
      [5, 10, 10, 5, 5, 10, 10, 10, 10, 5, 0],
      [5, 60, 10, 10, 5, 80, 10, 10, 10, 5, 5],
      [5, 10, 80, 10, 5, 10, 10, 10, 10, 10, 5],
      [5, 10, 10, 10, 5, 5, 5, 10, 10, 10, 5],
      [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5],
    ],
    correct: [
      { row: 7, col: 7 },
      { row: 7, col: 8 },
      { row: 7, col: 9 },
      { row: 8, col: 7 },
      { row: 8, col: 8 },
      { row: 8, col: 9 },
    ],
  },
  {
    name: "Conspirations",
    size: { col: 11, row: 10 },
    map: [
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
      [5, 10, 10, 5, 10, 10, 5, 10, 10, 5, 5],
      [5, 10, 10, 10, 10, 10, 80, 80, 10, 10, 5],
      [5, 10, 80, 5, 10, 10, 80, 60, 10, 10, 5],
      [5, 5, 10, 5, 10, 80, 10, 10, 80, 10, 5],
      [5, 5, 10, 5, 5, 5, 5, 5, 10, 5, 5],
      [5, 10, 10, 5, 10, 10, 10, 5, 80, 10, 5],
      [5, 10, 10, 10, 10, 80, 10, 10, 10, 10, 5],
      [5, 10, 10, 5, 10, 80, 10, 10, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0],
    ],
    correct: [
      { row: 6, col: 4 },
      { row: 6, col: 5 },
      { row: 6, col: 6 },
      { row: 7, col: 4 },
      { row: 7, col: 5 },
      { row: 7, col: 6 },
      { row: 7, col: 7 },
      { row: 8, col: 4 },
      { row: 8, col: 7 },
    ],
  },
  {
    name: "Seing the future",
    size: { col: 9, row: 9 },
    map: [
      [0, 0, 0, 0, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 10, 10, 10, 5],
      [5, 10, 80, 10, 80, 10, 80, 10, 5],
      [5, 10, 10, 10, 10, 10, 10, 10, 5],
      [5, 5, 5, 10, 10, 5, 5, 5, 5],
      [5, 10, 10, 10, 10, 10, 10, 10, 5],
      [5, 10, 80, 10, 80, 10, 80, 10, 5],
      [5, 10, 60, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 0, 0, 0, 0, 0],
    ],
    correct: [
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 4, col: 3 },
      { row: 4, col: 4 },
      { row: 5, col: 3 },
      { row: 5, col: 4 },
    ],
  },
  {
    name: "The star",
    size: { col: 11, row: 11 },
    map: [
      [5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0],
      [5, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 10, 10, 10, 10, 10, 5, 10, 10, 10, 5],
      [5, 10, 10, 5, 10, 80, 10, 10, 10, 10, 5],
      [5, 5, 80, 5, 5, 10, 5, 5, 10, 5, 5],
      [5, 10, 60, 5, 10, 10, 10, 10, 10, 10, 5],
      [5, 10, 80, 10, 10, 10, 5, 5, 5, 10, 5],
      [5, 5, 10, 5, 5, 10, 5, 5, 5, 10, 5],
      [5, 10, 10, 10, 80, 10, 80, 10, 10, 10, 5],
      [5, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    ],
    correct: [
      { row: 4, col: 5 },
      { row: 5, col: 5 },
      { row: 6, col: 5 },
      { row: 5, col: 4 },
      { row: 5, col: 6 },
    ],
  },
  {
    name: "The hawk eye",
    size: { col: 8, row: 7 },
    map: [
      [0, 5, 5, 5, 5, 5, 5, 0],
      [5, 5, 10, 10, 10, 10, 5, 5],
      [5, 10, 80, 10, 80, 80, 10, 5],
      [5, 10, 10, 10, 10, 10, 10, 5],
      [5, 10, 80, 80, 10, 80, 10, 5],
      [5, 5, 5, 10, 60, 5, 5, 5],
      [0, 0, 5, 5, 5, 5, 0, 0],
    ],
    correct: [
      { row: 3, col: 1 },
      { row: 3, col: 2 },
      { row: 3, col: 3 },
      { row: 3, col: 4 },
      { row: 3, col: 5 },
      { row: 3, col: 6 },
    ],
  },
];
try {
  (function () {
    var f = __$$hmAppManager$$__.currentApp,
      F = f.current;
    new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(f, F),
      "drink",
    );
    DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    F.module = DeviceRuntimeCore.Page({
      init_view() {
        var dif_arr = [
          ["1", "0", "0", "0", "0"],
          ["2", "0", "0", "0", "0"],
          ["2", "0", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "2", "1", "0", "0"],
          ["2", "2", "0", "0", "0"],
          ["2", "2", "1", "0", "0"],
          ["2", "2", "2", "0", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "0", "0", "0"],
          ["2", "1", "0", "0", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "2", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "1", "0"],
          ["2", "2", "2", "2", "0"],
          ["2", "2", "2", "2", "1"],
          ["2", "2", "2", "2", "2"],
          ["2", "2", "2", "2", "2"],
        ];
        console.log("arr:" + dif_arr[5][2])
        hmUI.setStatusBarVisible(false);
        hmUI.setLayerScrolling(false);
        var lang = hmFS.SysProGetInt("lang_42");
        if (lang == undefined) {
          hmFS.SysProSetInt("lang_42", 0);
          lang = 0;
        }
        var w2;
        if (lang == 0) {
          w2 = "EXIT";
        } else if (lang == 1) {
          w2 = "SALIR";
        } else if (lang == 2) {
          w2 = "萨利尔";
        } else {
          w2 = "SORTIE";
        }
        var path;
        var theme = hmFS.SysProGetInt("theme_42");
        if (theme == 0) {
          path = "/box/";
        } else {
          path = "/box2/";
        }
        var stars = [];
        let txtBg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          color: 0x000000,
        });
        txtBg.setProperty(hmUI.prop.VISIBLE, false);
        let txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 0,
          y: 0,
          w: 192,
          h: 368,
        });
        txtGroup.setProperty(hmUI.prop.VISIBLE, true);
        const maxCol = 13;
        const boxSize = 17;
        const EMPTY = 0;
        const WALL = 5;
        const SPACE = 10;
        const PLAYER = 60;
        const BOX = 80;
        const UP = 1;
        const DOWN = 2;
        const LEFT = 3;
        const RIGHT = 4;
        const SAVE_KEY = "BOX_SAVING";
        const SAVE_KEY_CURRENT = "BOX_SAVING_CURRENT";
        var wdMap = {};
        var currentData = {};
        function setBlockSrc(a, b, c) {
          var d =
            wdMap[currentData.startBX + a + "," + (currentData.startBY + b)];
          var e = "";
          var f = currentData.correctObj[a + "," + b];
          if (c == WALL) {
            e = "images" + path + "wall.png";
          } else if (c == SPACE) {
            if (f) {
              e = "images" + path + "target.png";
            } else {
              e = "images" + path + "ground.png";
            }
          } else if (c == PLAYER) {
            e = "images" + path + "man.png";
          } else if (c == BOX) {
            if (f) {
              e = "images" + path + "arrive.png";
            } else {
              e = "images" + path + "box.png";
            }
          } else {
            e = "";
          }
          d.setProperty(hmUI.prop.MORE, { src: e });
        }
        function initUI() {
          var x = -14;
          var y = 80;
          for (var i = 0; i < maxCol; i++) {
            for (var j = 0; j < maxCol; j++) {
              var a = txtGroup.createWidget(hmUI.widget.IMG, {
                x: x + j * boxSize,
                y: y + i * boxSize,
                src: "images" + path + "ground.png",
              });
              wdMap[i + "," + j] = a;
            }
          }
        }
        function clearUI() {
          for (var a in wdMap) {
            wdMap[a].setProperty(hmUI.prop.MORE, { src: "" });
          }
        }
        function loadAndInitMap(a) {
          if (a > hmFS.SysProGetInt64(SAVE_KEY_CURRENT)) {
            hmFS.SysProSetInt64(SAVE_KEY_CURRENT, a);
          }
          currentData.level = a;
          for (let i = 0; i < 5; i++) {
            stars[i].setProperty(hmUI.prop.MORE, {
              src: "stars/" + dif_arr[currentData.level][i] + ".png",
            });
          }
          currentData.map = JSON.parse(JSON.stringify(mapdata[a]));
          var b = {};
          for (var i = 0; i < currentData.map.correct.length; i++) {
            var c = currentData.map.correct[i];
            b[c.row + "," + c.col] = true;
          }
          currentData.correctObj = b;
          var d = currentData.map.size.col;
          var e = currentData.map.size.row;
          clearUI();
          currentData.startBX = Math.floor((maxCol - e) / 2);
          currentData.startBY = Math.floor((maxCol - d) / 2);
          for (var i = 0; i < e; i++) {
            for (var j = 0; j < d; j++) {
              var f = currentData.map.map[i][j];
              setBlockSrc(i, j, f);
              if (PLAYER == f) {
                currentData.x = i;
                currentData.y = j;
              }
            }
          }
          levelWd.setProperty(hmUI.prop.MORE, {
            text: currentData.map.name,
          });
        }
        function loadAndInitMapSet(a) {
          currentData.level = a;
          for (let i = 0; i < 5; i++) {
            stars[i].setProperty(hmUI.prop.MORE, {
              src: "stars/" + dif_arr[currentData.level][i] + ".png",
            });
          }
          currentData.map = JSON.parse(JSON.stringify(mapdata[a]));
          var b = {};
          for (var i = 0; i < currentData.map.correct.length; i++) {
            var c = currentData.map.correct[i];
            b[c.row + "," + c.col] = true;
          }
          currentData.correctObj = b;
          var d = currentData.map.size.col;
          var e = currentData.map.size.row;
          clearUI();
          currentData.startBX = Math.floor((maxCol - e) / 2);
          currentData.startBY = Math.floor((maxCol - d) / 2);
          for (var i = 0; i < e; i++) {
            for (var j = 0; j < d; j++) {
              var f = currentData.map.map[i][j];
              setBlockSrc(i, j, f);
              if (PLAYER == f) {
                currentData.x = i;
                currentData.y = j;
              }
            }
          }
          levelWd.setProperty(hmUI.prop.MORE, {
            text: currentData.map.name,
          });
        }
        function move(a) {
          var b = currentData.x;
          var c = currentData.y;
          var d = currentData.x;
          var e = currentData.y;
          if (a == UP) {
            b -= 1;
            d -= 2;
          } else if (a == DOWN) {
            b += 1;
            d += 2;
          } else if (a == LEFT) {
            c -= 1;
            e -= 2;
          } else if (a == RIGHT) {
            c += 1;
            e += 2;
          }
          var f = currentData.map.map[b][c];
          if (f == BOX) {
            var g = currentData.map.map[d][e];
            if (g == SPACE) {
              blockMove(b, c, d, e);
              playerMove(b, c);
              testSuccess();
            }
          } else if (f == SPACE) {
            playerMove(b, c);
          }
        }
        function blockMove(x, y, a, b) {
          currentData.map.map[x][y] = SPACE;
          setBlockSrc(x, y, SPACE);
          currentData.map.map[a][b] = BOX;
          setBlockSrc(a, b, BOX);
        }
        function playerMove(x, y) {
          currentData.map.map[currentData.x][currentData.y] = SPACE;
          setBlockSrc(currentData.x, currentData.y, SPACE);
          currentData.x = x;
          currentData.y = y;
          currentData.map.map[currentData.x][currentData.y] = PLAYER;
          setBlockSrc(currentData.x, currentData.y, PLAYER);
        }
        function testSuccess() {
          var b = true;
          for (var i = 0; i < currentData.map.correct.length; i++) {
            var a = currentData.map.correct[i];
            if (currentData.map.map[a.row][a.col] != BOX) {
              b = false;
            }
          }
          if (b) {
            var c = currentData.level;
            c += 1;
            if (c >= mapdata.length) {
              c = 0;
              hmUI.showToast({ text: "All games passed, good!" });
            }
           for (let i = 0; i < 5; i++) {
              stars[i].setProperty(hmUI.prop.MORE, {
                src: "stars/" + dif_arr[currentData.level][i] + ".png",
              });
            }
            if (c > hmFS.SysProGetInt64(SAVE_KEY_CURRENT)) {
              hmFS.SysProSetInt64(SAVE_KEY, c);
            }
            loadAndInitMap(c);
          }
        }
        const levelWd = txtGroup.createWidget(hmUI.widget.TEXT, {
          x: 5,
          y: 3,
          w: 192,
          text: "level 1",
          text_size: 18,
          color: 0x929292,
        });
        for (let i = 0; i < 5; i++) {
          const star = txtGroup.createWidget(hmUI.widget.IMG, {
            x: 5 + (27 * i),
            y: 28,
            src: "a.png",
          });
          stars.push(star);
        }
        initUI();

        const ctLevel = hmFS.SysProGetInt64(SAVE_KEY_CURRENT);
        var maxLevel = hmFS.SysProGetInt64(SAVE_KEY);
        if (ctLevel) {
          loadAndInitMap(ctLevel);
        } else {
          loadAndInitMap(0);
        }
        if (!maxLevel) {
          maxLevel = 0;
        }
        for (let i = 0; i < 5; i++) {
          stars[i].setProperty(hmUI.prop.MORE, {
            src: "stars/" + dif_arr[currentData.level][i] + ".png",
          });
        }
        var leftWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 140,
          w: 96,
          h: 166,
          src: "images" + path + "empty.png",
        });
        var rightWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 97,
          y: 140,
          w: 96,
          h: 166,
          src: "images" + path + "empty.png",
        });
        var upWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 78,
          w: 192,
          h: 60,
          src: "images" + path + "empty.png",
        });
        var downWd = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 309,
          w: 192,
          h: 70,
          src: "images" + path + "empty.png",
        });
        if (variable == 1) {
          leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(LEFT);
          });
          rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(RIGHT);
          });
          upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(UP);
          });
          downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
            move(DOWN);
          });
        } else {
          hmApp.registerGestureEvent(function (p) {
            switch (p) {
              case hmApp.gesture.UP:
                move(UP);
                break;
              case hmApp.gesture.DOWN:
                move(DOWN);
                break;
              case hmApp.gesture.LEFT:
                move(LEFT);
                break;
              case hmApp.gesture.RIGHT:
                move(RIGHT);
                break;
            }
            return !0;
          });
        }
        const pause = txtGroup.createWidget(hmUI.widget.BUTTON, {
          x: 140,
          y: 10,
          w: 50,
          h: 50,
          press_src: "pause.png",
          normal_src: "pause.png",
          radius: 0,
          text: "",
          text_size: 0,
          click_func: function () {
            render_Menu();
          },
        });
        var variable = hmFS.SysProGetInt("move_var");
        var st = hmFS.SysProGetBool("move_stat");
        if (st == undefined) st = true;
        if (variable == undefined) variable = 1;
        function render_Menu() {
          let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: 194,
            h: 368,
            color: 0x000000,
          });
          let play = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 140,
            y: 10,
            w: 50,
            h: 50,
            press_src: "play.png",
            normal_src: "play.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              bg.setProperty(hmUI.prop.VISIBLE, false);
              play.setProperty(hmUI.prop.VISIBLE, false);
              menu.setProperty(hmUI.prop.VISIBLE, false);
              rst.setProperty(hmUI.prop.VISIBLE, false);
              button.setProperty(hmUI.prop.VISIBLE, false);
              ex.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
          var ex = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 10,
            y: 10,
            w: 100,
            h: 50,
            radius: 14,
            text: w2,
            text_size: 30,
            color: 0xffffff,
            press_color: 0x555555,
            normal_color: 0x686868,
            click_func: function () {
              hmApp.goBack();
            },
          });
          let button = hmUI.createWidget(hmUI.widget.IMG, {
            x: 50,
            y: 300,
            src: "switch_" + st + ".png",
          });
          button.addEventListener(hmUI.event.CLICK_DOWN, function () {
            test();
          });
          function test() {
            if (variable <= 1) {
              variable = 2;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    move(UP);
                    break;
                  case hmApp.gesture.DOWN:
                    move(DOWN);
                    break;
                  case hmApp.gesture.LEFT:
                    move(LEFT);
                    break;
                  case hmApp.gesture.RIGHT:
                    move(RIGHT);
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              st = false;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            } else if (variable >= 2) {
              variable = 1;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    console.log("b");
                    break;
                  case hmApp.gesture.DOWN:
                    console.log("b");
                    break;
                  case hmApp.gesture.LEFT:
                    console.log("b");
                    break;
                  case hmApp.gesture.RIGHT:
                    console.log("b");
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(LEFT);
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(RIGHT);
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(UP);
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                move(DOWN);
              });
              st = true;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            } else {
              variable = 2;
              hmApp.registerGestureEvent(function (p) {
                switch (p) {
                  case hmApp.gesture.UP:
                    move(UP);
                    break;
                  case hmApp.gesture.DOWN:
                    move(DOWN);
                    break;
                  case hmApp.gesture.LEFT:
                    move(LEFT);
                    break;
                  case hmApp.gesture.RIGHT:
                    move(RIGHT);
                    break;
                }
                return !0;
              });
              leftWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              rightWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              upWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              downWd.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                console.log("a");
              });
              check = false;
              button.setProperty(hmUI.prop.MORE, {
                src: "switch_" + st + ".png",
              });
              hmFS.SysProSetInt("move_var", variable);
              hmFS.SysProSetBool("move_stat", st);
            }
          }
          hmFS.SysProSetInt("move_var", variable);
          hmFS.SysProSetBool("move_stat", st);
          let rst = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 61,
            y: 100,
            w: 75,
            h: 75,
            press_src: "restart.png",
            normal_src: "restart.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              loadAndInitMap(currentData.level);
              bg.setProperty(hmUI.prop.VISIBLE, false);
              play.setProperty(hmUI.prop.VISIBLE, false);
              menu.setProperty(hmUI.prop.VISIBLE, false);
              rst.setProperty(hmUI.prop.VISIBLE, false);
              button.setProperty(hmUI.prop.VISIBLE, false);
              ex.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
          let menu = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 61,
            y: 200,
            w: 75,
            h: 75,
            press_src: "menu.png",
            normal_src: "menu.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              go_levels();
            },
          });
        }
        var move_RIGHT = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 144,
          y: 310,
          w: 48,
          h: 58,
          radius: 0,
          text: "→",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(RIGHT);
          },
        });
        var move_LEFT = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 0,
          y: 310,
          w: 48,
          h: 58,
          radius: 0,
          text: "←",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(LEFT);
          },
        });
        var move_UP = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 48,
          y: 310,
          w: 96,
          h: 29,
          radius: 0,
          text: "↑",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(UP);
          },
        });
        var move_DOWN = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 48,
          y: 339,
          w: 96,
          h: 29,
          radius: 0,
          text: "↓",
          text_size: 30,
          color: 0xffffff,
          press_color: 0x555555,
          normal_color: 0x686868,
          click_func: function () {
            move(DOWN);
          },
        });
        const x_POS = [
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
          141,
          13,
          77,
        ];
        var y_POS = [
          13,
          13,
          13,
          65,
          65,
          65,
          117,
          117,
          117,
          169,
          169,
          169,
          221,
          221,
          221,
          273,
          273,
          273,
          325,
          325,
        ];
        function go_levels() {
          let j = hmFS.SysProGetInt64(SAVE_KEY_CURRENT);
          let m = currentData.level;
          let levels = [];
          let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: 194,
            h: 368,
            color: 0x000000,
          });
          for (let i = 0; i < mapdata.length; i++) {
            let level = hmUI.createWidget(hmUI.widget.BUTTON, {
              x: x_POS[i],
              y: y_POS[i],
              w: 40,
              h: 40,
              press_color: i <= j && i != m
                ? 0x686868
                : i == m
                ? 0x1234ff
                : 0xff0000,
              normal_color: i <= j && i != m
                ? 0x555555
                : i == m
                ? 0x0000ff
                : 0xff2323,
              color: 0xffffff,
              radius: 4,
              text: i + 1,
              text_size: 14,
              click_func: function () {
                if (i <= j) {
                  loadAndInitMapSet(i);
                  for (let i = 0; i < mapdata.length; i++) {
                    levels[i].setProperty(hmUI.prop.VISIBLE, false);
                  }
                  bg.setProperty(hmUI.prop.VISIBLE, false);
                  arrow.setProperty(hmUI.prop.VISIBLE, false);
                }else{
                  hmUI.showToast({
                    text: "Complete the levels in red which are before this level to play this level"
                  })
                }
              },
            });
            levels.push(level);
          }
          let arrow = hmUI.createWidget(hmUI.widget.BUTTON, {
            x: 131,
            y: 315,
            w: 50,
            h: 50,
            press_src: "arrow.png",
            normal_src: "arrow.png",
            radius: 0,
            text: "",
            text_size: 0,
            click_func: function () {
              for (let i = 0; i < mapdata.length; i++) {
                levels[i].setProperty(hmUI.prop.VISIBLE, false);
              }
              bg.setProperty(hmUI.prop.VISIBLE, false);
              arrow.setProperty(hmUI.prop.VISIBLE, false);
            },
          });
        }
      },
      onInit: function () {
        console.log("index page.js on init invoke");
        this.init_view();
      },
      onReady: function () {
        console.log("index page.js on ready invoke");
      },
      onShow: function () {
        console.log("index page.js on show invoke");
      },
      onHide: function () {
        console.log("index page.js on hide invoke");
      },
      onDestory: function () {
        console.log("index page.js on destory invoke"),
          hmApp.unregisterGestureEvent();
      },
    });
  })();
} catch (f) {
  console.log(f);
}
