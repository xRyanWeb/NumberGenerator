import { app, BrowserWindow } from "electron";

function appWindow() {
  const win = new BrowserWindow({
    height: 1950,
    width: 710,
    resizable: false,
  });

  win.loadFile("../index.html");
  win.setMenu(null);
}

app.whenReady().then(() => {
  appWindow();
});
