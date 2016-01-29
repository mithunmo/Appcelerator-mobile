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
    this.__controllerPath = "detail";
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
    var login = args.login || "";
    var AppData = require("rss");
    var dataItem = AppData.getItem(dataId);
    $.detail.navTintColor = "white";
    if ("login" != login) {
        var ButtonRetour = Ti.UI.createButton({
            backgroundImage: "/images/back1.png",
            height: 24,
            width: 24
        });
        ButtonRetour.addEventListener("click", function() {
            $.detail.close();
        });
        $.detail.leftNavButton = ButtonRetour;
    } else {
        var btnRightNav = Ti.UI.createButton({
            backgroundColor: "#000000",
            borderColor: "#1c1d1c",
            borderRadius: 6,
            color: "#ffffff",
            borderWidth: "2",
            height: 25,
            font: {
                size: 9,
                fontWeight: "bold"
            },
            width: 50,
            backgroundImage: "none",
            title: "List"
        });
        $.detail.setLeftNavButton(btnRightNav);
        btnRightNav.addEventListener("click", function() {
            var menuController = Alloy.createController("index", {
                parentTab: parentTab
            });
            parentTab.open(menuController.getView());
        });
    }
    $.detail.tabBarHidden = true;
    $.detail.titleControl = Ti.UI.createLabel({
        text: dataItem.brand,
        font: {
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "Helvetica"
        },
        color: "white"
    });
    $.detail.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
    $.detail.barColor = "#014a69";
    var scrollView = Ti.UI.createScrollView({
        top: 50,
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        height: "100%",
        left: 1,
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
        top: 0,
        width: "auto",
        height: "auto",
        left: 1,
        layout: "vertical",
        backgroundColor: "#f0ede4"
    });
    $.detail.add(self1);
    $.detail.add(scrollView);
    scrollView.add(self);
    var widthDps;
    var heightDps;
    var imageHeight;
    var spacer;
    var width;
    var height;
    var totalwidth;
    widthDps = Math.ceil(.98 * Titanium.Platform.displayCaps.platformWidth);
    widthDps = .8 * widthDps;
    heightDps = Math.ceil(.98 * Titanium.Platform.displayCaps.platformHeight);
    imageHeight = Math.ceil(.3 * heightDps);
    spacer = Math.floor(Ti.Platform.displayCaps.platformWidth / 3);
    spacerlast = Ti.Platform.displayCaps.platformWidth - 3 * spacer;
    spacerlast = spacer + spacerlast;
    width = spacer;
    height = 60;
    totalwidth = Titanium.Platform.displayCaps.platformWidth;
    totalwidths = Math.ceil(.98 * Titanium.Platform.displayCaps.platformWidth);
    if ("" !== dataId) {
        var tabBar = Ti.UI.createView({
            width: totalwidth,
            height: 50,
            top: 0,
            left: 0,
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
        tab1.add(rright);
        tab1.add(right);
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
        tab2.add(rright1);
        tab2.add(right1);
        tabBar.add(tab2);
        var tab3 = Ti.UI.createView({
            width: spacerlast,
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
        tab1.addEventListener("click", function() {
            this.remove(bottom1);
            currTab.children[0].color = "#cccccc";
            currTab = this;
            this.children[0].color = "#fab101";
            this.add(bottom1);
            self.removeAllChildren();
            var logoview = Ti.UI.createView({
                backgroundColor: "#FFF",
                height: imageHeight,
                width: totalwidths,
                left: 1
            });
            self.add(logoview);
            var imgView = Titanium.UI.createImageView({
                image: dataItem.logourl,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE
            });
            logoview.add(imgView);
            var l1 = Titanium.UI.createLabel({
                text: dataItem.event,
                color: "#000",
                top: 10,
                font: {
                    fontFamily: "Helvetica",
                    fontSize: 24
                },
                left: 15,
                right: 15,
                height: "auto"
            });
            self.add(l1);
            var desc = dataItem.desc;
            var l2 = Titanium.UI.createLabel({
                text: desc,
                color: "#000",
                font: {
                    fontFamily: "Helvetica",
                    fontSize: 16
                },
                left: 15,
                right: 15,
                height: "auto"
            });
            self.add(l2);
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
            self.add(deadlinetext);
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
            self.add(line);
            self.add(wline);
            var deadline = Titanium.UI.createLabel({
                text: dataItem.deadline,
                color: "#000",
                top: 10,
                font: {
                    fontFamily: "HelveticaNeue",
                    fontSize: 26
                },
                height: "auto"
            });
            self.add(deadline);
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
            self.add(btext);
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
            self.add(bline);
            self.add(wwline);
            var briefView = Titanium.UI.createImageView({
                image: "images/brief.png",
                width: 64,
                left: 5,
                height: 64
            });
            self.add(briefView);
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
            self.add(textBrief);
            var briefdownloadView = Titanium.UI.createImageView({
                image: "images/briefdownload.png",
                width: 64,
                top: -44,
                right: 1,
                bottom: 40,
                height: 64
            });
            self.add(briefdownloadView);
            briefdownloadView.addEventListener("click", function() {
                if (null != Ti.App.Properties.getString("userid")) {
                    self.removeAllChildren();
                    var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
                    var webview = Titanium.UI.createWebView({
                        url: url,
                        canGoBack: true
                    });
                    self.add(webview);
                } else {
                    var loginController;
                    var loginController = Alloy.createController("login", {
                        parentTab: parentTab,
                        dataId: dataId
                    });
                    parentTab.open(loginController.getView());
                }
            });
        });
        tab2.addEventListener("click", function() {
            scrollView.scrollTo(0, 0);
            this.remove(bottom1);
            currTab.children[0].color = "#cccccc";
            currTab = this;
            this.children[0].color = "#fab101";
            this.add(bottom1);
            self.removeAllChildren();
            var prizeview = Titanium.UI.createView({
                width: 300,
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
            self.add(prizeview);
            var prizes = dataItem.pstruct.split(",");
            var l1 = Titanium.UI.createLabel({
                top: 5,
                text: "Grand Prize",
                color: "white",
                font: {
                    fontFamily: "HelveticaNeue-Medium",
                    fontSize: 16
                }
            });
            var l2 = Titanium.UI.createLabel({
                text: "$" + prizes[0],
                color: "white",
                font: {
                    fontFamily: "HelveticaNeue-Light",
                    fontSize: 20
                }
            });
            var l3 = Titanium.UI.createLabel({
                text: "Round Trip travel for two people",
                color: "white",
                font: {
                    fontFamily: "HelveticaNeue-Light",
                    fontSize: 16
                }
            });
            prizeview.add(l1);
            prizeview.add(l2);
            prizeview.add(l3);
            var tlen = 40 * (prizes.length - 1);
            var tableRecords = Ti.UI.createTableView({
                backgroundColor: "#262626",
                separatorColor: "#666666",
                height: tlen,
                width: 300,
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
            self.add(tableRecords);
        });
        tab3.addEventListener("click", function() {
            self.removeAllChildren();
            scrollView.scrollTo(0, 0);
            this.remove(bottom1);
            currTab.children[0].color = "#cccccc";
            currTab = this;
            this.children[0].color = "#fab101";
            this.add(bottom1);
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
            self.add(btext);
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
            self.add(bline);
            self.add(wwline);
            var briefView = Titanium.UI.createImageView({
                image: "images/brief.png",
                width: 64,
                left: 5,
                height: 64
            });
            self.add(briefView);
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
            self.add(textBrief);
            var briefdownloadView = Titanium.UI.createImageView({
                image: "images/briefdownload.png",
                width: 64,
                top: -44,
                right: 1,
                bottom: 40,
                height: 64
            });
            self.add(briefdownloadView);
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
                controller.getView();
                var termevent = dataItem.event;
                termevent = termevent.replace(/ /g, "-");
                var termbrand = dataItem.brand;
                termbrand = termbrand.replace(/ /g, "-");
                controller.setArticle("https://mofilm.com/competitions/terms/" + termevent + "/" + termbrand);
                parentTab.open(controller.getView());
            });
            self.add(ButtonRetour);
            Titanium.UI.createButton({
                title: "Download Brief",
                top: 10,
                width: 300,
                color: "#ffffff",
                height: 60,
                borderRadius: 1,
                style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
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
                        color: "#2b9dd3",
                        offset: 0
                    }, {
                        color: "#15699c",
                        offset: 1
                    } ]
                },
                font: {
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    fontSize: 14
                }
            });
            briefdownloadView.addEventListener("click", function() {
                if (null != Ti.App.Properties.getString("userid")) {
                    self.removeAllChildren();
                    var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
                    var webview = Titanium.UI.createWebView({
                        url: url,
                        canGoBack: true
                    });
                    self.add(webview);
                } else {
                    var loginController;
                    var loginController = Alloy.createController("login", {
                        parentTab: parentTab,
                        dataId: dataId
                    });
                    parentTab.open(loginController.getView());
                }
            });
        });
        var logoview = Ti.UI.createView({
            backgroundColor: "#FFF",
            top: 2,
            height: imageHeight,
            width: totalwidths,
            left: 1
        });
        self.add(logoview);
        var imgView = Titanium.UI.createImageView({
            image: dataItem.logourl,
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE
        });
        logoview.add(imgView);
        var l1 = Titanium.UI.createLabel({
            text: dataItem.event,
            color: "#000",
            top: 10,
            font: {
                fontFamily: "HelveticaNeue-CondensedBold",
                fontSize: 24
            },
            left: 15,
            right: 15,
            height: "auto"
        });
        self.add(l1);
        var desc = dataItem.desc;
        var l2 = Titanium.UI.createLabel({
            text: desc,
            color: "#000",
            font: {
                fontFamily: "Helvetica",
                fontSize: 16
            },
            left: 15,
            right: 15,
            bottom: 10,
            height: "auto"
        });
        self.add(l2);
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
        self.add(deadlinetext);
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
        self.add(line);
        self.add(wline);
        var deadlineDate = dataItem.deadline.toUpperCase();
        var deadline = Titanium.UI.createLabel({
            text: deadlineDate,
            color: "#000",
            top: 10,
            font: {
                fontFamily: "HelveticaNeue-Light",
                fontSize: 26
            },
            height: "auto"
        });
        self.add(deadline);
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
        self.add(btext);
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
        self.add(bline);
        self.add(wwline);
        var briefView = Titanium.UI.createImageView({
            image: "images/brief.png",
            left: 5,
            bottom: 4,
            width: 64,
            height: 64
        });
        self.add(briefView);
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
        self.add(textBrief);
        var briefdownloadView = Titanium.UI.createImageView({
            image: "images/briefdownload.png",
            width: 64,
            top: -44,
            right: 1,
            bottom: 50,
            height: 64
        });
        self.add(briefdownloadView);
        briefdownloadView.addEventListener("click", function() {
            if (null != Ti.App.Properties.getString("userid")) {
                self.removeAllChildren();
                var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
                var webview = Titanium.UI.createWebView({
                    url: url,
                    canGoBack: true
                });
                self.add(webview);
            } else {
                var loginController;
                var loginController = Alloy.createController("login", {
                    parentTab: parentTab,
                    dataId: dataId
                });
                parentTab.open(loginController.getView());
            }
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;