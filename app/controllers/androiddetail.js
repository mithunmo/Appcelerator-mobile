//
// Check for expected controller args
//

var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';
var name = args.name || "";
var login = args.login || "";

var rss = require('rss');
var dataItem = rss.getItem(dataId);

$.detail.title = dataItem.brand;

var scrollView = Ti.UI.createScrollView({
	top : 50,
	contentWidth : 'auto',
	contentHeight : 'auto',
	showVerticalScrollIndicator : true,
	height : '100%',
	width : '100%'
});

var self1 = Ti.UI.createView({
	backgroundColor : '#f0ede4',
	top : 0,
	width : 'auto',
	height : 'auto',
	layout : 'vertical'
});

var self = Ti.UI.createView({
	backgroundColor : '#f0ede4',
	width : 'auto',
	height : 'auto',
	layout : 'vertical',
	backgroundColor : "#f0ede4"
});

var widthDps;
var heightDps;
var imageHeight;
var spacer;
var width;
var height;
var totalwidth;
var totalgap;

if (OS_IOS) {

	widthDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.platformWidth));
	heightDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.platformHeight));
	imageHeight = Math.ceil(0.3 * heightDps);
	spacer = Math.round(Ti.Platform.displayCaps.platformWidth / 3);
	width = spacer;
	height = 50;
	totalwidth = Math.ceil(0.98 * Titanium.Platform.displayCaps.platformWidth);

} else {

	pheight = Math.ceil(Titanium.Platform.displayCaps.platformHeight / Titanium.Platform.displayCaps.logicalDensityFactor);
	pwidth = Math.ceil(Titanium.Platform.displayCaps.platformWidth / Titanium.Platform.displayCaps.logicalDensityFactor);

	widthDps = Math.ceil(0.7 * pwidth);
	heightDps = pheight;
	imageHeight = Math.ceil(0.3 * heightDps);
	spacer = Math.round(pwidth / 3);
	width = spacer;
	height = 60;
	totalwidth = pwidth;

}
var tabBar = Ti.UI.createView({
	width : totalwidth,
	height : 50,
	left : 0,
	bottom : 0,
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
			color : "#333333",
			offset : 0.0
		}, {
			color : "#1b1b1b",
			offset : 1.0
		}]
	}

});
self1.add(tabBar);

var tab1 = Ti.UI.createView({
	width : width,
	height : height,
	left : 0,
	bottom : 0,
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
			color : "#333333",
			offset : 0.0
		}, {
			color : "#1b1b1b",
			offset : 1.0
		}]
	},

	borderRadius : 2
});

var tab1Label = Ti.UI.createLabel({
	text : 'Home',
	color : '#fab101',
	font : {
		fontFamily : 'HelveticaNeue-Medium',
		fontSize : 16
	}
});
tab1.add(tab1Label);

var right = Ti.UI.createView({
	width : '1',
	height : '60',
	right : 0,
	backgroundColor : "#333333"
});
var rright = Ti.UI.createView({
	width : '1',
	height : '60',
	right : 1,
	backgroundColor : "#000"
});

tab1.add(right);
tab1.add(rright);

var bottom1 = Ti.UI.createView({
	height : '4',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : "#fab101"
});
tab1.add(bottom1);
tabBar.add(tab1);
// TAB 2
var tab2 = Ti.UI.createView({
	width : width,
	height : height,
	left : spacer,
	bottom : 0,
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
			color : "#333333",
			offset : 0.0
		}, {
			color : "#1b1b1b",
			offset : 1.0
		}]
	}

});

var tab2Label = Ti.UI.createLabel({
	text : 'Prize',
	color : '#cccccc',
	font : {
		fontFamily : 'HelveticaNeue-Medium',
		fontSize : 16
	}
});
tab2.add(tab2Label);

var right1 = Ti.UI.createView({
	width : '1',
	height : '60',
	right : 0,
	backgroundColor : "#333333"
});
var rright1 = Ti.UI.createView({
	width : '1',
	height : '60',
	right : 1,
	backgroundColor : "#000"
});

tab2.add(right1);
tab2.add(rright1);

tabBar.add(tab2);
// TAB 3
var tab3 = Ti.UI.createView({
	width : width,
	height : height,
	left : (spacer * 2),
	bottom : 0,
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
			color : "#333333",
			offset : 0.0
		}, {
			color : "#1b1b1b",
			offset : 1.0
		}]
	}

});

var tab3Label = Ti.UI.createLabel({
	text : 'Brief',
	color : '#cccccc',
	font : {
		fontFamily : 'HelveticaNeue-Medium',
		fontSize : 16
	}
});
tab3.add(tab3Label);

tabBar.add(tab3);

var currTab = tab1;

