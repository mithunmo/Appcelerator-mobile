

var dataStore = null;
var dataBuilt = false;


// When app opens, build some dummy data - we are not going to persist the data though
// Create/Delete actions will be applied to this dataStore, which will be reset on relaunch

var MOF_URL = "https://mofilm.com/OpenSources/activeBriefs.xml";
//var MOF_URL = "http://dev.mofilm.com/OpenSources/activeBriefs.xml";
//var MOF_URL = "http://54.164.141.111/OpenSources/activeBriefs.xml";
exports.loadRssFeed = function(o, tries) {
	
	
	dataStore = [];
	var xhr = Titanium.Network.createHTTPClient({timeout : 8000});
	tries = tries || 0;
	xhr.open('GET', MOF_URL);
	xhr.onload = function(e) {
		var xml = this.responseText;
		var xmldoc = Ti.XML.parseString(xml);
		var items = xmldoc.documentElement.getElementsByTagName("item");

		//var xml = this.responseXML;

/*
		if (xml === null || xml.documentElement === null) {
			if (tries < 3) {
				tries++;
				exports.loadRssFeed(o, tries);
				return;
			} else {
				alert('Make sure you have a network connection and try refreshing.');
				if (o.error) {
					o.error();
				}
				return;
			}
		}
*/
		
		for (var i = 0; i < items.length; i++) {
			console.log(items.item(i).getElementsByTagName("sourceID").item(0).textContent);			
			var row = {
				id : items.item(i).getElementsByTagName("sourceID").item(0).textContent,
				brand : items.item(i).getElementsByTagName("brandName").item(0).textContent,
				event : items.item(i).getElementsByTagName("eventName").item(0).textContent,
				url : items.item(i).getElementsByTagName("brandImage").item(0).textContent,
				logourl : items.item(i).getElementsByTagName("logoImage").item(0).textContent,
				desc : items.item(i).getElementsByTagName("shortDescription").item(0).textContent,
				deadline : items.item(i).getElementsByTagName("deadline").item(0).textContent,
				prize : items.item(i).getElementsByTagName("totalPrize").item(0).textContent,
				hash : items.item(i).getElementsByTagName("downloadHash").item(0).textContent,
				pstruct : items.item(i).getElementsByTagName("prizeStruct").item(0).textContent

			};
			dataStore.push(row);

		}
		
		xml = null;
		xmldoc = null;
		
		/*
		 var items = xml.documentElement.getElementsByTagName("item");
		 var data = [];

		 for (var i = 0; i < items.length; i++) {
		 var item = items.item(i);
		 var image;
		 try {
		 var elems = item.getElementsByTagNameNS('http://mashable.com/rss', 'thumbnail');
		 image = Ti.XML.parseString(elems.item(0).textContent).getElementsByTagName('img').item(0).getAttribute('src');
		 } catch (ex) {
		 image = '';
		 }

		 data.push({
		 title: getRssText(item, 'title'),
		 link: getRssText(item, 'link'),
		 pubDate: parseDate(getRssText(item, 'pubDate')),
		 image: image
		 });
		 }
		 */

		if (o.success) {
			o.success(dataStore);
		}
	};
	xhr.onerror = function(e) {
		if (o.error) {
			console.log(e);
			o.error();
		}
	};

	if (o.start) {
		o.start();
	}
	xhr.send();
};

exports.getItem = function(id) {
	return dataStore[id];
};

exports.getAll = function() {
	return dataStore;
};
