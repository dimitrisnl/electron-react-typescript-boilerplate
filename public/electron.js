const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// Uncomment if you want autoupdate
// const log = require('electron-log');
// const { autoUpdater } = require('electron-updater');

// Uncomment if you want autoupdate
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'info';

let tray = undefined;
let mainWindow = undefined;

app.dock.hide();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false,
    frame: false,
    fullscreenable: false,
    movable: false,
    resizable: false,
  });

  mainWindow.setVisibleOnAllWorkspaces(true);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // Hide the mainWindow when it loses focus
  mainWindow.on('blur', () => {
    if (!mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.hide();
    }
  });

  mainWindow.on('close', () => {
    app.quit();
  });
}

function getWindowPosition() {
  const windowBounds = mainWindow.getBounds();
  const trayBounds = tray.getBounds();

  // Center mainWindow horizontally below the tray icon
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  );

  // Position mainWindow 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4);

  return { x: x, y: y };
}

function showWindow() {
  const position = getWindowPosition();
  mainWindow.setPosition(position.x, position.y, false);
  mainWindow.show();
  mainWindow.focus();
}

function toggleWindow() {
  mainWindow.isVisible() ? mainWindow.hide() : showWindow();
}

function createTray() {
  // electron will pick @2x automatically
  tray = new Tray(path.join(__dirname, 'iconTemplate.png'));
  tray.setToolTip("Thank you Dimitri it's working!");
  tray.on('click', toggleWindow);
}

app.on('ready', () => {
  createWindow();
  createTray();
  // autoUpdater.checkForUpdates();

  // setInterval(() => {
  //   autoUpdater.checkForUpdates();
  // }, 1000 * 60 * 15);
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
