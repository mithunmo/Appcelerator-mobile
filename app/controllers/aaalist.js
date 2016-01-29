var rss = require('rss');
var loading = false;

if (OS_ANDROID) {
	$.list.addEventListener('focus', function() {
		if ($.list.activity) {
			var activity = $.list.activity;

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

				var menuItem4 = menu.add({
					title : L('addItem', 'Refresh'),
					icon : '/images/ref.png',
					// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
					// Menu items can be all hidden, shown if space available, forced to show all times
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});

				menuItem4.addEventListener('click', doUpdate);

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
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('detail', 'MOFILM Live Briefs');
				//activity.actionBar.displayHomeAsUp = true;

				//activity.actionBar.backgroundImage = "/images/NavBG_44.jpg";
				activity.actionBar.onHomeIconItemSelected = function() {
					$.list.close();
					$.list = null;
				};
			}

			/*
			 if (Alloy.Globals.Android.Api >= 11 && activity.actionBar) {
			 activity.actionBar.title = L('list', 'List');
			 }
			 */
		}
	});

	function cback(evt) {

		//CloudPush.addEventListener('callback', function(evt) {
		//Ti.API.log("===== CALLBACK===========");
		//Ti.API.log(JSON.stringify(evt));
		//Ti.API.log("===== CALLBACK===========");
		//Ti.API.log("push"+push);

		//.removeAllChildren();
		//var ww = Ti.UI.currentWindow;
		//ww.removeAllChildren();

		tableRecords.setTop(70);
		activityIndicator.show();

		push = 0;
		var title = JSON.parse(evt.payload);
		paydata = +rss.loadRssFeed({
			success : function(dataStore) {

				for (var i = 0; i < dataStore.length; i++) {
					if (title.id == dataStore[i].id) {
						activityIndicator.hide();
						var detailController = Alloy.createController('androiddetail', {
							dataId : i,
							name : dataStore.brand
						}).getView();
						detailController.open();
						break;
					}

				}
			}
		});

		tableRecords.setTop(0);
	}

}

var style;
if (Ti.Platform.name === 'iPhone OS') {
	style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
} else {
	style = Ti.UI.ActivityIndicatorStyle.DARK;
}
var activityIndicator = Ti.UI.createActivityIndicator({
	color : 'black',
	font : {
		fontFamily : 'Helvetica Neue',
		fontSize : 20,
		fontWeight : 'bold'
	},
	style : style,
	top : 50,
	height : 20,
	width : Ti.UI.SIZE
});

var button = Titanium.UI.createButton({
	title : 'Retry',
	top : 70,
	width : 100,
	height : 50
});

button.addEventListener('click', function(e) {
	doUpdate();
});

$.list.add(button);
button.visible = false;

var toast = Ti.UI.createNotification({
	message : "Please check Internet Connectivity",
	duration : Ti.UI.NOTIFICATION_DURATION_SHORT
});

$.list.add(activityIndicator);
var tableRecords = Ti.UI.createTableView({
	backgroundColor : "#f0ede4",
	separatorColor : "#ccc",
	top : 30
});

$.list.add(tableRecords);
//scrollView.add(tableRecords);

function tableClick(e) {
	var dataId = e.rowData.dataId;
	var name = e.rowData.name;
	// Here we can pick up the custom variable set with Ti.UI.createTableViewRow
	var someRandomVar = e.rowData.someRandomVar;

	// All single clicks are just going to open the detail window for this item
	// We pass the tab object to the child controller so if it needed to open a window it has a reference to the parent tab in which to do so
	// Rather than passing $.tabList as a controller arg, we could set: Alloy.Globals.tabList = $.tabList; outside of this function
	// and have the child controller call: Alloy.Globals.tabList.open(someController.getView()) instead of parentTab.open(someController.getView())
	var detailController = Alloy.createController('androiddetail', {
		parentTab : $.list,
		dataId : dataId,
		name : name
	}).getView();
	// As detail controller will only be opened from this list controller, which will call an open() method on it
	// there is no need in the detail.js controller to call $.detail.open();

	//$.list.open(detailController.getView());
	detailController.open();


	// detailController.getView().open();
}

