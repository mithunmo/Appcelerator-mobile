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
    this.__controllerPath = "about";
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
        text: "About MOFILM",
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
    var desc = "MOFILM inspires film-makers to create videos for big brands and social causes. Our revolutionary new process is transforming the video creation industry by connecting brands more directly with film-makers and eliminating multiple layers of beauracracy and administration which waters down creativity and inflates costs in traditional processes. \n \n Mofilm events have becoming legendary among the film-making community as the place to meet brands, fellow film-makers and film's most important visionaries like Kevin Spacey, Jesse Eisenberg, Robert Redford, Isabella Rossellini, Terry Gilliam and Spike Lee. Jon Landau, producer of the two top-grossing movies of all time, Titanic and Avatar, has joined MOFILM's advisory board. \n \n MOFILM runs multiple major video competitions every year, offering millions of dollars in prizes to filmmakers plus the chance to travel to unforgettable destinations around the world, including London Film Festival, Rio, Lollapalooza, Taj Mahal, GSM Barcelona, Tribeca Film Festival, Consumer Electronics Show Las Vegas, Cannes Lions and many others. \n \n MOFILM is dedicated to helping filmmakers get discovered, get famous and get well paid for their talent while providing brands with innovative advertising and video content. The MOFILM community is proudly displayed on our profile pages to maximise visibility and even help out our competitors who are always trying to recruit MOFILMers! \n \n MOFILM winners become members of our Pro community who receive paid work from brands outside the contests. MOFILM music is now set to revolutionize music by providing famous tracks to brands with-out the inflated fees tacked on by middlemen. MOFILM music will also discover new musical talent for brands interested in a fresh sound at a reasonable fee. \n \n It is our company mission to help a previously unknown film-maker to one day win an Oscar or a grammy.\n \n MOFILM is a privately held company with offices in London, Bangalore and Los Angeles.";
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