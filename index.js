const { app, BrowserWindow, globalShortcut, ipcMain} = require("electron");

const url = require('url')
const path = require("path");

let mainWindow;
var iconpath = path.join(__dirname, "icon.ico");
var pjson = require(__dirname + "/package.json");
const mainWindowJson = require(__dirname + "/mainWindow.json");

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: mainWindowJson.width,
    height: mainWindowJson.height,
    icon: iconpath,
    title: mainWindowJson.windowName,
    webPreferences: {
      plugins: true,
      nodeIntegration: true,
    },
    show: false,
    frame: true,
    backgroundColor: pjson.backgroundColor,
  });

  mainWindow.loadFile(path.join(__dirname, "app/views/layouts/app.html"));

  mainWindow.setMenu(null);
  mainWindow.show();

  mainWindow.webContents.on("did-finish-load", () => {});

  mainWindow.on("closed", (event) => {
    mainWindow = null;
  });

  globalShortcut.register("f5", function () {
    mainWindow.reload();
  });

  globalShortcut.register("f1", function () {
    mainWindow.toggleDevTools();
  });
};

app.on("ready", () => {
  createWindow();
});
