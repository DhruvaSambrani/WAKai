const { shell } = require('electron');

wa_web = document.getElementById('whatsapp_web');
ka_web = document.getElementById('kaizala_web');
gm_web = document.getElementById('gmail_web');
im_web = document.getElementById('imail_web');
dc_web = document.getElementById('discord_web');

function openApp(evt, appName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(appName + "_web").style.display = "inherit";
    evt.currentTarget.className += " active";
    if (appName == "whatsapp") {
        document.documentElement.style.setProperty('--tab-color', '#128C7E');
    }
    if (appName == "kaizala") {
        document.documentElement.style.setProperty('--tab-color', '#004f8c');
    }
    if (appName == "gmail") {
        document.documentElement.style.setProperty('--tab-color', '#B23121');
    }
    if (appName == "imail") {
        document.documentElement.style.setProperty('--tab-color', '#47515b');
    }
    if (appName == "discord") {
        document.documentElement.style.setProperty('--tab-color', '#7289da');
    }
}

wa_web.addEventListener('dom-ready', () => {
    wa_web.addEventListener('console-message', (e) => {
        console.log('whatsapp page logged a message:', e.message)
    });
    wa_web.addEventListener('new-window', (e) => {
        shell.openExternal(e.url);
    });
});
ka_web.addEventListener('dom-ready', () => {
    ka_web.addEventListener('new-window', (e) => {
        shell.openExternal(e.url);
    });
    ka_web.addEventListener('console-message', (e) => {
        console.log('kaizala page logged a message:', e.message)
    });
});
gm_web.addEventListener('dom-ready', () => {
    gm_web.addEventListener('console-message', (e) => {
        console.log('gmail page logged a message:', e.message)
    });
    gm_web.addEventListener('new-window', (e) => {
        shell.openExternal(e.url);
    });
});
im_web.addEventListener('dom-ready', () => {
    im_web.addEventListener('console-message', (e) => {
        console.log('imail page logged a message:', e.message)
    });
    im_web.addEventListener('new-window', (e) => {
        console.log('imail new window:' + e.url);
        shell.openExternal(e.url);
    });
});
dc_web.addEventListener('dom-ready', () => {
    dc_web.addEventListener('console-message', (e) => {
        console.log('discord page logged a message:', e.message)
    });
    dc_web.addEventListener('new-window', (e) => {
        shell.openExternal(e.url);
    });
});
document.getElementById('dc').click();
