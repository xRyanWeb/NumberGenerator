import { app, BrowserWindow } from "electron";

const AppWindow = () => {
  const window = new BrowserWindow({
    height: 950,
    width: 750,
    resizable: false,
  });
  window.loadFile("./index.html");
  window.on("maximize", () => {
    window.unmaximize();
  });
};

app.whenReady().then(() => {
  AppWindow();
});
