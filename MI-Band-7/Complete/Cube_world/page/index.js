/**
 * Build with ZMake tool
 */

(() => {
    let __$$app$$__ = __$$hmAppManager$$__.currentApp;
    let __$$module$$__ = __$$app$$__.current;
    __$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {
    
    hmUI.createWidget(hmUI.widget.FILL_RECT,{
      x: 0,
      y: 0,
      w: 192,
      h: 490,
      color: 0xccffcc
    });


    hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 6,
        y: 160,
        w: 180,
        h: 160,
        radius: 12,
        normal_color: 0xc99ff00,
        press_color: 0xfeb4a8,
        text: 'go to cube world',
        color: 0x000000,
        click_func: (button_widget) => {
          hmApp.gotoPage({url: "page/page1",param: "..."});//跳转页面
        }
      })



  },

    onDestroy() {

        // On destroy, remove if not required
    
      }
    });
    })();