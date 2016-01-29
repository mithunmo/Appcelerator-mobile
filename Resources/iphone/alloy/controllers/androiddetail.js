function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadData() {
        l1.setText(dataItem.event);
        firstview.add(l1);
        var desc = dataItem.desc;
        l2.setText(desc);
        firstview.add(l2);
        firstview.add(deadlinetext);
        firstview.add(line);
        firstview.add(wline);
        var deadlineDate = dataItem.deadline.toUpperCase();
        deadline.setText(deadlineDate);
        firstview.add(deadline);
        firstview.add(btext);
        firstview.add(bline);
        firstview.add(wwline);
        firstview.add(briefView);
        firstview.add(textBrief);
        firstview.add(briefdownloadView);
        activityIndicator.hide();
        firstview.remove(activityIndicator);
        self.add(firstview);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "androiddetail";
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
    var parentTab = args.parentTab || "";
    var dataId = 0 === args.dataId || args.dataId > 0 ? args.dataId : "";
    args.name || "";
    args.login || "";
    var rss = require("rss");
    var dataItem = rss.getItem(dataId);
    $.detail.title = dataItem.brand;
    var scrollView = Ti.UI.createScrollView({
        top: 50,
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        height: "100%",
        width: "100%"
    });
    var self1 = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        top: 0,
        width: "auto",
        height: "auto",
        layout: "vertical"
    });
    var self = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        width: "auto",
        height: "auto",
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    var widthDps;
    var heightDps;
    var imageHeight;
    var spacer;
    var width;
    var height;
    var totalwidth;
    widthDps = Math.ceil(.98 * Titanium.Platform.displayCaps.platformWidth);
    heightDps = Math.ceil(.98 * Titanium.Platform.displayCaps.platformHeight);
    imageHeight = Math.ceil(.3 * heightDps);
    spacer = Math.round(Ti.Platform.displayCaps.platformWidth / 3);
    width = spacer;
    height = 50;
    totalwidth = Math.ceil(.98 * Titanium.Platform.displayCaps.platformWidth);
    var tabBar = Ti.UI.createView({
        width: totalwidth,
        height: 50,
        left: 0,
        bottom: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            backFillStart: false,
            colors: [ {
                color: "#333333",
                offset: 0
            }, {
                color: "#1b1b1b",
                offset: 1
            } ]
        }
    });
    self1.add(tabBar);
    var tab1 = Ti.UI.createView({
        width: width,
        height: height,
        left: 0,
        bottom: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            backFillStart: false,
            colors: [ {
                color: "#333333",
                offset: 0
            }, {
                color: "#1b1b1b",
                offset: 1
            } ]
        },
        borderRadius: 2
    });
    var tab1Label = Ti.UI.createLabel({
        text: "Home",
        color: "#fab101",
        font: {
            fontFamily: "HelveticaNeue-Medium",
            fontSize: 16
        }
    });
    tab1.add(tab1Label);
    var right = Ti.UI.createView({
        width: "1",
        height: "60",
        right: 0,
        backgroundColor: "#333333"
    });
    var rright = Ti.UI.createView({
        width: "1",
        height: "60",
        right: 1,
        backgroundColor: "#000"
    });
    tab1.add(right);
    tab1.add(rright);
    var bottom1 = Ti.UI.createView({
        height: "4",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#fab101"
    });
    tab1.add(bottom1);
    tabBar.add(tab1);
    var tab2 = Ti.UI.createView({
        width: width,
        height: height,
        left: spacer,
        bottom: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            backFillStart: false,
            colors: [ {
                color: "#333333",
                offset: 0
            }, {
                color: "#1b1b1b",
                offset: 1
            } ]
        }
    });
    var tab2Label = Ti.UI.createLabel({
        text: "Prize",
        color: "#cccccc",
        font: {
            fontFamily: "HelveticaNeue-Medium",
            fontSize: 16
        }
    });
    tab2.add(tab2Label);
    var right1 = Ti.UI.createView({
        width: "1",
        height: "60",
        right: 0,
        backgroundColor: "#333333"
    });
    var rright1 = Ti.UI.createView({
        width: "1",
        height: "60",
        right: 1,
        backgroundColor: "#000"
    });
    tab2.add(right1);
    tab2.add(rright1);
    tabBar.add(tab2);
    var tab3 = Ti.UI.createView({
        width: width,
        height: height,
        left: 2 * spacer,
        bottom: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            backFillStart: false,
            colors: [ {
                color: "#333333",
                offset: 0
            }, {
                color: "#1b1b1b",
                offset: 1
            } ]
        }
    });
    var tab3Label = Ti.UI.createLabel({
        text: "Brief",
        color: "#cccccc",
        font: {
            fontFamily: "HelveticaNeue-Medium",
            fontSize: 16
        }
    });
    tab3.add(tab3Label);
    tabBar.add(tab3);
    var currTab = tab1;
    scrollView.add(self);
    $.detail.add(self1);
    $.detail.add(scrollView);
    var firstview = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        width: "auto",
        height: "auto",
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    var briefdownloadView = Titanium.UI.createImageView({
        image: "/images/briefdownload.png",
        width: 64,
        top: -44,
        right: 1,
        bottom: 50,
        height: 64
    });
    var logoview = Ti.UI.createView({
        backgroundColor: "#FFF",
        height: imageHeight,
        width: totalwidth,
        left: 1,
        right: 1
    });
    var imgView = Titanium.UI.createImageView({
        backgroundColor: "#f0ede4",
        width: widthDps,
        height: imageHeight
    });
    var l1 = Titanium.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "Helvetica",
            fontSize: 24
        },
        top: 10,
        left: 15,
        right: 15,
        height: "auto"
    });
    var l2 = Titanium.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "Helvetica",
            fontSize: 16
        },
        left: 15,
        right: 15,
        bottom: 20,
        height: "auto"
    });
    var deadlinetext = Titanium.UI.createLabel({
        text: "Submission Deadline",
        color: "#000",
        font: {
            fontFamily: "HelveticaNeue-CondensedBold",
            fontSize: 24
        },
        left: 15,
        right: 15,
        height: "auto"
    });
    var line = Ti.UI.createView({
        height: "1",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#808080"
    });
    var wline = Ti.UI.createView({
        height: "1",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white"
    });
    var deadline = Titanium.UI.createLabel({
        color: "#000",
        top: 10,
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: 26
        },
        height: "auto"
    });
    var btext = Titanium.UI.createLabel({
        text: "Brief",
        color: "#000",
        font: {
            fontFamily: "HelveticaNeue-CondensedBold",
            fontSize: 24
        },
        top: 10,
        left: 15,
        right: 15,
        height: "auto"
    });
    var bline = Ti.UI.createView({
        height: "1",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#808080"
    });
    var wwline = Ti.UI.createView({
        height: "1",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white"
    });
    var briefView = Titanium.UI.createImageView({
        image: "/images/brief.png",
        width: 64,
        left: 5,
        height: 64
    });
    var textBrief = Titanium.UI.createLabel({
        text: "Download Brief",
        color: "#000",
        top: -42,
        left: 80,
        font: {
            fontFamily: "HelveticaNeue",
            fontSize: 18
        },
        height: "auto"
    });
    tab1.addEventListener("click", function() {
        this.remove(bottom1);
        currTab.children[0].color = "#cccccc";
        currTab = this;
        this.children[0].color = "#fab101";
        this.add(bottom1);
        self.removeAllChildren();
        self.add(firstview);
    });
    var middleview = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        width: "auto",
        height: "auto",
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    var prizeview = Titanium.UI.createView({
        left: 5,
        right: 5,
        height: 80,
        top: 10,
        layout: "vertical",
        borderRadius: 10,
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        backgroundColor: "#669933",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        }
    });
    var prizes = dataItem.pstruct.split(",");
    var mv1 = Titanium.UI.createLabel({
        text: "Grand Prize",
        color: "white",
        top: 3,
        font: {
            fontFamily: "HelveticaNeue-Bold",
            fontSize: 16
        }
    });
    var mv2 = Titanium.UI.createLabel({
        text: "$" + prizes[0],
        color: "white",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: 20
        }
    });
    var mv3 = Titanium.UI.createLabel({
        text: "Round Trip travel for two people",
        color: "white",
        font: {
            fontFamily: "HelveticaNeue-Light",
            fontSize: 16
        }
    });
    prizeview.add(mv1);
    prizeview.add(mv2);
    prizeview.add(mv3);
    middleview.add(prizeview);
    var tlen = 40 * (prizes.length - 1);
    var tableRecords = Ti.UI.createTableView({
        backgroundColor: "#262626",
        separatorColor: "#666666",
        height: tlen,
        left: 5,
        right: 5,
        top: 10
    });
    var recordData = [];
    for (i = 1; i < prizes.length; i++) {
        ppos = i + 1;
        var ppostext = "";
        2 == ppos ? ppostext = "2nd" : 3 == ppos ? ppostext = "3rd" : ppos >= 4 && (ppostext = ppos + "th");
        var row = Ti.UI.createTableViewRow({
            height: 40
        });
        var l4 = Titanium.UI.createLabel({
            text: ppostext + " Prize",
            color: "white",
            left: 5,
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: 16
            }
        });
        var l14 = Titanium.UI.createLabel({
            text: "$" + prizes[i],
            color: "#fab101",
            right: 5,
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: 20
            }
        });
        row.add(l4);
        row.add(l14);
        recordData.push(row);
    }
    tableRecords.setData(recordData);
    middleview.add(tableRecords);
    tab2.addEventListener("click", function() {
        currTab.children[0].color = "#cccccc";
        currTab = this;
        this.children[0].color = "#fab101";
        this.add(bottom1);
        self.removeAllChildren();
        self.add(middleview);
    });
    var lastview = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        width: "auto",
        height: "auto",
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    lastview.add(btext);
    lastview.add(bline);
    lastview.add(wwline);
    lastview.add(briefView);
    lastview.add(textBrief);
    lastview.add(briefdownloadView);
    var ButtonRetour = Ti.UI.createButton({
        title: "Terms and Conditions",
        backgroundColor: "white",
        borderRadius: 20,
        color: "#808080",
        borderWidth: 1,
        borderColor: "grey",
        height: 50,
        width: 200
    });
    ButtonRetour.addEventListener("click", function() {
        var controller = Alloy.createController("term");
        var win = controller.getView();
        var termevent = dataItem.event;
        termevent = termevent.replace(/ /g, "-");
        var termbrand = dataItem.brand;
        termbrand = termbrand.replace(/ /g, "-");
        controller.setArticle("https://mofilm.com/competitions/terms/" + termevent + "/" + termbrand);
        win.open();
    });
    lastview.add(ButtonRetour);
    tab3.addEventListener("click", function() {
        self.removeAllChildren();
        this.remove(bottom1);
        currTab.children[0].color = "#cccccc";
        currTab = this;
        this.children[0].color = "#fab101";
        this.add(bottom1);
        self.add(lastview);
    });
    if ("" !== dataId) {
        var activityIndicator = Ti.UI.createActivityIndicator({
            color: "black",
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 20,
                fontWeight: "bold"
            },
            style: Ti.UI.ActivityIndicatorStyle.DARK,
            top: 50,
            height: 20,
            width: Ti.UI.SIZE
        });
        firstview.add(activityIndicator);
        firstview.add(logoview);
        imgView.setImage(dataItem.logourl);
        logoview.add(imgView);
        activityIndicator.show();
        setTimeout(loadData, 10);
    }
    briefdownloadView.addEventListener("click", function() {
        if (null != Ti.App.Properties.getString("userid")) {
            self.removeAllChildren();
            var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
            Titanium.Platform.openURL(url + "/" + dataItem.brand + ".pdf");
        } else {
            var loginController;
            var loginController = Alloy.createController("login", {
                parentTab: parentTab,
                dataId: dataId
            });
            parentTab.open(loginController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;