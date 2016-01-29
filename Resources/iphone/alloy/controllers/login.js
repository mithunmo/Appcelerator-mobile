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
    this.__controllerPath = "login";
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
    $.detail.titleControl = Ti.UI.createLabel({
        text: "Login",
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
    var view = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        top: 20,
        bottom: 200,
        height: 160,
        width: 250
    });
    $.detail.add(view);
    var img = Ti.UI.createImageView({
        height: Ti.UI.SIZE,
        backgroundColor: "#f0ede4",
        image: "/images/mofilm.png",
        width: Ti.UI.SIZE
    });
    view.add(img);
    var username = Titanium.UI.createTextField({
        color: "#336699",
        top: 170,
        width: 280,
        height: 40,
        backgroundColor: "transparent",
        hintText: "Username",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    $.detail.add(username);
    var password = Titanium.UI.createTextField({
        color: "#336699",
        top: 220,
        width: 280,
        backgroundColor: "transparent",
        height: 40,
        hintText: "Password",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    $.detail.add(password);
    username.addEventListener("click", function() {
        $.detail.setTop(-30);
    });
    username.addEventListener("blur", function() {
        $.detail.setTop(0);
    });
    password.addEventListener("click", function() {
        $.detail.setTop(-70);
    });
    password.addEventListener("blur", function() {
        $.detail.setTop(0);
    });
    var detailBtn = Titanium.UI.createButton({
        title: "LOGIN",
        top: 300,
        width: 300,
        color: "#ffffff",
        height: 50,
        borderColor: "#003366",
        borderWidth: 1,
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
            fontFamily: "HelveticaNeue-Regular",
            fontSize: 16
        }
    });
    $.detail.add(detailBtn);
    var shape = Ti.UI.createView({
        top: 200,
        height: "10dp",
        width: "300"
    });
    var shape1 = Ti.UI.createView({
        top: 250,
        height: "10dp",
        width: "300"
    });
    var color = "#336699";
    var bottom = Ti.UI.createView({
        height: "2",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    var left = Ti.UI.createView({
        width: "2",
        height: "10",
        left: 0,
        bottom: 0,
        backgroundColor: color
    });
    var right = Ti.UI.createView({
        width: "2",
        height: "10",
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    var bottom1 = Ti.UI.createView({
        height: "2",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    var left1 = Ti.UI.createView({
        width: "2",
        height: "10",
        left: 0,
        bottom: 0,
        backgroundColor: color
    });
    var right1 = Ti.UI.createView({
        width: "2",
        height: "10",
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    shape.add(bottom);
    shape.add(left);
    shape.add(right);
    shape1.add(bottom1);
    shape1.add(left1);
    shape1.add(right1);
    $.detail.add(shape);
    $.detail.add(shape1);
    var detailReq = Titanium.Network.createHTTPClient();
    detailBtn.addEventListener("click", function() {
        Titanium.Network.networkType === Titanium.Network.NETWORK_NONE && alert("Please check your connectivity");
        if ("" != username.value && "" != password.value) {
            var milliseconds = new Date().getTime();
            detailReq.open("POST", "http://api.mofilm.com/user/authenticate");
            var params = {
                username: username.value,
                password: password.value,
                apiKey: "lNAIqOwwvq3iUoSfUYhggX21IR8TZPZV",
                privateKey: "lVMi@jtsEloF4TnBNr7tFUBNpkn1XwvJl6csEuM8Z39zSg60ymqrToPXYAXrxJ-Q",
                time: milliseconds,
                uri: "/user/authenticate"
            };
            detailReq.send(params);
        } else {
            alert("Username/Password not correct");
        }
    });
    detailReq.onload = function() {
        var xml = this.responseText;
        var xmldoc = Ti.XML.parseString(xml);
        var response = xmldoc.documentElement.getElementsByTagName("response");
        if ("result" == response.item(0).getAttribute("type")) {
            var userid = response.item(0).getElementsByTagName("userID").item(0).textContent;
            Titanium.App.Properties.setString("userid", userid);
            var savePushToken = Titanium.Network.createHTTPClient();
            savePushToken.open("POST", "http://api.mofilm.com/user/pushtoken");
            var params = {
                userID: userid,
                token: Titanium.App.Properties.getString("token"),
                type: Ti.Platform.osname
            };
            savePushToken.send(params);
            if ("" === dataId) {
                dataId = "";
                var detailController = Alloy.createController("index", {
                    parentTab: parentTab,
                    dataId: dataId,
                    login: "login"
                });
                parentTab.open(detailController.getView());
            } else {
                var detailController = Alloy.createController("detail", {
                    parentTab: parentTab,
                    dataId: dataId,
                    login: "login"
                });
                parentTab.open(detailController.getView());
            }
        } else {
            alert("Username/Password not correct");
        }
    };
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