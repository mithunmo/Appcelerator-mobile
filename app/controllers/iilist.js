//$.ll.removeAllChildren();
var rss = require('rss');
var loading = false;
$.list.tabBarHidden = true;
//$.tabList.title = L('Briefs', 'Briefs');

//$.list.title = L('Briefs', 'MOFILM Live Briefs');

//$.list.barImage = "/images/NavBG_44.jpg";
//$.list.statusBarStyle = Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
$.list.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
$.list.barColor = "#014a69";


//$.list.barColor = "#15699c";

$.list.titleControl = Ti.UI.createLabel({
    text : 'MOFILM Live Briefs',
    font : {
        fontSize : 18,
        fontWeight : "Bold",
        fontFamily : 'Helvetica'
    },
    color : 'white'
});


var tableRecords = Ti.UI.createTableView({
	separatorColor : "#d4d1ca"
});

$.list.add(tableRecords);

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
		fontSize : 26,
		fontWeight : 'bold'
	},
	message : 'Loading...',
	style : style,
	top : 10,
	left : 10,
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE
});

$.list.add(activityIndicator);

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

//Ti.App.removeEventListener("dataUpdated");

function doUpdate() {
	if (! _.isEmpty(tableRecords.data)) {
		tableRecords.data = [];
		tableRecords.removeEventListener('click', tableClick);
		//tableRecords.removeEventListener('longpress', tableLongPress);
		tableRecords.removeEventListener('scroll', tableRefresh);
		tableRecords.removeEventListener('scrollend', tableend);
	}

	// Set loading state
	activityIndicator.show();
	$.labelNoRecords.visible = false;

	rss.loadRssFeed({
		success : function(dataStore) {
			//(function exect() {
			activityIndicator.hide();
			loading = true;
			button.visible = false;
			tableRecords.setTop(0);
			// Require our data store - we are not creating a fresh instance each call
			// Access to the data module we are requiring works like a singleton (create new, or reuse if exists)
			//var AppData = require('data');
			//var dataStore = AppData.getAll();


			// Either set the state for no records, or loop and add each item as a TableViewRow
			if (!dataStore.length) {
				$.labelNoRecords.text = L('noRecordsFound', 'No Records Found');
				$.labelNoRecords.visible = true;
				//alert("dddd");
			} else {

				var recordData = [];
				var offset = 0;
				Ti.UI.iPhone.appBadge = 0;

				for (var i = 0; i < dataStore.length; i++) {
					var record = dataStore[i];
					// This doesn't need to be a row, it could just be an object
					// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TableView

					//var len = dataStore.length * 100;
					//scrollView.setContentHeight(len);

					var rowcolor;
					if (i % 2 == 0) {
						rowcolor = "#f0ede4";
					} else {
						rowcolor = "#f8f6f2";
					}	
					var row = Ti.UI.createTableViewRow({
							dataId : i,
							className : 'trow',
							objName : 'row',
							backgroundColor : rowcolor,
							selectedBackgroundColor: "#FFF",
							height : Alloy.Globals.Styles.TableViewRow.height,
							// This demonstrates that custom properties can be set
							// Enabling you to pass whatever you want to the click event handler later
							someRandomVar : 'Just as an example ' + i
						});

					//$.pull.add(row);

					var logoview = Ti.UI.createView({
						backgroundColor : '#FFF',
						height : 120,
						width : 100,
						left : 1
					});

					var imgView = Titanium.UI.createImageView({
						backgroundColor : "#f0ede4",
						image : record.url,
						width : Ti.UI.SIZE,
						height : Ti.UI.SIZE,
						left : 10
					});
					logoview.add(imgView);
					row.add(logoview);

					var imgNextView = Titanium.UI.createView({
						left:100,
						width : "auto",
						backgroundSelectedColor : "#cdc6b2"
					});
					
					row.add(imgNextView);


					var l1 = Titanium.UI.createLabel({
						text : record.brand,
						color : '#000',
						font : {
							fontFamily : 'HelveticaNeue',
							fontSize : 16
						},
						top : 5,
						left : 10,
						height : 'auto'
					});
					//row.add(l1);
					imgNextView.add(l1);
					
					var event = Titanium.UI.createLabel({
						text : record.event,
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 10,
						top : 30,
						height : 'auto'
					});
					//row.add(event);
					imgNextView.add(event);
					
					var l2 = Titanium.UI.createLabel({
						text : "Deadline: " + record.deadline,
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 10,
						top : 52,
						height : 'auto'
					});

					//row.add(l2);
					imgNextView.add(l2);
					
					var pg = Titanium.UI.createLabel({
						text : 'Prize + Grant',
						color : '#000',
						font : {
							fontFamily : 'AvenirNextCondensed-Regular',
							fontSize : 15
						},
						left : 10,
						top : 75,
						height : 'auto'
					});

					//row.add(pg);
					
					
					var grant = Titanium.UI.createImageView({
						image : "/images/tick.png",
						width : 16,
						height : 16,
						top : 80,
						left : 200
					});

					//row.add(grant);

					var prize = Titanium.UI.createLabel({
						text : record.prize,
						color : '#000',
						font : {
							fontFamily : 'Helvetica-Light',
							fontSize : 14,
						},
						right : 5,
						top : 75,
						height : 'auto'
					});

					//row.add(prize);
						imgNextView.add(pg);
						imgNextView.add(prize);
					

					recordData.push(row);
				}
				// Set the table data in one go rather than making repeated (costlier) calls on the loop
				tableRecords.setData(recordData);

			}

			// Handle table clicks - either single click or longpress (holding button down then releasing)
			// Rather than passing the function directly as the 2nd arguement, pass a reference
			// This allows it to be removed later: tableRecords.removeEventListener('click', tableClick);
			tableRecords.addEventListener('click', tableClick);
			//tableRecords.addEventListener('longpress', tableLongPress);
			tableRecords.addEventListener('scroll', tableRefresh);
			tableRecords.addEventListener('scrollend', tableend);

			//tableRecords.addEventListener('scrollend', tableend);
			if (OS_IOS) {

				var pulling = false;
				var reloading = false;
				var offset = 0;

				tableRecords.addEventListener('scroll', function(e) {
					offset = e.contentOffset.y;
					//alert("dd");
					if (pulling && !reloading && offset > -80 && offset < 0) {
						pulling = false;
						//var unrotate = Ti.UI.create2DMatrix();
						//imageArrow.animate({transform:unrotate, duration:180});
						//labelStatus.text = 'Pull down to refresh...';
						//$.status.text = 'Pull down to refresh...';
					} else if (!pulling && !reloading && offset < -80) {
						pulling = true;
						// var rotate = Ti.UI.create2DMatrix().rotate(180);
						//imageArrow.animate({transform:rotate, duration:180});
						//labelStatus.text = 'Release to refresh...';
						//$.status.text = 'Release to refresh...';
					}
				});

				function resetPullHeader(table) {
					reloading = false;
					labelLastUpdated.text = 'Last Updated: ' + getFormattedDate();
					actInd.hide();
					imageArrow.transform = Ti.UI.create2DMatrix();
					imageArrow.show();
					labelStatus.text = 'Pull down to refresh...';
					//table.setContentInsets({top:0}, {animated:true});
				}


				tableRecords.addEventListener('dragEnd', function(e) {
					if (pulling && !reloading && offset < -80) {
						pulling = false;
						reloading = true;
						//$.status.text = "Updating ...";
						//labelStatus.text = 'Updating...';
						//imageArrow.hide();
						//actInd.show();
						//e.source.setContentInsets({top:80}, {animated:true});
						////	setTimeout(function() {
						//loadTableData(e.source, 5, resetPullHeader(e.source));
						Ti.API.log("updating when scrolling");

						//Ti.App.fireEvent('dataUpdated');
						doUpdate();

						/////}, 1000);
					}
				});

			} else {

			}

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
			
			//reloading = false;
			//statusLabel.text = "Pull to Refresh";
/*			
			activityIndicator.hide();
			alert("No internet");
			doUpdate();
*/			

		}
		
		
		
	});
	//});
}

