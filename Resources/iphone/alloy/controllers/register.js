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
    this.__controllerPath = "register";
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
        text: "REGISTER",
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
        top: 20,
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        layout: "vertical",
        height: "100%",
        bottom: 60,
        width: "100%"
    });
    $.detail.add(scrollView);
    var view = Ti.UI.createView({
        backgroundColor: "#f0ede4",
        height: 120,
        width: 250
    });
    scrollView.add(view);
    var img = Ti.UI.createImageView({
        height: Ti.UI.SIZE,
        backgroundColor: "#f0ede4",
        image: "/images/mofilm.png",
        width: Ti.UI.SIZE
    });
    view.add(img);
    var username = Titanium.UI.createTextField({
        color: "#336699",
        width: 280,
        top: 10,
        height: 40,
        backgroundColor: "transparent",
        hintText: "First Name",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    scrollView.add(username);
    var ul1 = Ti.UI.createView({
        height: "10dp",
        top: -5,
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
    ul1.add(bottom);
    ul1.add(left);
    ul1.add(right);
    scrollView.add(ul1);
    var surname = Titanium.UI.createTextField({
        color: "#336699",
        width: 280,
        top: 10,
        height: 40,
        backgroundColor: "transparent",
        hintText: "Last Name",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    scrollView.add(surname);
    var uls = Ti.UI.createView({
        height: "10dp",
        top: -5,
        width: "300"
    });
    var color = "#336699";
    var bottoms = Ti.UI.createView({
        height: "2",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    var lefts = Ti.UI.createView({
        width: "2",
        height: "10",
        left: 0,
        bottom: 0,
        backgroundColor: color
    });
    var rights = Ti.UI.createView({
        width: "2",
        height: "10",
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    uls.add(bottoms);
    uls.add(lefts);
    uls.add(rights);
    scrollView.add(uls);
    var email = Titanium.UI.createTextField({
        color: "#336699",
        top: 10,
        width: 280,
        height: 40,
        backgroundColor: "transparent",
        hintText: "Email",
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    scrollView.add(email);
    var ul2 = Ti.UI.createView({
        height: "10dp",
        top: -5,
        width: "300"
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
    ul2.add(bottom1);
    ul2.add(left1);
    ul2.add(right1);
    scrollView.add(ul2);
    var password = Titanium.UI.createTextField({
        color: "#336699",
        width: 280,
        backgroundColor: "transparent",
        height: 40,
        top: 10,
        hintText: "Password",
        passwordMask: true,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT
    });
    scrollView.add(password);
    var ul3 = Ti.UI.createView({
        height: "10dp",
        top: -5,
        width: "300"
    });
    var bottom2 = Ti.UI.createView({
        height: "2",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    var left2 = Ti.UI.createView({
        width: "2",
        height: "10",
        left: 0,
        bottom: 0,
        backgroundColor: color
    });
    var right2 = Ti.UI.createView({
        width: "2",
        height: "10",
        right: 0,
        bottom: 0,
        backgroundColor: color
    });
    ul3.add(bottom2);
    ul3.add(left2);
    ul3.add(right2);
    scrollView.add(ul3);
    username.addEventListener("click", function() {
        scrollView.setTop(-30);
    });
    username.addEventListener("blur", function() {
        scrollView.setTop(0);
    });
    password.addEventListener("click", function() {
        scrollView.setTop(-70);
    });
    password.addEventListener("blur", function() {
        scrollView.setTop(0);
    });
    var detailBtn = Titanium.UI.createButton({
        title: "Register",
        top: 40,
        bottom: 40,
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
    scrollView.add(detailBtn);
    var detailReq = Titanium.Network.createHTTPClient();
    detailBtn.addEventListener("click", function() {
        Titanium.Network.networkType == Titanium.Network.NETWORK_NONE && alert("Please check your connectivity");
        if ("" != username.value && "" != password.value && "" != surname.value && "" != email.value) {
            var milliseconds = new Date().getTime();
            detailReq.open("POST", "http://api.mofilm.com/user/save");
            var params = {
                username: username.value,
                surname: surname.value,
                email: email.value,
                password: password.value,
                apiKey: "lNAIqOwwvq3iUoSfUYhggX21IR8TZPZV",
                privateKey: "lVMi@jtsEloF4TnBNr7tFUBNpkn1XwvJl6csEuM8Z39zSg60ymqrToPXYAXrxJ-Q",
                time: milliseconds,
                uri: "/user/save"
            };
            detailReq.send(params);
        } else alert("All fields are required");
    });
    detailReq.onload = function() {
        var xml = this.responseText;
        Ti.API.log(xml);
        var xmldoc = Ti.XML.parseString(xml);
        var response = xmldoc.documentElement.getElementsByTagName("response");
        if ("result" == response.item(0).getAttribute("type")) {
            var userid = response.item(0).getElementsByTagName("userID").item(0).textContent;
            Titanium.App.Properties.setString("userid", userid);
            var detailController = Alloy.createController("index", {
                parentTab: parentTab,
                dataId: dataId
            });
            parentTab.open(detailController.getView());
        } else alert(response.item(0).getElementsByTagName("message").item(0).textContent);
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