const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 400, height: 400 });
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    //Open the DevTools
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('ready', function() {
    createWindow();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});