doUpdate();
//Ti.App.removeEventListener("dataUpdated", dosome);
//alert("list"+Alloy.Globals.add);

//if ( Alloy.Globals.add != 'add' ){
//Ti.App.addEventListener("dataUpdated", dosome);
//}
// Manually call dataUpdated once to perform the initial table rendering (subsequently called after data edited)
//Ti.App.fireEvent('dataUpdated');

//
// Action Handlers
//

var firstitem = 0;

function tableend(e) {
	//var firstVisibleItemIndex = e.firstVisibleItem;
	if (firstitem == 0) {
		Ti.API.log("updating");
		//Ti.App.fireEvent('dataUpdated');
	}

}

function tableRefresh(e) {

	var firstVisibleItemIndex = e.firstVisibleItem;
	var totalItems = e.totalItemCount;

	var visibleItemCount = e.visibleItemCount;
	//        Ti.API.log(firstVisibleItemIndex);
	//console.log(e);

	firstitem = e.firstVisibleItem;
	Ti.API.log(firstVisibleItemIndex);
	// Ti.App.fireEvent('dataUpdated');

}

// Table Clicks
function tableClick(e) {
	var dataId = e.rowData.dataId;
	// Here we can pick up the custom variable set with Ti.UI.createTableViewRow
	var someRandomVar = e.rowData.someRandomVar;
	Ti.API.log("clicked");
	// All single clicks are just going to open the detail window for this item
	// We pass the tab object to the child controller so if it needed to open a window it has a reference to the parent tab in which to do so
	// Rather than passing $.tabList as a controller arg, we could set: Alloy.Globals.tabList = $.tabList; outside of this function
	// and have the child controller call: Alloy.Globals.tabList.open(someController.getView()) instead of parentTab.open(someController.getView())
	//alert("here");
	var detailController = Alloy.createController('detail', {
		parentTab : $.tabList,
		dataId : dataId
	});

	$.tabList.open(detailController.getView());

	// detailController.getView().open();
}

