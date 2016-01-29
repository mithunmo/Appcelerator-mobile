function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
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
    $.__views.menu = Ti.UI.createWindow({
        backgroundColor: "#f0ede4",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    var __alloyId2 = [];
    $.__views.register = Ti.UI.createTableViewRow({
        id: "register",
        title: "Register"
    });
    __alloyId2.push($.__views.register);
    $.__views.login = Ti.UI.createTableViewRow({
        id: "login",
        title: "Login"
    });
    __alloyId2.push($.__views.login);
    $.__views.about = Ti.UI.createTableViewRow({
        id: "about",
        title: "About MOFILM"
    });
    __alloyId2.push($.__views.about);
    $.__views.term = Ti.UI.createTableViewRow({
        id: "term",
        title: "Contest Disclaimer"
    });
    __alloyId2.push($.__views.term);
    $.__views.table = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        top: 10,
        backgroundColor: "#f0ede4",
        data: __alloyId2,
        id: "table"
    });
    $.__views.menu.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var parentTab = args.parentTab || "";
    0 === args.dataId || args.dataId > 0 ? args.dataId : "";
    null != Titanium.App.Properties.getString("userid") && $.table.deleteRow(0);
    $.menu.barColor = "#15699c";
    $.menu.titleControl = Ti.UI.createLabel({
        text: "Settings",
        font: {
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "Helvetica"
        },
        color: "white"
    });
    $.menu.navTintColor = "white";
    $.menu.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
    $.menu.barColor = "#014a69";
    if (null != Ti.App.Properties.getString("userid")) {
        $.login.setTitle("Logout");
        $.login.id = "logout";
    } else {
        $.login.setTitle("Login");
        $.login.id = "login";
    }
    $.table.addEventListener("click", function(e) {
        if ("logout" == e.rowData.id) {
            Titanium.App.Properties.setString("userid", null);
            Alloy.Globals.add = "add";
            var detailController = Alloy.createController("index", {
                parentTab: parentTab,
                add: "add"
            });
            parentTab.open(detailController.getView());
        } else {
            var detailController = Alloy.createController(e.rowData.id, {
                parentTab: parentTab
            });
            parentTab.open(detailController.getView());
        }
    });
    var ButtonRetour = Ti.UI.createButton({
        backgroundImage: "/images/back1.png",
        height: 24,
        width: 24
    });
    ButtonRetour.addEventListener("click", function() {
        $.menu.close();
    });
    $.menu.leftNavButton = ButtonRetour;
    $.menu.tabBarHidden = true;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;