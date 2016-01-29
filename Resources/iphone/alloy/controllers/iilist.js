function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doUpdate() {
        if (!_.isEmpty(tableRecords.data)) {
            tableRecords.data = [];
            tableRecords.removeEventListener("click", tableClick);
            tableRecords.removeEventListener("scroll", tableRefresh);
            tableRecords.removeEventListener("scrollend", tableend);
        }
        activityIndicator.show();
        $.labelNoRecords.visible = false;
        rss.loadRssFeed({
            success: function(dataStore) {
                activityIndicator.hide();
                loading = true;
                button.visible = false;
                tableRecords.setTop(0);
                if (dataStore.length) {
                    var recordData = [];
                    var offset = 0;
                    Ti.UI.iPhone.appBadge = 0;
                    for (var i = 0; i < dataStore.length; i++) {
                        var record = dataStore[i];
                        var rowcolor;
                        rowcolor = i % 2 == 0 ? "#f0ede4" : "#f8f6f2";
                        var row = Ti.UI.createTableViewRow({
                            dataId: i,
                            className: "trow",
                            objName: "row",
                            backgroundColor: rowcolor,
                            selectedBackgroundColor: "#FFF",
                            height: Alloy.Globals.Styles.TableViewRow.height,
                            someRandomVar: "Just as an example " + i
                        });
                        var logoview = Ti.UI.createView({
                            backgroundColor: "#FFF",
                            height: 120,
                            width: 100,
                            left: 1
                        });
                        var imgView = Titanium.UI.createImageView({
                            backgroundColor: "#f0ede4",
                            image: record.url,
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            left: 10
                        });
                        logoview.add(imgView);
                        row.add(logoview);
                        var imgNextView = Titanium.UI.createView({
                            left: 100,
                            width: "auto",
                            backgroundSelectedColor: "#cdc6b2"
                        });
                        row.add(imgNextView);
                        var l1 = Titanium.UI.createLabel({
                            text: record.brand,
                            color: "#000",
                            font: {
                                fontFamily: "HelveticaNeue",
                                fontSize: 16
                            },
                            top: 5,
                            left: 10,
                            height: "auto"
                        });
                        imgNextView.add(l1);
                        var event = Titanium.UI.createLabel({
                            text: record.event,
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 10,
                            top: 30,
                            height: "auto"
                        });
                        imgNextView.add(event);
                        var l2 = Titanium.UI.createLabel({
                            text: "Deadline: " + record.deadline,
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 10,
                            top: 52,
                            height: "auto"
                        });
                        imgNextView.add(l2);
                        var pg = Titanium.UI.createLabel({
                            text: "Prize + Grant",
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 10,
                            top: 75,
                            height: "auto"
                        });
                        {
                            Titanium.UI.createImageView({
                                image: "/images/tick.png",
                                width: 16,
                                height: 16,
                                top: 80,
                                left: 200
                            });
                        }
                        var prize = Titanium.UI.createLabel({
                            text: record.prize,
                            color: "#000",
                            font: {
                                fontFamily: "Helvetica-Light",
                                fontSize: 14
                            },
                            right: 5,
                            top: 75,
                            height: "auto"
                        });
                        imgNextView.add(pg);
                        imgNextView.add(prize);
                        recordData.push(row);
                    }
                    tableRecords.setData(recordData);
                } else {
                    $.labelNoRecords.text = L("noRecordsFound", "No Records Found");
                    $.labelNoRecords.visible = true;
                }
                tableRecords.addEventListener("click", tableClick);
                tableRecords.addEventListener("scroll", tableRefresh);
                tableRecords.addEventListener("scrollend", tableend);
                var pulling = false;
                var reloading = false;
                var offset = 0;
                tableRecords.addEventListener("scroll", function(e) {
                    offset = e.contentOffset.y;
                    pulling && !reloading && offset > -80 && 0 > offset ? pulling = false : !pulling && !reloading && -80 > offset && (pulling = true);
                });
                tableRecords.addEventListener("dragEnd", function() {
                    if (pulling && !reloading && -80 > offset) {
                        pulling = false;
                        reloading = true;
                        Ti.API.log("updating when scrolling");
                        doUpdate();
                    }
                });
            },
            error: function() {
                button.visible = true;
                loading = false;
                $.labelNoRecords.text = "Please check your connectivity";
                $.labelNoRecords.visible = true;
                $.labelNoRecords.setTop(10);
                tableRecords.setTop(120);
                activityIndicator.hide();
            }
        });
    }
    function tableend() {
        0 == firstitem && Ti.API.log("updating");
    }
    function tableRefresh(e) {
        var firstVisibleItemIndex = e.firstVisibleItem;
        e.totalItemCount;
        e.visibleItemCount;
        firstitem = e.firstVisibleItem;
        Ti.API.log(firstVisibleItemIndex);
    }
    function tableClick(e) {
        var dataId = e.rowData.dataId;
        e.rowData.someRandomVar;
        Ti.API.log("clicked");
        var detailController = Alloy.createController("detail", {
            parentTab: $.tabList,
            dataId: dataId
        });
        $.tabList.open(detailController.getView());
    }
    function openAddItem() {
        var loginController = Alloy.createController("login", {
            parentTab: $.tabList
        });
        $.tabList.open(loginController.getView());
    }
    function receivePush(e) {
        var title = e.data;
        Ti.UI.iPhone.appBadge = 1;
        Ti.UI.iPhone.appBadge = 0;
        rss.loadRssFeed({
            success: function(dataStore) {
                for (var i = 0; i < dataStore.length; i++) if (title.id == dataStore[i].id) {
                    var detailController = Alloy.createController("detail", {
                        parentTab: $.tabList,
                        dataId: i
                    });
                    $.tabList.open(detailController.getView());
                    break;
                }
            }
        });
    }
    function deviceTokenSuccess(e) {
        console.log("inside success");
        deviceToken = e.deviceToken;
        subscribeToChannel();
    }
    function deviceTokenError(e) {
        alert("Failed to register for push notifications! " + e.error);
    }
    function subscribeToChannel() {
        Titanium.App.Properties.setString("token", deviceToken);
        Cloud.PushNotifications.subscribeToken({
            device_token: deviceToken,
            channel: "test",
            type: "ios"
        }, function(e) {
            e.success || alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "iilist";
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
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "#f0ede4",
        id: "list"
    });
    $.__views.ll = Ti.UI.createView({
        id: "ll"
    });
    $.__views.list.add($.__views.ll);
    $.__views.labelNoRecords = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        visible: false,
        top: 20,
        id: "labelNoRecords"
    });
    $.__views.ll.add($.__views.labelNoRecords);
    $.__views.tabList = Ti.UI.createTab({
        window: $.__views.list,
        id: "tabList"
    });
    $.__views.tabList && $.addTopLevelView($.__views.tabList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rss = require("rss");
    var loading = false;
    $.list.tabBarHidden = true;
    $.list.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
    $.list.barColor = "#014a69";
    $.list.titleControl = Ti.UI.createLabel({
        text: "MOFILM Live Briefs",
        font: {
            fontSize: 18,
            fontWeight: "Bold",
            fontFamily: "Helvetica"
        },
        color: "white"
    });
    var tableRecords = Ti.UI.createTableView({
        separatorColor: "#d4d1ca"
    });
    $.list.add(tableRecords);
    var style;
    style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    var activityIndicator = Ti.UI.createActivityIndicator({
        color: "black",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 26,
            fontWeight: "bold"
        },
        message: "Loading...",
        style: style,
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });
    $.list.add(activityIndicator);
    var button = Titanium.UI.createButton({
        title: "Retry",
        top: 70,
        width: 100,
        height: 50
    });
    button.addEventListener("click", function() {
        doUpdate();
    });
    $.list.add(button);
    button.visible = false;
    doUpdate();
    var firstitem = 0;
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
        title: "Login"
    });
    btnRightNav.addEventListener("click", openAddItem);
    var menuButton = Ti.UI.createButton({
        backgroundImage: "/images/settings.png",
        height: 24,
        width: 24,
        toggle: false
    });
    $.list.setLeftNavButton(menuButton);
    menuButton.addEventListener("click", function() {
        var menuController = Alloy.createController("menu", {
            parentTab: $.tabList
        });
        $.tabList.open(menuController.getView());
    });
    var deviceToken = null;
    if (true && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {
        Ti.App.iOS.addEventListener("usernotificationsettings", function registerForPush() {
            Ti.App.iOS.removeEventListener("usernotificationsettings", registerForPush);
            Ti.Network.registerForPushNotifications({
                success: deviceTokenSuccess,
                error: deviceTokenError,
                callback: receivePush
            });
        });
        Ti.App.iOS.registerUserNotificationSettings({
            types: [ Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT, Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND, Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE ]
        });
    } else Ti.Network.registerForPushNotifications({
        types: [ Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND ],
        success: deviceTokenSuccess,
        error: deviceTokenError,
        callback: receivePush
    });
    var Cloud = require("ti.cloud");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;