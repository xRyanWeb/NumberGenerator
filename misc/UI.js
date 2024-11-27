"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function appWindow() {
    var win = new electron_1.BrowserWindow({
        height: 1950,
        width: 710,
        resizable: false,
    });
    win.loadFile("../index.html");
    win.setMenu(null);
}
electron_1.app.whenReady().then(function () {
    appWindow();
});
