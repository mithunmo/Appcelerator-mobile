//var AppData = require('data');

//if (! AppData.isLoggedIn()) {
//var loginController = Alloy.createController('login');
//} else {

var args = arguments[0] || {};
Alloy.Globals.add = args.add || 'def';

//alert(Alloy.Globals.add);

Alloy.Globals.tabGroup = $.tabGroup;
var deviceToken = null;



//$.tabGroup.removeTab(1);


//	Ti.API.log("ddddd");

//
// Navigation
// Push

////
// Android
if (OS_ANDROID) {
	$.tabGroup.addEventListener('open', function() {
		if ($.tabGroup.activity) {
			var activity = $.tabGroup.activity;

			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				activity.actionBar.title = L('appTitle', 'MOFILM');
				activity.actionBar.backgroundImage = "/images/NavBG.jpg";
			}
		}
	});

	// Back Button
	$.tabGroup.addEventListener('android:back', function() {
		var activity = Ti.Android.currentActivity;
		activity.finish();
	});
}


if (OS_IOS) {

	//var AppData = require('data');
	//var dataStore = AppData.getAll();
	//var listController = Alloy.createController('list', {}).getView();
	//listController.open();
	//$.tabGroup.
	$.tabGroup.open();
	//$.tabGroup.add = add;
	$.tabGroup.setActiveTab(1);
	
} else {
	var listController = Alloy.createController('aaalist', {}).getView();
	listController.open();
}


//}