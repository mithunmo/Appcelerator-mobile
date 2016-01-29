//
// Check for expected controller args
//
var args = arguments[0] || {};
var parentTab = args.parentTab || '';
var dataId = (args.dataId === 0 || args.dataId > 0) ? args.dataId : '';

if ( Titanium.App.Properties.getString("userid") != null) {
	//$.register.remove();
	$.table.deleteRow(0);
} 

$.menu.barColor = "#15699c";
$.menu.titleControl = Ti.UI.createLabel({
    text : "Settings",
    font : {
        fontSize : 18,
        fontWeight : "Bold",
        fontFamily : 'Helvetica'
    },
    color : 'white'
});

$.menu.navTintColor = "white";

//$.menu.barImage = "/images/NavBG_44.jpg";
//$.menu.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;

	$.menu.statusBarStyle =  Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT;
	$.menu.barColor = "#014a69";



if ( Ti.App.Properties.getString("userid") != null ) {
	$.login.setTitle("Logout");
	$.login.id = "logout";
} else {
	$.login.setTitle("Login");
	$.login.id = "login";	
}


/*
var tableRecords = Ti.UI.createTableView({
	backgroundColor : "#f0ede4",
	separatorColor : "#ccc"
});


$.menu.add(tableRecords);

			var recordData = [];


var section = Titanium.UI.createTableViewSection();
section.headerTitle = "Setting";

tableRecords.add(section);

var rowlogin = Ti.UI.createTableViewRow({
	id : "login"
});

var logintext = Ti.UI.createLabel({
	text : "login",
	color : '#000',
	font : {
		fontFamily : 'HelveticaNeue',
		fontSize : 18
	},
	top : 10,
	left : 110,
	height : 'auto'

});

section.add(rowlogin);
rowlogin.add(logintext);

recordData.push(rowlogin);
tableRecords.setData(recordData);


var rowlogout = Ti.UI.createTableViewRow({
	id : "logout"
});


*/

//tableRecords.add(rowlogout);

$.table.addEventListener("click", function(e) {
	//alert(e.rowData.id);
	//e.rowData.backgroundColor = 'blue';

	if (e.rowData.id == "logout") {

		Titanium.App.Properties.setString("userid", null);
		Alloy.Globals.add = "add";
		var detailController = Alloy.createController("index", {
			parentTab : parentTab,
			add : "add"
		});

		parentTab.open(detailController.getView());
		//Alloy.Globals.tabGroup.setActiveTab(1);
		//parentTab.open(detailController.getView());

	} else {
		var detailController = Alloy.createController(e.rowData.id, {
			parentTab : parentTab
		});
		parentTab.open(detailController.getView());
	}

});

// iOS
// as menu was opened in the tabGroup, iOS will handle the nav itself (back button action and title)
// but we could change the iOS back button text:
//$.menu.backButtonTitle = L('backText', 'Back');
	var ButtonRetour = Ti.UI.createButton({
    	backgroundImage:'/images/back1.png',
    	height :24,
    	width : 24           	
	});          
		ButtonRetour.addEventListener('click', function(){
		    $.menu.close();
		});	   
 	$.menu.leftNavButton = ButtonRetour;


$.menu.tabBarHidden = true;

