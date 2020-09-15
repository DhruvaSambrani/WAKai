const { app, BrowserWindow, Menu, MenuItem, session } = require('electron');
const path = require('path');
const { url } = require('inspector');

const menu = new Menu()

var mainWindow;
menu.append(new MenuItem({
    label: 'Whatsapp',
    accelerator: 'CmdOrCtrl+Alt+W',
    click: () => {
        mainWindow.webContents.executeJavaScript("document.getElementById('wa').click();")
    }
}));
menu.append(new MenuItem({
    label: 'Kaizala',
    accelerator: 'CmdOrCtrl+Alt+K',
    click: () => {
        mainWindow.webContents.executeJavaScript("document.getElementById('ka').click();")
    }
}));
menu.append(new MenuItem({
    label: 'Gmail',
    accelerator: 'CmdOrCtrl+Alt+G',
    click: () => {
        mainWindow.webContents.executeJavaScript("document.getElementById('gm').click();")
    }
}));
menu.append(new MenuItem({
    label: 'Webmail',
    accelerator: 'CmdOrCtrl+Alt+I',
    click: () => {
        mainWindow.webContents.executeJavaScript("document.getElementById('im').click();")
    }
}));
menu.append(new MenuItem({
    label: 'Discord',
    accelerator: 'CmdOrCtrl+Alt+D',
    click: () => {
        mainWindow.webContents.executeJavaScript("document.getElementById('dc').click();")
    }
}));
menu.append(new MenuItem({
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: () => {
        mainWindow.reload();
    }
}));
menu.append(new MenuItem({
    label: 'Minimize',
    accelerator: 'Alt+F4',
    click: () => {
        mainWindow.minimize();
    }
}));
menu.append(new MenuItem({
    label: 'Quit',
    accelerator: 'CmdOrCtrl+Q',
    click: () => {
        mainWindow.close();
    }
}));
menu.append(new MenuItem({
    label: 'Clear Cache',
    accelerator: 'CmdOrCtrl+Shift+C',
    click: () => {
        mainWindow.webContents.session.clearCache();
        mainWindow.webContents.session.clearStorageData();
    }
}));
menu.append(new MenuItem({
    label: 'DevTools',
    accelerator: 'CmdOrCtrl+Shift+I',
    click: () => {
        mainWindow.openDevTools();
    }
}));

if (require('electron-squirrel-startup')) {
    app.quit();
}
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true
        },
    });
    Menu.setApplicationMenu(menu);
    mainWindow.maximize();
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });
};

app.on('ready', createWindow);
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});