scrollView.add(self);
$.detail.add(self1);
$.detail.add(scrollView);

	var firstview = Ti.UI.createView({
		backgroundColor : '#f0ede4',
		width : 'auto',
		height : 'auto',
		layout : 'vertical',
		backgroundColor : "#f0ede4"
	});

var briefdownloadView = Titanium.UI.createImageView({
	image : "/images/briefdownload.png",
	width : 64,
	top : -44,
	right : 1,
	bottom : 50,
	height : 64
});

var logoview = Ti.UI.createView({
	backgroundColor : '#FFF',
	height : imageHeight,
	width : totalwidth,
	left : 1,
	right : 1
});

var imgView = Titanium.UI.createImageView({
	backgroundColor : "#f0ede4",
	width : widthDps,
	height : imageHeight
});

var l1 = Titanium.UI.createLabel({
	color : '#000',
	font : {
		fontFamily : 'Helvetica',
		fontSize : 24
	},
	top : 10,
	left : 15,
	right : 15,
	height : 'auto'
});

var l2height = imageHeight + 20;

var l2 = Titanium.UI.createLabel({
	color : '#000',
	font : {
		fontFamily : 'Helvetica',
		fontSize : 16
	},
	left : 15,
	right : 15,
	bottom : 20,
	height : 'auto',
});

///

var deadlinetext = Titanium.UI.createLabel({
	text : "Submission Deadline",
	color : '#000',
	font : {
		fontFamily : 'HelveticaNeue-CondensedBold',
		fontSize : 24
	},
	left : 15,
	right : 15,
	height : 'auto'
});

var line = Ti.UI.createView({
	height : '1',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : "#808080"
});

var wline = Ti.UI.createView({
	height : '1',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : "white"
});

//var deadlineDate = dataItem.deadline.toUpperCase();
var deadline = Titanium.UI.createLabel({
	color : '#000',
	top : 10,
	font : {
		fontFamily : 'HelveticaNeue-Light',
		fontSize : 26
	},
	height : 'auto'
});

var btext = Titanium.UI.createLabel({
	text : "Brief",
	color : '#000',
	font : {
		fontFamily : 'HelveticaNeue-CondensedBold',
		fontSize : 24
	},
	top : 10,
	left : 15,
	right : 15,
	height : 'auto'
});

var bline = Ti.UI.createView({
	height : '1',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : "#808080"
});

var wwline = Ti.UI.createView({
	height : '1',
	left : 0,
	right : 0,
	bottom : 0,
	backgroundColor : "white"
});

var briefView = Titanium.UI.createImageView({
	image : "/images/brief.png",
	width : 64,
	left : 5,
	height : 64
});

var textBrief = Titanium.UI.createLabel({
	text : "Download Brief",
	color : '#000',
	top : -42,
	left : 80,
	font : {
		fontFamily : 'HelveticaNeue',
		fontSize : 18
	},
	height : 'auto'
});

// Event listerns
tab1.addEventListener('click', function() {

	this.remove(bottom1);
	currTab.children[0].color = '#cccccc';
	currTab = this;
	this.children[0].color = "#fab101";
	this.add(bottom1);

	self.removeAllChildren();

/*
	var logoview = Ti.UI.createView({
		backgroundColor : '#FFF',
		height : imageHeight,
		width : totalwidth,
		left : 1,
		right : 1
	});

	self.add(logoview);

	var imgView = Titanium.UI.createImageView({
		image : dataItem.logourl,
		width : widthDps,
		height : imageHeight
	});

	logoview.add(imgView);

	var l1 = Titanium.UI.createLabel({
		text : dataItem.event,
		color : '#000',
		font : {
			fontFamily : 'HelveticaNeue-CondensedBold',
			fontSize : 24
		},
		top : 10,
		left : 15,
		right : 15,
		height : 'auto'
	});
	self.add(l1);

	var l2height = imageHeight + 20;

	var desc = dataItem.desc;
	var l2 = Titanium.UI.createLabel({
		text : desc,
		color : '#000',
		font : {
			fontFamily : 'HelveticaNeue-Light',
			fontSize : 16
		},
		left : 15,
		right : 15,
		bottom : 20,
		height : 'auto',
	});

	self.add(l2);

	var deadlinetext = Titanium.UI.createLabel({
		text : "Submission Deadline",
		color : '#000',
		font : {
			fontFamily : 'HelveticaNeue-CondensedBold',
			fontSize : 24
		},
		left : 15,
		right : 15,
		height : 'auto'
	});
	self.add(deadlinetext);

	var line = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "#808080"
	});

	var wline = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "white"
	});

	self.add(line);
	self.add(wline);

	var deadlineDate = dataItem.deadline.toUpperCase();
	var deadline = Titanium.UI.createLabel({
		text : deadlineDate,
		color : '#000',
		top : 10,
		font : {
			fontFamily : 'HelveticaNeue-Light',
			fontSize : 26
		},
		height : 'auto'
	});
	self.add(deadline);

	var btext = Titanium.UI.createLabel({
		text : "Brief",
		color : '#000',
		font : {
			fontFamily : 'HelveticaNeue-CondensedBold',
			fontSize : 24
		},
		top : 10,
		left : 15,
		right : 15,
		height : 'auto'
	});
	self.add(btext);

	var bline = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "#808080"
	});

	var wwline = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "white"
	});

	self.add(bline);
	self.add(wwline);

	var briefView = Titanium.UI.createImageView({
		image : "/images/brief.png",
		width : 64,
		left : 5,
		height : 64
	});

	self.add(briefView);

	var textBrief = Titanium.UI.createLabel({
		text : "Download Brief",
		color : '#000',
		top : -42,
		left : 80,
		font : {
			fontFamily : 'HelveticaNeue',
			fontSize : 18
		},
		height : 'auto'
	});
	self.add(textBrief);

	self.add(briefdownloadView);
	*/
	self.add(firstview);
});


