//deshabilita notificaciones de seguridad
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
const { app, BrowserWindow,dialog } = require('electron')
require('@electron/remote/main').initialize()
function createWindow() {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 540,
    height: 495,
    //resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  require("@electron/remote/main").enable(win.webContents)
  // y carga el  index.html de la aplicación.
  win.loadFile('index.html')
  // eliminar el menú por defecto de Chromium
  //quita menú por defecto de chromium
  win.setMenu(null)
  //para mostrar en la ventana la herramientas de desarrollo de chrome:
  //win.webContents.openDevTools()

}

app.on('ready', createWindow)