// Long clicks open the options menu, enabling us to view, delete, or cancel the row item
function tableLongPress(e) {
	var dataId = e.rowData.dataId;

	var dialog = Ti.UI.createOptionDialog({
		options : ['View', 'Delete', 'Cancel'],
		cancel : 2,
		destructive : 1,
		persistent : false,
		dataId : dataId
	});

	// Handle clicks on our dialog menu itself
	dialog.addEventListener('click', function(e) {
		var index = e.index;
		var dataId = e.source.dataId;

		// View option selected
		if (dataId !== '' && index === 0) {
			var detailController = Alloy.createController('detail', {
				parentTab : $.tabList,
				dataId : dataId
			});
			$.tabList.open(detailController.getView());

		} else if (dataId !== '' && index === 1) {
			// Delete option selected
			// Checking for !== '' specifically as dataId in this case could be 0 - array key 1st position
			var AppData = require('data');
			AppData.deleteItem(dataId);
			Ti.App.fireEvent('dataUpdated');
		}

		// Tidy up our dialog
		// Need to look into comparing performance of this approach (rebuilding dialog each time)
		// Vs creating a single dialog and reusing it each time (changing the dataId)
		dialog.hide();
		dialog = null;
	});

	// Open it
	dialog.show();
}

// Menu Clicks
function openAddItem() {
	// We aren't adding the function to add rows
	// Otherwise this would open a "create" controller like how detail is created in dialog above
	// Create would have a form, which if valid, push the data to an "AppData.addItem(dataObject);"
	// And then close the window and trigger the redrawing of the data table
	// $.create.close(); Ti.App.fireEvent('dataUpdated');
	//alert('Not Implemented');
	var loginController = Alloy.createController('login', {
		parentTab : $.tabList
	});
	$.tabList.open(loginController.getView());

}

//
// Navigation
//

