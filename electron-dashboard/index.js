const { app, BrowserWindow } = require("electron");

let appWin;

createWindow = () => {
  appWin = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Angular and Electron",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // appWin.loadURL(`file://${__dirname}/dist/index.html`);
  appWin.loadURL("http://localhost:4200");
  appWin.setMenu(null);

  appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
