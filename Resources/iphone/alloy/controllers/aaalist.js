function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function tableClick(e) {
        var dataId = e.rowData.dataId;
        var name = e.rowData.name;
        e.rowData.someRandomVar;
        var detailController = Alloy.createController("androiddetail", {
            parentTab: $.list,
            dataId: dataId,
            name: name
        }).getView();
        detailController.open();
    }
    function doUpdate() {
        if (false != loading) return;
        loading = true;
        tableRecords.setTop(80);
        activityIndicator.show();
        if (!_.isEmpty(tableRecords.data)) {
            tableRecords.data = [];
            tableRecords.removeEventListener("click", tableClick);
        }
        rss.loadRssFeed({
            success: function(dataStore) {
                button.visible = false;
                if (dataStore.length) {
                    tableRecords.setTop(0);
                    Ti.API.log("After processing");
                    activityIndicator.hide();
                    $.labelNoRecords.hide();
                    var recordData = [];
                    reloading = false;
                    for (var i = 0; i < dataStore.length; i++) {
                        var record = dataStore[i];
                        {
                            110 * dataStore.length * Titanium.Platform.displayCaps.logicalDensityFactor;
                        }
                        var rowcolor;
                        rowcolor = i % 2 == 0 ? "#f0ede4" : "#f8f6f2";
                        var row = Ti.UI.createTableViewRow({
                            dataId: i,
                            name: record.brand,
                            className: "trow",
                            objName: "row",
                            backgroundColor: rowcolor,
                            backgroundSelectedColor: "#FFF",
                            height: Alloy.Globals.Styles.TableViewRow.height,
                            someRandomVar: "Just as an example " + i
                        });
                        {
                            Ti.UI.createView({
                                backgroundColor: "#FFF",
                                height: 120,
                                width: 100,
                                left: 1
                            });
                        }
                        console.log(record.url);
                        var imgView = Titanium.UI.createImageView({
                            backgroundColor: "#f0ede4",
                            image: record.url,
                            width: 100,
                            height: 120,
                            left: 2
                        });
                        row.add(imgView);
                        var l1 = Titanium.UI.createLabel({
                            text: record.brand,
                            color: "#000",
                            font: {
                                fontFamily: "HelveticaNeue",
                                fontSize: 18
                            },
                            top: 5,
                            left: 110,
                            height: "auto"
                        });
                        row.add(l1);
                        var event = Titanium.UI.createLabel({
                            text: record.event,
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 110,
                            top: 30,
                            height: "auto"
                        });
                        row.add(event);
                        var l2 = Titanium.UI.createLabel({
                            text: "Deadline: " + record.deadline,
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 110,
                            top: 52,
                            height: "auto"
                        });
                        row.add(l2);
                        var pg = Titanium.UI.createLabel({
                            text: "Prize + Grant",
                            color: "#000",
                            font: {
                                fontFamily: "AvenirNextCondensed-Regular",
                                fontSize: 15
                            },
                            left: 110,
                            top: 75,
                            height: "auto"
                        });
                        row.add(pg);
                        {
                            Titanium.UI.createImageView({
                                image: "/images/tick.png",
                                width: 16,
                                height: 16,
                                top: 80,
                                left: 225
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
                        row.add(prize);
                        recordData.push(row);
                    }
                    tableRecords.setData(recordData);
                } else {
                    $.labelNoRecords.text = L("noRecordsFound", "No Records Found");
                    $.labelNoRecords.visible = true;
                }
                tableRecords.addEventListener("click", tableClick);
                loading = false;
            },
            error: function() {
                button.visible = true;
                loading = false;
                $.labelNoRecords.text = "Please check your connectivity";
                $.labelNoRecords.visible = true;
                $.labelNoRecords.setTop(10);
                tableRecords.setTop(120);
                activityIndicator.hide();
                reloading = false;
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "aaalist";
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
    var style;
    style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    var activityIndicator = Ti.UI.createActivityIndicator({
        color: "black",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 20,
            fontWeight: "bold"
        },
        style: style,
        top: 50,
        height: 20,
        width: Ti.UI.SIZE
    });
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
    Ti.UI.createNotification({
        message: "Please check Internet Connectivity",
        duration: Ti.UI.NOTIFICATION_DURATION_SHORT
    });
    $.list.add(activityIndicator);
    var tableRecords = Ti.UI.createTableView({
        backgroundColor: "#f0ede4",
        separatorColor: "#ccc",
        top: 30
    });
    $.list.add(tableRecords);
    doUpdate();
    require("ti.cloud");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;