//Ti.App.addEventListener('dataUpdated', function(e) {
function doUpdate() {

	if (loading == false) {
		loading = true;
	} else {
		return;
	}
	/*

	if(Titanium.Network.networkType == Titanium.Network.NETWORK_NONE){
	//var er = new Error("My Custom Error");
	//throw er;
	return;
	}
	*/
	//throw 'No internet';

	tableRecords.setTop(80);
	activityIndicator.show();

	if (! _.isEmpty(tableRecords.data)) {
		tableRecords.data = [];
		tableRecords.removeEventListener('click', tableClick);
		//tableRecords.removeEventListener('longpress', tableLongPress);
		//tableRecords.removeEventListener('scroll', tableRefresh);
		//tableRecords.removeEventListener('scrollend', tableend);
	}

	//	foo(function(dataStore) {
	rss.loadRssFeed({
		success : function(dataStore) {
			
			button.visible = false;
			if (!dataStore.length) {
				$.labelNoRecords.text = L('noRecordsFound', 'No Records Found');
				$.labelNoRecords.visible = true;
			} else {
				tableRecords.setTop(0);
				Ti.API.log("After processing");
				activityIndicator.hide();
				$.labelNoRecords.hide();
				//toast.hide();
				var recordData = [];
				var offset = 0;
				//statusLabel.text = "Pull to refresh";
				reloading = false;
				for (var i = 0; i < dataStore.length; i++) {
					var record = dataStore[i];
					// This doesn't need to be a row, it could just be an object
					// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableView

					var len = dataStore.length * 110 * (Titanium.Platform.displayCaps.logicalDensityFactor);
					//scrollView.setContentHeight(len);

					var rowcolor;
					if (i % 2 == 0) {
						rowcolor = "#f0ede4";
					} else {
						rowcolor = "#f8f6f2";
					}

					var row = Ti.UI.createTableViewRow({
						dataId : i,
						name : record.brand,
						className : 'trow',
						objName : 'row',
						backgroundColor : rowcolor,
						backgroundSelectedColor : "#FFF",
						height : Alloy.Globals.Styles.TableViewRow.height,
						// This demonstrates that custom properties can be set
						// Enabling you to pass whatever you want to the click event handler later
						someRandomVar : 'Just as an example ' + i
					});

					var logoview = Ti.UI.createView({
						backgroundColor : '#FFF',
						height : 120,
						width : 100,
						left : 1
					});

/*
					row.add(logoview);

					var imgView = Titanium.UI.createImageView({
						image : record.url,
						defaultImage : '/images/KS_nav_ui.png',
						height : 80,
						width : 80,
						left : 10
					});

					logoview.add(imgView);
*/
					console.log(record.url);
					var imgView = Titanium.UI.createImageView({
						backgroundColor : "#f0ede4",
						image : record.url,
						width : 100,
						height : 120,
						left : 2
					});
					//logoview.add(imgView);
					row.add(imgView);


					var l1 = Titanium.UI.createLabel({
						text : record.brand,
						color : '#000',
						font : {
							fontFamily : 'HelveticaNeue',
							fontSize : 18
						},
						top : 5,
						left : 110,
						height : 'auto'
					});
					row.add(l1);
					var event = Titanium.UI.createLabel({
						text : record.event,
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 110,
						top : 30,
						height : 'auto'
					});
					row.add(event);
					var l2 = Titanium.UI.createLabel({
						text : "Deadline: " + record.deadline,
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 110,
						top : 52,
						height : 'auto'
					});

					row.add(l2);

					var pg = Titanium.UI.createLabel({
						text : 'Prize + Grant',
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 110,
						top : 75,
						height : 'auto'
					});

					row.add(pg);

					var grant = Titanium.UI.createImageView({
						image : "/images/tick.png",
						width : 16,
						height : 16,
						top : 80,
						left : 225
					});

					//row.add(grant);

					var prize = Titanium.UI.createLabel({
						text : record.prize,
						color : '#000',
						font : {
							fontFamily : 'Helvetica-Light',
							fontSize : 14
						},
						right : 5,
						top : 75,
						height : 'auto'
					});

					row.add(prize);

					recordData.push(row);
				}
				// Set the table data in one go rather than making repeated (costlier) calls on the loop
				tableRecords.setData(recordData);
				//scrollView.scrollTo(0, 60);
			}
			tableRecords.addEventListener('click', tableClick);
			loading = false;
		},
		error : function() {
			button.visible = true;
			loading = false;
			//toast.show();
			$.labelNoRecords.text = "Please check your connectivity";
			$.labelNoRecords.visible = true;
			$.labelNoRecords.setTop(10);
			tableRecords.setTop(120);
			activityIndicator.hide();

			/*
			 var seti = setInterval(function(){
			 if(Titanium.Network.networkType == Titanium.Network.NETWORK_NONE){

			 } else {
			 clearInterval(seti);
			 doUpdate();
			 }
			 }, 3000);
			 */

			reloading = false;
			//doUpdate();
			//statusLabel.text = "Pull to Refresh";

		}
	});

	//});
}

doUpdate();
//Ti.App.fireEvent('dataUpdated');

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

//$.detail.

if (OS_ANDROID) {



	//	var rss = require('rss');
	var CloudPush = require('ti.cloudpush');
	var push = 0;
	CloudPush.singleCallback = true;

	// Initialize the module
	CloudPush.retrieveDeviceToken({
		success : deviceTokenSuccess,
		error : deviceTokenError
	});

	// Enable push notifications for this device
	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
		//CloudPush.enabled = true;

		deviceToken = e.deviceToken;
		subscribeToChannel();
		//sendTestNotification();

	}

	function deviceTokenError(e) {
		//alert('Failed to register for push notifications! ' + e.error);
	}


	CloudPush.addEventListener('callback', cback);
	CloudPush.addEventListener('trayClickLaunchedApp', launchApp);
	CloudPush.addEventListener('trayClickFocusedApp', focusApp);

	// Triggered when the push notifications is in the tray when the app is not running
	function launchApp(evt) {
		Ti.API.info('Tray Click Launched App (app was not running)');
		Ti.API.log("===== LAUNCH===========");
		Ti.API.log(JSON.stringify(evt));
		Ti.API.log("===== LAUNCH===========");
		push = 1;

	}

	// Triggered when the push notifications is in the tray when the app is running
	function focusApp(evt) {
		push = 1;
		Ti.API.info('Tray Click Focused App (app was already running)');
		Ti.API.log("===== FOCUS===========");
		Ti.API.log(JSON.stringify(evt));
		Ti.API.log("===== FOCUS===========");

	}

}

var Cloud = require("ti.cloud");
function subscribeToChannel() {
	// Subscribes the device to the 'test' channel
	// Specify the push type as either 'android' for Android or 'ios' for iOS
	alert(deviceToken+"ss");
	Titanium.App.Properties.setString("token", deviceToken);
	Cloud.PushNotifications.subscribeToken({
		device_token : deviceToken,
		channel : 'test',
		type : Ti.Platform.name == 'android' ? 'android' : 'ios'
	}, function(e) {
		if (e.success) {
			//alert('Subscribed');
		} else {
			//alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
	
}
