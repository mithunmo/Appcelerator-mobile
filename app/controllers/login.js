//
// Check for expected controller args
//
var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';

//$.detail.title = "Login";
$.detail.titleControl = Ti.UI.createLabel({
    text : "Login",
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
	//$.detail.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.barColor = "#014a69";

}

var view = Ti.UI.createView({
	backgroundColor : '#f0ede4',
	top : 20,
	bottom : 200,
	height : 160,
	width : 250
});
$.detail.add(view);
var img = Ti.UI.createImageView({
	height : Ti.UI.SIZE,
	backgroundColor : "#f0ede4",
	image : '/images/mofilm.png',
	width : Ti.UI.SIZE
});
view.add(img);
/*
 var image = Ti.UI.createImageView({
 backgroundImage:'/images/mofilm.png',
 top : 40,
 bottom : 200,
 width : auto,
 height : auto,

 });

 $.detail.add(image);
 */
/*
 var username = Titanium.UI.createTextField({
 color : '#336699',
 top : 200,
 left : 10,
 width : 300,
 height : 40,
 hintText : 'Username',
 keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
 returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
 borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
 });
 */
var username = Titanium.UI.createTextField({
	color : '#336699',
	top : 170,
	width : 280,
	height : 40,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	hintText : 'Username',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
$.detail.add(username);
/*
 var userimage = Ti.UI.createImageView({
 backgroundImage:'/images/textbox_image.png',
 top : 230,
 width : 300,
 height : 8,
 });
 $.detail.add(userimage);
 */
var password = Titanium.UI.createTextField({
	color : '#336699',
	top : 220,
	width : 280,
	backgroundColor : 'transparent', /* -- See Add this line -- */
	height : 40,
	hintText : 'Password',
	passwordMask : true,
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
});
$.detail.add(password);

if ( OS_ANDROID ) {
var toast = Ti.UI.createNotification({
	message : "Please check Internet Connectivity",
	duration : Ti.UI.NOTIFICATION_DURATION_SHORT
});

}

if ( OS_IOS ) {

	username.addEventListener('click', function(e) {
		$.detail.setTop(-30);
	});
	
	username.addEventListener('blur', function(e) {
		$.detail.setTop(0);
	});
	
	
	password.addEventListener('click', function(e) {
		$.detail.setTop(-70);
	});
	
	password.addEventListener('blur', function(e) {
		$.detail.setTop(0);
	});

}


/*
var passimage = Ti.UI.createImageView({
backgroundImage:'/images/textbox_image.png',
top : 280,
width : 300,
height : 8,
});
//$.detail.add(userimage);
/*
var password1 = Titanium.UI.createTextField({
top : 280,
left : 10,
backgroundImage: 'images/textbox_image.png',
width : 300,
height : 8,
keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
returnKeyType : Titanium.UI.RETURNKEY_DEFAULT
});

$.detail.add(passimage);
*/

//var linem = Titanium.UI.createView({top : 300,height:2,width:1,bottom:0,left:0,right:0,borderWidth:1,borderColor:'green'});
/*
 var tfAmount = Titanium.UI.createTextField({
 top : 300,
 width : 100,
 height :35,
 backgroundImage: 'images/textbox_image.png'
 });
 */

var detailBtn = Titanium.UI.createButton({
	title : 'LOGIN',
	top : 300,
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
$.detail.add(detailBtn);

///////

var shape = Ti.UI.createView({
	top : 200,
	height : '10dp',
	width : '300',
});

var shape1 = Ti.UI.createView({
	top : 250,
	height : '10dp',
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

shape.add(bottom);
shape.add(left);
shape.add(right);

shape1.add(bottom1);
shape1.add(left1);
shape1.add(right1);

$.detail.add(shape);
$.detail.add(shape1);

///////////////

var detailReq = Titanium.Network.createHTTPClient();

detailBtn.addEventListener('click', function(e) {
	
	if( Titanium.Network.networkType === Titanium.Network.NETWORK_NONE ){		
		//alert("no netowrk");
		if ( OS_ANDROID ) {			
			toast.show();
			return;	

		} else {
			alert("Please check your connectivity");
		}
		
	}	

	if (username.value != '' && password.value != '') {
		var milliseconds = (new Date).getTime();
		//alert(Ti.Utils.md5HexDigest(password.value));
		//password : Ti.Utils.md5HexDigest(password.value),
		detailReq.open("POST", "http://api.mofilm.com/user/authenticate");
		var params = {
			username : username.value,
			password : password.value,
			apiKey : "lNAIqOwwvq3iUoSfUYhggX21IR8TZPZV",
			privateKey : "lVMi@jtsEloF4TnBNr7tFUBNpkn1XwvJl6csEuM8Z39zSg60ymqrToPXYAXrxJ-Q",
			time : milliseconds,
			uri : "/user/authenticate"
		};
		detailReq.send(params);
	} else {
		
		if ( OS_ANDROID ) {
			var wrong = Ti.UI.createNotification({
				message : " Username/Password not correct ",
				duration : Ti.UI.NOTIFICATION_DURATION_SHORT
			});
			wrong.show();		
		} else {
			alert("Username/Password not correct")
		}
	}
});

detailReq.onload = function() {
	//Ti.API.info(this.responseText);
	var xml = this.responseText;
	var xmldoc = Ti.XML.parseString(xml);
	var response = xmldoc.documentElement.getElementsByTagName("response");

	if (response.item(0).getAttribute("type") == "result") {
		var userid = response.item(0).getElementsByTagName("userID").item(0).textContent;

		Titanium.App.Properties.setString("userid", userid);

		var savePushToken = Titanium.Network.createHTTPClient();

		savePushToken.open("POST", "http://api.mofilm.com/user/pushtoken");
		var params = {
			userID : userid,
			token : Titanium.App.Properties.getString("token"),
			type : Ti.Platform.osname
		};
		savePushToken.send(params);

		//alert(Ti.Platform.osname);
		if (OS_IOS) {
			
			if (dataId === '') {
				dataId = "";
				var detailController = Alloy.createController('index', {
					parentTab : parentTab,
					dataId : dataId,
					login : "login"
				});
				parentTab.open(detailController.getView());
				
			} else {
				var detailController = Alloy.createController('detail', {
					parentTab : parentTab,
					dataId : dataId,
					login : "login"
				});
				parentTab.open(detailController.getView());
			}
		} else {
			
			//alert(dataId);
			
			if (dataId !== '') {
				var listController = Alloy.createController('androiddetail', {
					dataId : dataId,
					login : "login"
				}).getView();
				listController.open();
			} else {				
				var listController = Alloy.createController('aaalist', {
					dataId : dataId,
					login : "login"
				}).getView();
				listController.open();
				
			}

		}

		/*
		 var detailController = Alloy.createController('index', {
		 parentTab : parentTab
		 });
		 parentTab.open(detailController.getView());
		 */
	} else {
		
		if (OS_ANDROID) {
		var wrong = Ti.UI.createNotification({
			message : " Username/Password not correct ",
			duration : Ti.UI.NOTIFICATION_DURATION_SHORT
		});
		wrong.show();	
		} else {
			alert("Username/Password not correct");
		}	
		
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
				activity.actionBar.title = L('Login', 'Login');
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
    	backgroundImage:'/images/back1.png',
    	height :24,
    	width : 24           	
	});          
		ButtonRetour.addEventListener('click', function(){
		    $.detail.close();
		});	   
 	$.detail.leftNavButton = ButtonRetour;

$.detail.tabBarHidden = true;


if (OS_IOS) {

	/*

	 var send = Titanium.UI.createButton({
	 height: 16,
	 widhth :16,
	 backgroundImage: "images/arrow.png"

	 });

	 var setting = Titanium.UI.createButton({
	 title: 'Setting',
	 style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
	 });

	 flexSpace = Titanium.UI.createButton({
	 systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	 });

	 var toolbar = Titanium.UI.iOS.createToolbar({
	 items:[send, flexSpace, setting],
	 bottom:0,
	 borderTop:true,
	 borderBottom:false
	 });
	 $.detail.add(toolbar);
	 */

}

/*
 var CloudPush = require('ti.cloudpush');
 var rss = require('rss');

 CloudPush.addEventListener('callback', function(evt) {
 alert(JSON.stringify(evt));

 //$.list.removeAllChildren();

 var title = JSON.parse(evt.payload);

 rss.loadRssFeed({
 success : function(dataStore) {

 for (var i = 0; i < dataStore.length; i++) {
 if (title.id == dataStore[i].id ) {

 var detailController = Alloy.createController('aadetail', {
 parentTab : $.detail,
 dataId : i,
 name : dataStore.brand
 }).getView();
 detailController.open();
 break;
 }

 }
 }
 });

 //var listController = Alloy.createController('aaalist', {}).getView();
 //listController.open();

 });
 */

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

