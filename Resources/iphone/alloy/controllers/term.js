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
    this.__controllerPath = "term";
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
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#f0ede4",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.parentTab || "";
    0 === args.dataId || args.dataId > 0 ? args.dataId : "";
    $.detail.titleControl = Ti.UI.createLabel({
        text: "Contest Disclaimer",
        font: {
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "Helvetica"
        },
        color: "white"
    });
    $.detail.navTintColor = "white";
    $.detail.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
    $.detail.barColor = "#014a69";
    var scrollView = Ti.UI.createScrollView({
        top: 10,
        bottom: 20,
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        height: "100%",
        width: "100%"
    });
    var self = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        left: 2,
        bottom: 20,
        width: "auto",
        height: "auto",
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    var desc = "This contest is not in any way sponsored, endorsed, administered by, or associated with Apple Inc. Apple Inc. has no involvement in this contest nor any activity related thereto.";
    var l2 = Titanium.UI.createLabel({
        text: desc,
        color: "#000",
        shadowColor: "#ddd",
        left: 8,
        right: 8,
        font: {
            fontFamily: "Helvetica",
            fontSize: 15
        },
        height: "auto"
    });
    self.add(l2);
    $.detail.add(scrollView);
    scrollView.add(self);
    var ButtonRetour = Ti.UI.createButton({
        backgroundImage: "/images/back1.png",
        height: 24,
        width: 24
    });
    ButtonRetour.addEventListener("click", function() {
        $.detail.close();
    });
    $.detail.leftNavButton = ButtonRetour;
    $.detail.tabBarHidden = true;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;