const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Carga la página de inicio de Vue.js.
  win.loadURL('http://localhost:8080');

  // Abre las herramientas de desarrollo.
  win.webContents.openDevTools();
}

// Este método se llama cuando Electron ha terminado de inicializarse y está listo para crear ventanas del navegador.
// Algunas APIs pueden usarse solo después de que este evento ocurra.
app.whenReady().then(createWindow);

// Sal cuando todas las ventanas estén cerradas, excepto en macOS. En macOS, es común que las aplicaciones y su barra de menú
// permanezcan activas hasta que el usuario salga explícitamente con Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // En macOS, es común volver a crear una ventana en la aplicación cuando el icono del muelle se hace clic y no hay otras ventanas abiertas.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