////////// middle view ///


	var middleview = Ti.UI.createView({
		backgroundColor : '#f0ede4',
		width : 'auto',
		height : 'auto',
		layout : 'vertical',
		backgroundColor : "#f0ede4"
	});


	var prizeview = Titanium.UI.createView({
		left : 5,
		right : 5,
		height : 80,
		top : 10,
		layout : "vertical",
		borderRadius : 10,
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
		backgroundColor : "#669933",
		font : {
			fontFamily : 'Arial',
			fontWeight : 'bold',
			fontSize : 14
		}

	});


	var prizes = dataItem.pstruct.split(",");

	var mv1 = Titanium.UI.createLabel({
		text : "Grand Prize",
		color : "white",
		top : 3,
		font : {
			fontFamily : 'HelveticaNeue-Bold',
			fontSize : 16
		}

	});
	var mv2 = Titanium.UI.createLabel({
		text : "$" + prizes[0],
		color : "white",
		font : {
			fontFamily : 'HelveticaNeue-Light',
			fontSize : 20
		}

	});
	var mv3 = Titanium.UI.createLabel({
		text : "Round Trip travel for two people",
		color : "white",
		font : {
			fontFamily : 'HelveticaNeue-Light',
			fontSize : 16
		}

	});
	prizeview.add(mv1);
	prizeview.add(mv2);
	prizeview.add(mv3);

	middleview.add(prizeview);

	var tlen = 40 * (prizes.length - 1 );


	var tableRecords = Ti.UI.createTableView({
		backgroundColor : "#262626",
		separatorColor : "#666666",
		height : tlen,
		left : 5,
		right : 5,
		top : 10

	});

	var recordData = [];

	for ( i = 1; i < prizes.length; i++) {
		ppos = i + 1;
		var ppostext = "";
		if (ppos == 2) {
			ppostext = "2nd";
		} else if (ppos == 3) {
			ppostext = "3rd";
		} else if (ppos >= 4) {
			ppostext = ppos + "th"
		}

		var row = Ti.UI.createTableViewRow({
			height : 40
		});

		var l4 = Titanium.UI.createLabel({
			text : ppostext + " Prize",
			color : "white",
			left : 5,
			font : {
				fontFamily : 'HelveticaNeue-Light',
				fontSize : 16
			}

		});

		var l14 = Titanium.UI.createLabel({
			text : "$" + prizes[i],
			color : "#fab101",
			right : 5,
			font : {
				fontFamily : 'HelveticaNeue-Light',
				fontSize : 20
			}

		});
		row.add(l4);
		row.add(l14);
		recordData.push(row);
	}
	tableRecords.setData(recordData);
	middleview.add(tableRecords);

////////////


tab2.addEventListener('click', function() {	
	//self.remove(firstview);
	//self.remove(middleview);
	//this.remove(bottom1);
	currTab.children[0].color = '#cccccc';
	currTab = this;
	this.children[0].color = "#fab101";
	//this.children[0].color = '#fab101';
	this.add(bottom1);
	self.removeAllChildren();	
	self.add(middleview);

});

	var lastview = Ti.UI.createView({
		backgroundColor : '#f0ede4',
		width : 'auto',
		height : 'auto',
		layout : 'vertical',
		backgroundColor : "#f0ede4"
	});

