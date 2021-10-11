const ipc = require("electron").ipcMain;
const MainWindowRender = require('../renders/MainWindowRender');

const Renders = {
    init(){
        MainWindowRender.init(ipc);
    }
};

module.exports = Renders;