// Android
if (OS_ANDROID) {
	$.list.addEventListener('focus', function() {
		if ($.list.activity) {
			var activity = $.list.activity;

			// Menu
			//activity.invalidateOptionsMenu();
			activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				var menuItem1 = menu.add({
					title : L('addItem', 'Login'),
					// http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.MenuItem
					// Menu items can be all hidden, shown if space available, forced to show all times
					showAsAction : Ti.Android.SHOW_AS_ACTION_NEVER
				});
				menuItem1.addEventListener('click', openAddItem);
			};

			//activity.actionBar.title = "dddd";
			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('detail', 'Live Briefs');
				activity.actionBar.displayHomeAsUp = true;
				activity.actionBar.backgroundImage = "/images/NavBG.jpg";
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
}

// iOS
if (OS_IOS) {
	//alert(Ti.App.Properties.getString("userid"));
	//Ti.App.Properties.removeProperty("userid");
	/*
	 var btnRightNav = Ti.UI.createButton({
	 title : L('addItem', 'Login'),
	 color: 'black'
	 });
	 */

	var btnRightNav = Ti.UI.createButton({
		backgroundColor : '#000000',
		borderColor : '#1c1d1c',
		borderRadius : 6,
		color : '#ffffff',
		borderWidth : '2',
		height : 25,
		font : {
			size : 9,
			fontWeight : 'bold'
		},
		width : 50,
		backgroundImage : 'none',
		title : 'Login'
	});

	btnRightNav.addEventListener('click', openAddItem);
	//$.list.rightNavButton = btnRightNav;

	////

	var menuButton = Ti.UI.createButton({
		backgroundImage : "/images/settings.png",
		height : 24,
		width : 24,
		toggle : false // Custom property for menu toggle
	});

	$.list.setLeftNavButton(menuButton);

	menuButton.addEventListener('click', function(e) {
		// If the menu is opened
		var menuController = Alloy.createController('menu', {
			parentTab : $.tabList
		});
		// As detail controller will only be opened from this list controller, which will call an open() method on it
		// there is no need in the detail.js controller to call $.detail.open();

		$.tabList.open(menuController.getView());

	});

} else {

}

if (OS_IOS) {
	var deviceToken = null;
/*
	Ti.Network.registerForPushNotifications({
		types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_ALERT, Ti.Network.NOTIFICATION_TYPE_SOUND],
		success : deviceTokenSuccess,
		error : deviceTokenError,
		callback : receivePush
	});
*/

if (Ti.Platform.name == "iPhone OS" && parseInt(Ti.Platform.version.split(".")[0]) >= 8) {

	//alert("ios 8 and above");	
	// Wait for user settings to be registered before registering for push notifications
    Ti.App.iOS.addEventListener('usernotificationsettings', function registerForPush() {
 
        // Remove event listener once registered for push notifications
        Ti.App.iOS.removeEventListener('usernotificationsettings', registerForPush); 
 
        Ti.Network.registerForPushNotifications({
            success: deviceTokenSuccess,
            error: deviceTokenError,
            callback: receivePush
        });
    });
 
    // Register notification types to use
    Ti.App.iOS.registerUserNotificationSettings({
	    types: [
            Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_SOUND,
            Ti.App.iOS.USER_NOTIFICATION_TYPE_BADGE
        ]
    });
} else {
    Ti.Network.registerForPushNotifications({
        // Specifies which notifications to receive
        types: [
            Ti.Network.NOTIFICATION_TYPE_BADGE,
            Ti.Network.NOTIFICATION_TYPE_ALERT,
            Ti.Network.NOTIFICATION_TYPE_SOUND
        ],
        success: deviceTokenSuccess,
        error: deviceTokenError,
        callback: receivePush
    });
}
	
	// Process incoming push notifications
	function receivePush(e) {

		//    alert('Received push: ' + JSON.stringify(e));

		//var title = JSON.stringify(e)
		var title = e.data;

		//alert(title.id);
		//alert(title.alert);

		//var title = JSON.parse(e.payload);

		//var title = JSON.parse(e.payload);

		//alert(title.id);

		//var badgenum = Titanium.UI.iPhone.appBadge;
		//badgenum--;
		//Ti.UI.iPhone.setAppBadge(parseInt(badgenum));
		//alert(Ti.UI.iPhone.appBadge);

		Ti.UI.iPhone.appBadge = 1;
		Ti.UI.iPhone.appBadge = 0;

		rss.loadRssFeed({
			success : function(dataStore) {

				for (var i = 0; i < dataStore.length; i++) {
					if (title.id == dataStore[i].id) {

						var detailController = Alloy.createController('detail', {
							parentTab : $.tabList,
							dataId : i
						});

						$.tabList.open(detailController.getView());
						break;
					}
				}
			}
		});
		//alert("badge"+Titanium.UI.iPhone.appBadge);

		//Titanium.UI.iPhone.appBadge = badgenum;
		//title.badge = 0;

		// As detail controller will only be opened from this list controller, which will call an open() method on it
		// there is no need in the detail.js controller to call $.detail.open();

		//$.tabGroup.open();

		//$.tabGroup.open(detailController.getView());

	}

	// Save the device token for subsequent API calls
	function deviceTokenSuccess(e) {
		console.log("inside success");
		deviceToken = e.deviceToken;
		//Ti.API.info(deviceToken);
		//alert(deviceToken);
		subscribeToChannel();
	}

	function deviceTokenError(e) {
		alert('Failed to register for push notifications! ' + e.error);
	}



var Cloud = require("ti.cloud");
function subscribeToChannel() {
	// Subscribes the device to the 'test' channel
	// Specify the push type as either 'android' for Android or 'ios' for iOS
	Titanium.App.Properties.setString("token", deviceToken);
	Cloud.PushNotifications.subscribeToken({
		device_token : deviceToken,
		channel : 'test',
		type : Ti.Platform.name == 'android' ? 'android' : 'ios'
	}, function(e) {
		if (e.success) {
			//alert('Subscribed');
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}

}