lastview.add(btext);
lastview.add(bline);
lastview.add(wwline);
lastview.add(briefView);
lastview.add(textBrief);
lastview.add(briefdownloadView);

	var ButtonRetour = Ti.UI.createButton({
		title : "Terms and Conditions",
		backgroundColor : "white",
		borderRadius : 20,
		color : "#808080",
		borderWidth : 1,
		borderColor : "grey",
		height : 50,
		width : 200
	});
	ButtonRetour.addEventListener('click', function() {
		// $.menu.close();
		var controller = Alloy.createController('term');
		var win = controller.getView();

		var termevent = dataItem.event;
		termevent = termevent.replace(/ /g, "-");
		var termbrand = dataItem.brand;
		termbrand = termbrand.replace(/ /g, "-");        	   
		controller.setArticle("https://mofilm.com/competitions/terms/" + termevent + "/" + termbrand);
		//parentTab.open(controller.getView());
		win.open();

	});
	lastview.add(ButtonRetour);



tab3.addEventListener('click', function() {

	self.removeAllChildren();

	this.remove(bottom1);
	currTab.children[0].color = '#cccccc';
	currTab = this;
	this.children[0].color = "#fab101";
	//this.children[0].color = '#fab101';
	this.add(bottom1);
	self.add(lastview)

	//			currTab = this;

/*
	var btext = Titanium.UI.createLabel({
		text : "Brief",
		color : '#000',
		font : {
			fontFamily : 'HelveticaNeue-CondensedBold',
			fontSize : 24
		},
		top : 10,
		left : 15,
		right : 15,
		height : 'auto'
	});

	var bline = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "#808080"
	});

	var wwline = Ti.UI.createView({
		height : '1',
		left : 0,
		right : 0,
		bottom : 0,
		backgroundColor : "white"
	});

	self.add(btext);
	self.add(bline);
	self.add(wwline);
	var briefView = Titanium.UI.createImageView({
		image : "/images/brief.png",
		width : 64,
		left : 5,
		height : 64
	});

	self.add(briefView);

	var textBrief = Titanium.UI.createLabel({
		text : "Download Brief",
		color : '#000',
		top : -42,
		left : 80,
		font : {
			fontFamily : 'HelveticaNeue',
			fontSize : 18
		},
		height : 'auto'
	});
	self.add(textBrief);
	self.add(briefdownloadView);
*/

});

//////
if (dataId !== '') {

	var activityIndicator = Ti.UI.createActivityIndicator({
		color : 'black',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 20,
			fontWeight : 'bold'
		},
		style : Ti.UI.ActivityIndicatorStyle.DARK,
		top : 50,
		height : 20,
		width : Ti.UI.SIZE
	});

	//self.add(activityIndicator);
	firstview.add(activityIndicator);

	//self.add(logoview);
	firstview.add(logoview);	
	imgView.setImage(dataItem.logourl);
	logoview.add(imgView);

	activityIndicator.show();

	setTimeout(loadData, 10);

	function loadData() {

		l1.setText(dataItem.event);

		firstview.add(l1);

		var desc = dataItem.desc;
		l2.setText(desc);

		firstview.add(l2);

		firstview.add(deadlinetext);

		firstview.add(line);
		firstview.add(wline);

		var deadlineDate = dataItem.deadline.toUpperCase();
		deadline.setText(deadlineDate);

		firstview.add(deadline);

		firstview.add(btext);

		firstview.add(bline);
		firstview.add(wwline);

		firstview.add(briefView);

		firstview.add(textBrief);

		firstview.add(briefdownloadView);
		activityIndicator.hide();
		firstview.remove(activityIndicator);
		self.add(firstview);
	}

}

briefdownloadView.addEventListener('click', function(e) {

	if (Ti.App.Properties.getString("userid") != null) {
		if (OS_IOS) {
			self.removeAllChildren();
		}

		var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
		Titanium.Platform.openURL(url + "/" + dataItem.brand + ".pdf");

	} else {
		if (OS_ANDROID) {
			var loginController = Alloy.createController('login', {
				parentTab : parentTab,
				dataId : dataId
			}).getView()
			loginController.open();
			//parentTab.open(loginController.getView());
		} else {
			var loginController = Alloy.createController('login', {
				parentTab : parentTab,
				dataId : dataId
			});
			parentTab.open(loginController.getView());

		}
	}

});

//});

if (OS_ANDROID) {
	$.detail.addEventListener('open', function() {
		if ($.detail.activity) {
			var activity = $.detail.activity;

			// Action Bar
			if (Ti.Platform.Android.API_LEVEL >= 11 && activity.actionBar) {
				//activity.actionBar.title = L('detail', dataItem.brand);
				activity.actionBar.displayHomeAsUp = true;
				//activity.actionBar.backgroundImage = "/images/NavBG_44.jpg";
				activity.actionBar.onHomeIconItemSelected = function() {

					if (login == "login") {
						var listController = Alloy.createController('aaalist', {}).getView();
						listController.open();
						$.detail.close();
						$.detail = null;

					} else {
						$.detail.close();
						$.detail = null;
					}
				};
			}
		}
	});

	// Back Button - not really necessary here - this is the default behaviour anyway?
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

