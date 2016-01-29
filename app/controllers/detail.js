//
// Check for expected controller args
//
var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';
var login = args.login || "";
var AppData = require('rss');
var dataItem = AppData.getItem(dataId);

//$.detail.title = ;
$.detail.navTintColor = "white";
//$.detail.ba

	if (login != "login") {
		//$.detail.backButtonTitle = L('backText', 'Back');
		//$.detail.backButtonTitleImage = "/images/back2.png";
	var ButtonRetour = Ti.UI.createButton({
    	backgroundImage:'/images/back1.png',
    	height :24,
    	width : 24           	
	});          
		ButtonRetour.addEventListener('click', function(){
		    $.detail.close();
		});	   
 	$.detail.leftNavButton = ButtonRetour;
		
		
	} else {

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
			title : 'List'
		});

		$.detail.setLeftNavButton(btnRightNav);

		btnRightNav.addEventListener('click', function(e) {
			// If the menu is opened
			var menuController = Alloy.createController('index', {
				parentTab : parentTab
			});
			// As detail controller will only be opened from this list controller, which will call an open() method on it
			// there is no need in the detail.js controller to call $.detail.open();

			parentTab.open(menuController.getView());

		});

	}

	// curernt - $.detail.barImage ="images/NavBG.jpg";
	$.detail.tabBarHidden = true;


$.detail.titleControl = Ti.UI.createLabel({
    text : dataItem.brand,
    font : {
        fontSize : 18,
        fontWeight : "Bold",
        fontFamily : 'Helvetica'
    },
    color : 'white'
});



//$.detail.barColor = "#15699c";
//$.detail.barImage = "/images/NavBG_44.jpg";
//$.detail.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.detail.barColor = "#014a69";


/*
$.detail.titleControl = Ti.UI.createLabel({
text : dataItem.brand,
color : 'white'
});
*/
//$.tabGroup.close();

//
// The list controller "shouldn't" call detail unless it has an id it is going to pass it in the first place
// Just double check we got it anyway and do nothing if we didn't
//
	var scrollView = Ti.UI.createScrollView({
		top : 50,
		contentWidth : 'auto',
		contentHeight : 'auto',
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : true,
		height : '100%',
		left : 1,
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
		top:0,
		width : 'auto',
		height : 'auto',
		left:1,
		layout : 'vertical',
		backgroundColor : "#f0ede4"
	});


	$.detail.add(self1);
	$.detail.add(scrollView);
	scrollView.add(self);
	//$.detail.add(imgView);

var widthDps;
	var heightDps;
	var imageHeight;
	var spacer;
	var width;
	var height;
	var totalwidth;

	if (OS_IOS) {

		widthDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.platformWidth));
		widthDps = (0.8 * widthDps );
		heightDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.platformHeight));
		imageHeight = Math.ceil(0.3 * heightDps);
		spacer = Math.floor(Ti.Platform.displayCaps.platformWidth / 3);

		spacerlast = Ti.Platform.displayCaps.platformWidth - (spacer * 3);
		//alert(Ti.Platform.displayCaps.platformWidth + "dd" + spacer + "dd" + spacerlast);
		spacerlast = spacer + spacerlast;
		width = spacer;
		height = 60;
		totalwidth = Titanium.Platform.displayCaps.platformWidth;
		totalwidths = Math.ceil( 0.98 * Titanium.Platform.displayCaps.platformWidth);
	} else {

		Ti.API.log(Titanium.Platform.displayCaps.xdpi);
		Ti.API.log(Titanium.Platform.displayCaps.platformWidth);
		Ti.API.log(Titanium.Platform.displayCaps.logicalDensityFactor);

		pheight = Math.ceil(Titanium.Platform.displayCaps.platformHeight / Titanium.Platform.displayCaps.logicalDensityFactor);
		pwidth = Math.ceil(Titanium.Platform.displayCaps.platformWidth / Titanium.Platform.displayCaps.logicalDensityFactor);

		widthDps = pwidth;
		heightDps = pheight;
		imageHeight = Math.ceil(0.3 * heightDps);
		spacer = Math.round(pwidth / 3);
		width = spacer;
		height = 50;
		totalwidth = pwidth;

		/*
		widthDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.xdpi));
		heightDps = ( Math.ceil(0.98 * Titanium.Platform.displayCaps.ydpi));
		imageHeight = Math.ceil(0.5 * heightDps);
		totalwidth = Math.ceil( 0.98 * Titanium.Platform.displayCaps.xdpi);
		spacer = Math.ceil( totalwidth / 3.5 );
		width = spacer;
		height = 50;
		*/
		//Ti.APi.info(width);

	}



