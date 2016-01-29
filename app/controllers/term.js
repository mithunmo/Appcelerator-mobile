//
// Check for expected controller args
//
var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';

//$.detail.title = "About Mofilm";

$.detail.titleControl = Ti.UI.createLabel({
    text : "Contest Disclaimer",
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

var scrollView = Ti.UI.createScrollView({
	top : 10,
	bottom: 20,
	contentWidth : 'auto',
	contentHeight : 'auto',
	showVerticalScrollIndicator : true,
	height : '100%',
	width : '100%'
});

var self = Ti.UI.createView({
	backgroundColor : '#f0ede4',
	left:2,
	bottom :20,
	width : 'auto',
	height : 'auto',
	layout : 'vertical',
	backgroundColor : "#f0ede4"
});

var desc = "This contest is not in any way sponsored, endorsed, administered by, or associated with Apple Inc. Apple Inc. has no involvement in this contest nor any activity related thereto.";

var l2 = Titanium.UI.createLabel({
	text : desc,
	color : '#000',
	shadowColor : '#ddd',
	left : 8,
	right: 8,
	font : {
		fontFamily : 'Helvetica',
		fontSize : 15
	},
	height : 'auto',
});



self.add(l2);
$.detail.add(scrollView);
scrollView.add(self);


// Android
if (OS_ANDROID) {
	$.detail.addEventListener('open', function() {
		if ($.detail.activity) {
			var activity = $.detail.activity;

			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('detail', 'detail');
				activity.actionBar.displayHomeAsUp = true;
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


if (OS_ANDROID) {
	$.detail.addEventListener('open', function() {
		if ($.detail.activity) {
			var activity = $.detail.activity;

			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('Login', 'About MOFILM');
				activity.actionBar.displayHomeAsUp = true;
				//activity.actionBar.backgroundImage = "/images/NavBG_44.jpg";
				activity.actionBar.onHomeIconItemSelected = function() {
					$.detail.close();
					$.detail = null;
				};
			}
		}
	});
}




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

