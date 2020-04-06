const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');

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
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: () => {
        mainWindow.reload();
    }
}));
menu.append(new MenuItem({
    label: 'Minimise',
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
        fullscreen:true,
        frame: false,
        webPreferences: {
            webviewTag:true,
            nodeIntegration:true
        },
    });
    Menu.setApplicationMenu(menu);
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', createWindow);
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});
