//
// Check for expected controller args
//
var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';

//$.detail.title = "Login";
$.detail.titleControl = Ti.UI.createLabel({
	text : "REGISTER",
	font : {
		fontSize : 18,
		fontWeight : "Bold",
		fontFamily : 'Helvetica'
	},
	color : 'white'
});

$.detail.navTintColor = "white";

//$.detail.barColor = "#15699c";

if (OS_IOS) {
	//$.detail.barImage = "/images/NavBG_44.jpg";
	//$.detail.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.barColor = "#014a69";

}

var scrollView = Ti.UI.createScrollView({
	top : 20,
	contentWidth : 'auto',
	contentHeight : 'auto',
	showVerticalScrollIndicator : true,
	layout : 'vertical',
	height : '100%',
	bottom : 60,
	width : '100%'
});

$.detail.add(scrollView);

var view = Ti.UI.createView({
	backgroundColor : '#f0ede4',
	height : 120,
	width : 250
});

scrollView.add(view);

//$.detail.add(view);
var img = Ti.UI.createImageView({
	height : Ti.UI.SIZE,
	backgroundColor : "#f0ede4",
	image : '/images/mofilm.png',
	width : Ti.UI.SIZE
});
view.add(img);

var username = Titanium.UI.createTextField({
	color : '#336699',
	width : 280,
	top : 10,
	height : 40,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	hintText : 'First Name',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
scrollView.add(username);

var ul1 = Ti.UI.createView({
	height : '10dp',
	top : -5,
	width : '300',
});

var color = "#336699";

var bottom = Ti.UI.createView({
	height : '2',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : color
});

var left = Ti.UI.createView({
	width : '2',
	height : '10',
	left : 0,
	bottom : 0,
	backgroundColor : color
});

var right = Ti.UI.createView({
	width : '2',
	height : '10',
	right : 0,
	bottom : 0,
	backgroundColor : color
});

ul1.add(bottom);
ul1.add(left);
ul1.add(right);

scrollView.add(ul1);

var surname = Titanium.UI.createTextField({
	color : '#336699',
	width : 280,
	top : 10,
	height : 40,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	hintText : 'Last Name',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
scrollView.add(surname);

var uls = Ti.UI.createView({
	height : '10dp',
	top : -5,
	width : '300',
});

var color = "#336699";

var bottoms = Ti.UI.createView({
	height : '2',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : color
});

var lefts = Ti.UI.createView({
	width : '2',
	height : '10',
	left : 0,
	bottom : 0,
	backgroundColor : color
});

var rights = Ti.UI.createView({
	width : '2',
	height : '10',
	right : 0,
	bottom : 0,
	backgroundColor : color
});

uls.add(bottoms);
uls.add(lefts);
uls.add(rights);

scrollView.add(uls);

var email = Titanium.UI.createTextField({
	color : '#336699',
	top : 10,
	width : 280,
	height : 40,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	hintText : 'Email',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
scrollView.add(email);

var ul2 = Ti.UI.createView({
	height : '10dp',
	top : -5,
	width : '300',
});

var bottom1 = Ti.UI.createView({
	height : '2',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : color
});

var left1 = Ti.UI.createView({
	width : '2',
	height : '10',
	left : 0,
	bottom : 0,
	backgroundColor : color
});

var right1 = Ti.UI.createView({
	width : '2',
	height : '10',
	right : 0,
	bottom : 0,
	backgroundColor : color
});

ul2.add(bottom1);
ul2.add(left1);
ul2.add(right1);

scrollView.add(ul2);

var password = Titanium.UI.createTextField({
	color : '#336699',
	width : 280,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	height : 40,
	top : 10,
	hintText : 'Password',
	passwordMask : true,
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
scrollView.add(password);

var ul3 = Ti.UI.createView({
	height : '10dp',
	top : -5,
	width : '300',
});

var bottom2 = Ti.UI.createView({
	height : '2',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : color
});

var left2 = Ti.UI.createView({
	width : '2',
	height : '10',
	left : 0,
	bottom : 0,
	backgroundColor : color
});

var right2 = Ti.UI.createView({
	width : '2',
	height : '10',
	right : 0,
	bottom : 0,
	backgroundColor : color
});

ul3.add(bottom2);
ul3.add(left2);
ul3.add(right2);

scrollView.add(ul3);

if (OS_IOS) {

	username.addEventListener('click', function(e) {
		scrollView.setTop(-30);
	});

	username.addEventListener('blur', function(e) {
		scrollView.setTop(0);
	});

	password.addEventListener('click', function(e) {
		scrollView.setTop(-70);
	});

	password.addEventListener('blur', function(e) {
		scrollView.setTop(0);
	});

}

if (OS_ANDROID) {
	var toast = Ti.UI.createNotification({
		message : "Please check Internet Connectivity",
		duration : Ti.UI.NOTIFICATION_DURATION_SHORT
	});
}
var detailBtn = Titanium.UI.createButton({
	title : 'Register',
	top : 40,
	bottom : 40,
	width : 300,
	color : '#ffffff',
	height : 50,
	borderColor : "#003366",
	borderWidth : 1,
	borderRadius : 1,
	style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	backgroundGradient : {
		type : "linear",
		startPoint : {
			x : "0%",
			y : "0%"
		},
		endPoint : {
			x : "0%",
			y : "100%"
		},
		backFillStart : false,
		colors : [{
			color : "#2b9dd3",
			offset : 0.0
		}, {
			color : "#15699c",
			offset : 1.0
		}]
	},
	font : {
		fontFamily : 'HelveticaNeue-Regular',
		fontSize : 16
	}
});
scrollView.add(detailBtn);

///////

//scrollView.add(shape);
//scrollView.add(shape1);

///////////////

var detailReq = Titanium.Network.createHTTPClient();

detailBtn.addEventListener('click', function(e) {

	if( Titanium.Network.networkType == Titanium.Network.NETWORK_NONE ){
		if (OS_IOS) {
			alert("Please check your connectivity");
		} else {
			toast.show();
			return;	
		}
		
	}	
	
	
	if (username.value != '' && password.value != '' && surname.value != '' && email.value != '') {
		var milliseconds = (new Date).getTime();
		//alert(Ti.Utils.md5HexDigest(password.value));
		//password : Ti.Utils.md5HexDigest(password.value),
		detailReq.open("POST", "http://api.mofilm.com/user/save");
		var params = {
			username : username.value,
			surname : surname.value,
			email : email.value,
			password : password.value,
			apiKey : "lNAIqOwwvq3iUoSfUYhggX21IR8TZPZV",
			privateKey : "lVMi@jtsEloF4TnBNr7tFUBNpkn1XwvJl6csEuM8Z39zSg60ymqrToPXYAXrxJ-Q",
			time : milliseconds,
			uri : "/user/save"
		};
		detailReq.send(params);
	} else {
		alert("All fields are required");
	}
});

detailReq.onload = function() {
	//Ti.API.info(this.responseText);
	var xml = this.responseText;
	Ti.API.log(xml);
	var xmldoc = Ti.XML.parseString(xml);
	var response = xmldoc.documentElement.getElementsByTagName("response");

	if (response.item(0).getAttribute("type") == "result") {

		var userid = response.item(0).getElementsByTagName("userID").item(0).textContent;

		Titanium.App.Properties.setString("userid", userid);

		if (OS_IOS) {

			var detailController = Alloy.createController('index', {
				parentTab : parentTab,
				dataId : dataId
			});
			parentTab.open(detailController.getView());
		} else {

			//alert(dataId);

				var listController = Alloy.createController('aaalist', {
					dataId : dataId
				}).getView();
				listController.open();


		}

		/*
		 var detailController = Alloy.createController('index', {
		 parentTab : parentTab
		 });
		 parentTab.open(detailController.getView());
		 */
	} else {
		//Ti.API.info("Wrong passsword");
		alert(response.item(0).getElementsByTagName("message").item(0).textContent)
		//alert("Wrong username/password");
	}
	/*
	for (var i = 0; i < response.length; i++) {

	Ti.API.info(response.item(i).getElementsByTagName("userID").item(0).textContent);
	}
	*/
	//Ti.API.info(response);

	//Ti.API.info(this.responseXML);
	/*
	 var json = this.responseText;
	 var response = JSON.parse(json);
	 if (response.logged == true) {
	 alert("Welcome " + response.name + ". Your email is: " + response.email);
	 } else {
	 alert(response.message);
	 }
	 */
};

// Android
if (OS_ANDROID) {
	$.detail.addEventListener('open', function() {
		if ($.detail.activity) {
			var activity = $.detail.activity;

			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('Register', 'Register');
				activity.actionBar.displayHomeAsUp = true;
				activity.actionBar.setLogo("");
				//activity.actionBar.backgroundImage = "/images/NavBG_44.jpg";
				activity.actionBar.onHomeIconItemSelected = function() {
					$.detail.close();
					$.detail = null;
				};
			}
		}
	});

	// Back Button - not really necessary here - this is the default behaviour anyway?
	/*
	 $.detail.addEventListener('android:back', function() {
	 $.detail.close();
	 $.detail = null;
	 });
	 */
}

// iOS
// as detail was opened in the tabGroup, iOS will handle the nav itself (back button action and title)
// but we could change the iOS back button text:
//$.detail.backButtonTitle = L('backText', 'Back');
var ButtonRetour = Ti.UI.createButton({
	backgroundImage : '/images/back1.png',
	height : 24,
	width : 24
});
ButtonRetour.addEventListener('click', function() {
	$.detail.close();
});
$.detail.leftNavButton = ButtonRetour;

$.detail.tabBarHidden = true;


if (OS_ANDROID) {
	$.detail.addEventListener('focus', function() {
		if ($.detail.activity) {
			var activity = $.detail.activity;

			// Menu
			//activity.invalidateOptionsMenu();
			activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;

				if (Ti.App.Properties.getString("userid") == null) {

					var menuItem1 = menu.add({
						title : L('addItem', 'Login'),
						left : 30,
						// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
						// Menu items can be all hidden, shown if space available, forced to show all times
						showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
					});

					menuItem1.addEventListener('click', openAddItem);

				}

				if (Ti.App.Properties.getString("userid") != null) {

					var menuItem2 = menu.add({
						title : L('logout', 'Logout'),
						left : 30,
						// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
						// Menu items can be all hidden, shown if space available, forced to show all times
						showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
					});

					menuItem2.addEventListener('click', logout);
				}

				var menuItem3 = menu.add({
					title : L('addItem', 'About Mofilm'),
					left : 30,
					// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
					// Menu items can be all hidden, shown if space available, forced to show all times
					showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
				});

				menuItem3.addEventListener('click', about);


				if (Ti.App.Properties.getString("userid") == null) {
					var menuItem5 = menu.add({
						title : L('addItem', 'Register'),
						icon : '/images/refresh.png',
						// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
						// Menu items can be all hidden, shown if space available, forced to show all times
						showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
					});
	
					menuItem5.addEventListener('click', register);
				}


			}
			//activity.actionBar.title = "dddd";
			// Action Bar

			/*
			 if (Alloy.Globals.Android.Api >= 11 && activity.actionBar) {
			 activity.actionBar.title = L('list', 'List');
			 }
			 */
		}
	});
}


function openAddItem() {
	// We aren't adding the function to add rows
	// Otherwise this would open a "create" controller like how detail is created in dialog above
	// Create would have a form, which if valid, push the data to an "AppData.addItem(dataObject);"
	// And then close the window and trigger the redrawing of the data table
	// $.create.close(); Ti.App.fireEvent('dataUpdated');
	//alert('Not Implemented');
	var loginController = Alloy.createController('login', {
		parentTab : $.list
	}).getView();
	//$.list.open(loginController.getView());
	loginController.open();

}

function about() {
	var listController = Alloy.createController('about', {
	}).getView();
	listController.open();

}


function register() {
	var listController = Alloy.createController('register', {
	}).getView();
	listController.open();

}

function test() {
	var listController = Alloy.createController('test', {
	}).getView();
	listController.open();

}

function logout() {

	//Ti.App.Properties.removeProperty("userid");
	Titanium.App.Properties.setString("userid", null);
	//alert("Logged out");
	var listController = Alloy.createController('aaalist', {
	}).getView();
	listController.open();

	//Ti.App.Properties.removeProperty("token");

}