if (dataId !== '') {
	//
	// Fetch data row and assign title value to the label/window title (nothing else!)
	//

	//var AppData = require('data');
	//var dataItem = AppData.getItem(dataId);

	

		var tabBar = Ti.UI.createView({
		width : totalwidth,
		height : 50,
		top: 0,
		left : 0,
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

	tab1.add(rright);
	tab1.add(right);
	

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

	tab2.add(rright1);
	tab2.add(right1);
	

	tabBar.add(tab2);
	// TAB 3
	var tab3 = Ti.UI.createView({
		width : spacerlast,
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

	tab1.addEventListener('click', function() {

		/*
		 currTab.backgroundColor = '#000';
		 currTab.children[0].color = '#FFF';
		 this.backgroundColor = '#600000';
		 this.children[0].color = '#FFF';
		 */

		this.remove(bottom1);
		currTab.children[0].color = '#cccccc';
		currTab = this;
		this.children[0].color = "#fab101";
		//this.children[0].color = '#fab101';
		this.add(bottom1);

		self.removeAllChildren();

		var logoview = Ti.UI.createView({
			backgroundColor : '#FFF',
			height : imageHeight,
			width : totalwidths,
			left : 1
		});
		
		self.add(logoview);

		var imgView = Titanium.UI.createImageView({
			image : dataItem.logourl,
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE
		});

		logoview.add(imgView);

		var l1 = Titanium.UI.createLabel({
			text : dataItem.event,
			color : '#000',
			top : 10,
			font : {
				fontFamily : 'Helvetica',
				fontSize : 24
			},
			left : 15,
			right : 15,
			height : 'auto'
		});
		self.add(l1);

		var l2height = imageHeight + 20;

		var desc = dataItem.desc;
/*		
		desc = desc.replace(/&amp;/g, '&');
		desc = desc.replace(/&nbsp;/g, ' ');
		desc = desc.replace(/&quot;/g, '"');
		desc = desc.replace(/&apos;/g, "'");
		desc = desc.replace(/&rsquo;/g, "'");
		desc = desc.replace(/&lsquo;/g, "'");
		desc = desc.replace(/&ndash;/g, "-");
		desc = desc.replace(/&hellip;/g, "...");
*/
		var l2 = Titanium.UI.createLabel({
			text : desc,
			color : '#000',
			font : {
				fontFamily : 'Helvetica',
				fontSize : 16
			},
			left : 15,
			right : 15,
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

		var deadline = Titanium.UI.createLabel({
			text : dataItem.deadline,
			color : '#000',
			top : 10,
			font : {
				fontFamily : 'HelveticaNeue',
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
			image : "images/brief.png",
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

		var briefdownloadView = Titanium.UI.createImageView({
			image : "images/briefdownload.png",
			width : 64,
			top : -44,
			right : 1,
			bottom : 40,
			height : 64
		});

		self.add(briefdownloadView);

		briefdownloadView.addEventListener('click', function(e) {

			if (Ti.App.Properties.getString("userid") != null) {
				if (OS_IOS) {
					self.removeAllChildren();
				}
				var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
				var webview = Titanium.UI.createWebView({
					url : url,
					canGoBack : true,
				});
				self.add(webview);

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

	});

	tab2.addEventListener('click', function() {

		scrollView.scrollTo(0, 0);

		/*
		 currTab.backgroundColor = '#000';
		 currTab.children[0].color = '#FFF';
		 this.backgroundColor = '#600000';
		 this.children[0].color = '#FFF';
		 */

		this.remove(bottom1);
		
		currTab.children[0].color = '#cccccc';
		currTab = this;
		this.children[0].color = "#fab101";
		
		this.add(bottom1);

		self.removeAllChildren();

		/*
		var square = Ti.UI.createView({
		top:180,
		backgroundColor:'#296EC1',
		height:50,
		width:400
		});

		var prizeBtn = Titanium.UI.createButton({
		title : dataItem.prize,
		top : 10,
		width : 300,
		color: '#ffffff',
		height : 35,
		borderRadius : 10,
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
		backgroundGradient: {
		type: "linear",
		startPoint: { x: "0%", y:"0%"},
		endPoint:   { x: "0%", y:"100%"},
		backFillStart:false,
		colors: [
		{ color: "#2b9dd3", offset: 0.0 },
		{ color: "#15699c", offset: 1.0 }
		]
		},
		font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
		}
		});

		self.add(prizeBtn);
		*/
		//scrollView.scrollTo(width,width);
		var prizeview = Titanium.UI.createView({
			width : 300,
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

		self.add(prizeview);

		var prizes = dataItem.pstruct.split(",");

		var l1 = Titanium.UI.createLabel({
			top : 5,
			text : "Grand Prize",
			color : "white",
			font : {
				fontFamily : 'HelveticaNeue-Medium',
				fontSize : 16
			}

		});
		var l2 = Titanium.UI.createLabel({
			text : "$" + prizes[0],
			color : "white",
			font : {
				fontFamily : 'HelveticaNeue-Light',
				fontSize : 20
			}

		});
		var l3 = Titanium.UI.createLabel({
			text : "Round Trip travel for two people",
			color : "white",
			font : {
				fontFamily : 'HelveticaNeue-Light',
				fontSize : 16
			}

		});
		prizeview.add(l1);
		prizeview.add(l2);
		prizeview.add(l3);

		var tlen = 40 * (prizes.length - 1 );

		var tableRecords = Ti.UI.createTableView({
			backgroundColor : "#262626",
			separatorColor : "#666666",
			height : tlen,
			width : 300,
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

		self.add(tableRecords);

		/*
		var l1 = Titanium.UI.createLabel({
		text : "Grand Prize",
		color : "white"
		});
		var l2 = Titanium.UI.createLabel({
		text : "$8000",
		color : "white"
		});
		var l3 = Titanium.UI.createLabel({
		text : "Round Trip travel for two people",
		color : "white"
		});
		prizeview.add(l1);
		prizeview.add(l2);
		prizeview.add(l3);

		var otherprize = Titanium.UI.createView({
		width : 300,
		height : 200,
		top : 10,
		backgroundColor : "black",
		font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
		}

		});

		self.add(otherprize);

		var l4 = Titanium.UI.createLabel({
		text : "2nd Prize",
		color : "white",
		top : 0,
		left : 5,
		height : 50
		});

		var l14 = Titanium.UI.createLabel({
		text : "$4000",
		color : "yellow",
		top : 0,
		right : 5,
		height : 50

		});

		var line1 = Ti.UI.createView({
		height : '1',
		width : 300,
		left : 0,
		right : 0,
		top : 50,
		backgroundColor : "white"
		});

		var l5 = Titanium.UI.createLabel({
		text : "3rd Prize",
		color : "white",
		left : 5,
		top : 52,
		height : 50
		});

		var l15 = Titanium.UI.createLabel({
		text : "$2000",
		color : "yellow",
		top : 52,
		right : 5,
		height : 50
		});

		var line2 = Ti.UI.createView({
		height : '1',
		width : 300,
		left : 0,
		right : 0,
		top : 100,
		backgroundColor : "white"
		});

		var l6 = Titanium.UI.createLabel({
		text : "4th Prize",
		color : "white",
		top : 102,
		left : 5,
		height : 50
		});

		var l16 = Titanium.UI.createLabel({
		text : "$1000",
		color : "yellow",
		top : 102,
		right : 5,
		height : 50,
		});

		var line3 = Ti.UI.createView({
		height : '1',
		width : 300,
		left : 0,
		right : 0,
		top : 150,
		backgroundColor : "white"
		});

		var l7 = Titanium.UI.createLabel({
		text : "5th Prize",
		color : "white",
		top : 152,
		left : 5,
		height : 50,
		});
		var l17 = Titanium.UI.createLabel({
		text : "$1000",
		color : "yellow",
		top : 152,
		right : 5,
		height : 50
		});

		otherprize.add(l4);
		otherprize.add(line1);
		otherprize.add(l5);
		otherprize.add(line2);
		otherprize.add(l6);
		otherprize.add(line3);
		otherprize.add(l7);

		otherprize.add(l14);
		otherprize.add(l15);
		otherprize.add(l16);
		otherprize.add(l17);
		*/
		//var prizestructure =  "ddadsdasdas d                      \n\r  dadsadasdas dasdasdsa";
		/*
		 var l3 = Titanium.UI.createLabel({
		 text : 'Grand Prize  \n  $8000 \n Round trip travel for two people',
		 width : 300,
		 height : 60,
		 top : 10,
		 textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		 borderRadius : 10,
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
		 fontFamily : 'Arial',
		 fontWeight : 'bold',
		 fontSize : 14
		 }

		 });

		 self.add(l3);
		 */
	});

	tab3.addEventListener('click', function() {

		self.removeAllChildren();

		scrollView.scrollTo(0, 0);

		/*
		 currTab.backgroundColor = '#000';
		 currTab.children[0].color = '#FFF';
		 this.backgroundColor = '#600000';
		 this.children[0].color = '#FFF';
		 */

		this.remove(bottom1);
		currTab.children[0].color = '#cccccc';
		currTab = this;
		this.children[0].color = "#fab101";
		this.add(bottom1);

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
			image : "images/brief.png",
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

		var briefdownloadView = Titanium.UI.createImageView({
			image : "images/briefdownload.png",
			width : 64,
			top : -44,
			right : 1,
			bottom : 40,
			height : 64
		});

		self.add(briefdownloadView);
		
		var ButtonRetour = Ti.UI.createButton({
		title : "Terms and Conditions",
		backgroundColor : "white",
		borderRadius: 20,
		color : "#808080",
		borderWidth : 1,
		borderColor : "grey",
		height : 50,
		width : 200
		});          
		ButtonRetour.addEventListener('click', function(){
		   // $.menu.close();
		   
		   
		var controller = Alloy.createController('term');
		var win = controller.getView();
		
		var termevent = dataItem.event;
		termevent = termevent.replace(/ /g, "-");
		var termbrand = dataItem.brand;
		termbrand = termbrand.replace(/ /g, "-");
		
		controller.setArticle("https://mofilm.com/competitions/terms/" + termevent + "/" + termbrand);
		parentTab.open(controller.getView());
		   
		   
		});	   
		self.add(ButtonRetour);
		
		var detailBtn = Titanium.UI.createButton({
			title : 'Download Brief',
			top : 10,
			width : 300,
			color : '#ffffff',
			height : 60,
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
				fontFamily : 'Arial',
				fontWeight : 'bold',
				fontSize : 14
			}
		});
		//self.add(detailBtn);

		briefdownloadView.addEventListener('click', function(e) {

			//		Ti.App.Properties.removeProperty("userid");
			if (Ti.App.Properties.getString("userid") != null) {
				//currTab.backgroundColor = '#000';
				//currTab.children[0].color = '#FFF';
				//this.backgroundColor = '#600000';
				//this.children[0].color = '#FFF';
				//currTab = this;

				if (OS_IOS) {
					self.removeAllChildren();
				}

				var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
				/*
				 var json;

				 var xhr = Ti.Network.createHTTPClient({
				 onload: function() {
				 // parse the retrieved data, turning it into a JavaScript object
				 json = JSON.parse(this.responseText);
				 alert(json.link);
				 if (OS_ANDROID) {
				 var webview = Titanium.UI.createWebView({
				 url : 'http://docs.google.com/viewer?embedded=true&url='+url,
				 canGoBack : true,
				 });
				 self.add(webview);
				 } else {
				 var webview = Titanium.UI.createWebView({
				 url : url,
				 canGoBack : true,
				 });
				 self.add(webview);
				 }

				 }
				 });

				 xhr.open("POST", url);
				 var params = {
				 };
				 xhr.send(params);
				 */
				if (OS_ANDROID) {

					var downloaduri = "http://scripts.mofilmmusic.com/cvent-Brief_syd_final.pdf";

					Titanium.Platform.openURL(url + "/.pdf");

					/*
					 Titanium.Platform.openURL(url);
					 var webview = Titanium.UI.createWebView({
					 url : 'http://docs.google.com/viewer?embedded=true&url=' + url,
					 canGoBack : true,
					 });
					 self.add(webview);
					 */
					/*
					 try {
					 var f = Ti.Filesystem.getFile("your.pdf");
					 Ti.Android.currentActivity.startActivity(Ti.Android.createIntent({
					 action: Ti.Android.ACTION_VIEW,
					 type: 'application/pdf',
					 data: f.getNativePath()
					 }));
					 }
					 catch (err) {
					 var alertDialog = Titanium.UI.createAlertDialog({
					 title: 'No PDF Viewer',
					 message: 'We tried to open a PDF but failed. Do you want to search the marketplace for a PDF viewer?',
					 buttonNames: ['Yes','No'],
					 cancel: 1
					 });
					 alertDialog.show();
					 alertDialog.addEventListener('click', function(evt) {
					 if (evt.index == 0) {
					 Ti.Platform.openURL(url);
					 }
					 });
					 }
					 */
					/*
					 var webview = Titanium.UI.createWebView({
					 url : url,
					 canGoBack : true,
					 });
					 self.add(webview);
					 */
					/*
					 var webview = Titanium.UI.createWebView({
					 url : 'http://docs.google.com/viewer?embedded=true&url='+url,
					 canGoBack : true,
					 });
					 self.add(webview);
					 */
				} else {
					var webview = Titanium.UI.createWebView({
						url : url,
						canGoBack : true,
					});
					self.add(webview);
				}

				// var window = Titanium.UI.createWindow();
				// window.add(webview);
				//window.open({modal:true});

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

	});

	//////

	/*
	var bb1 = Titanium.UI.createButtonBar({
	labels : ['One', 'Two', 'Three'],
	backgroundColor : '#336699',
	top : 50,
	style : Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height : 25,
	width : 300
	});
	self.add(bb1);
	*/
	/*
	var view = Ti.UI.createView({
	width: 400,
	height: 300
	});
	self.add(view);

	var img = Ti.UI.createImageView({
	width: 400,
	height: 300,
	image: dataItem.banner
	});
	view.add(img);
	*/


	var logoview = Ti.UI.createView({
			backgroundColor : '#FFF',
			top: 2,
			height : imageHeight,
			width : totalwidths,
			left : 1,
		});
		
		self.add(logoview);

	var imgView = Titanium.UI.createImageView({
		image : dataItem.logourl,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE
	});

	logoview.add(imgView);

	var l1 = Titanium.UI.createLabel({
		text : dataItem.event,
		color : '#000',
		top : 10,
		font : {
			fontFamily : 'HelveticaNeue-CondensedBold',
			fontSize : 24
		},
		left : 15,
		right : 15,
		height : 'auto'
	});
	self.add(l1);

	var l2height = imageHeight + 20;

	var desc = dataItem.desc;
/*	
	desc = desc.replace(/&amp;/g, '&');
	desc = desc.replace(/&nbsp;/g, ' ');
	desc = desc.replace(/&quot;/g, '"');
	desc = desc.replace(/&apos;/g, "'");
	desc = desc.replace(/&rsquo;/g, "'");
	desc = desc.replace(/&lsquo;/g, "'");
	desc = desc.replace(/&ndash;/g, "-");
	desc = desc.replace(/&hellip;/g, "...");
*/
	var l2 = Titanium.UI.createLabel({
		text : desc,
		color : '#000',
		font : {
			fontFamily : 'Helvetica',
			fontSize : 16
		},
		left : 15,
		right : 15,
		bottom : 10,
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
		image : "images/brief.png",
		left : 5,
		bottom :4,
		width : 64,
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

	var briefdownloadView = Titanium.UI.createImageView({
		image : "images/briefdownload.png",
		width : 64,
		top : -44,
		right : 1,
		bottom : 50,
		height : 64
	});

	self.add(briefdownloadView);

	briefdownloadView.addEventListener('click', function(e) {

		if (Ti.App.Properties.getString("userid") != null) {
			if (OS_IOS) {
				self.removeAllChildren();
			}
			var url = "http://api.mofilm.com/user/brief/" + dataItem.hash;
			var webview = Titanium.UI.createWebView({
				url : url,
				canGoBack : true,
			});
			self.add(webview);

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

}