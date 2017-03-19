const electron = require('electron')
const { app, BrowserWindow } = electron
let mainWindow = null

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.on('closed', _ => {
        mainWindow = null
    })
})