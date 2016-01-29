function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function actionLogout() {
        var AppData = require("data");
        AppData.logout(function(response) {
            if ("ok" === response.result) {
                var loginController = Alloy.createController("login");
                loginController.getView().open();
                Alloy.Globals.tabGroup.close();
                Alloy.Globals.tabGroup = null;
            } else alert(L("error", "Error") + ":\n" + response.msg);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundColor: "#f0ede4",
        id: "home"
    });
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        id: "__alloyId0"
    });
    $.__views.home.add($.__views.__alloyId0);
    $.__views.labelHome = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "labelHome"
    });
    $.__views.__alloyId0.add($.__views.labelHome);
    $.__views.tabHome = Ti.UI.createTab(function() {
        var o = {};
        Alloy.isHandheld && _.extend(o, {
            icon: "images/53-house.png"
        });
        _.extend(o, {
            window: $.__views.home,
            id: "tabHome"
        });
        return o;
    }());
    $.__views.tabHome && $.addTopLevelView($.__views.tabHome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tabHome.title = L("home", "Home");
    $.home.title = L("home", "Home");
    $.labelHome.text = L("labelHome", "Home Label");
    var btnRightNav = Ti.UI.createButton({
        title: L("logout", "Logout")
    });
    btnRightNav.addEventListener("click", actionLogout);
    $.home.rightNavButton = btnRightNav;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;