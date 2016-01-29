var dataStore = null;

var dataBuilt = false;

var MOF_URL = "https://mofilm.com/OpenSources/activeBriefs.xml";

exports.loadRssFeed = function(o, tries) {
    dataStore = [];
    var xhr = Titanium.Network.createHTTPClient({
        timeout: 8e3
    });
    tries = tries || 0;
    xhr.open("GET", MOF_URL);
    xhr.onload = function() {
        var xml = this.responseText;
        var xmldoc = Ti.XML.parseString(xml);
        var items = xmldoc.documentElement.getElementsByTagName("item");
        for (var i = 0; i < items.length; i++) {
            console.log(items.item(i).getElementsByTagName("sourceID").item(0).textContent);
            var row = {
                id: items.item(i).getElementsByTagName("sourceID").item(0).textContent,
                brand: items.item(i).getElementsByTagName("brandName").item(0).textContent,
                event: items.item(i).getElementsByTagName("eventName").item(0).textContent,
                url: items.item(i).getElementsByTagName("brandImage").item(0).textContent,
                logourl: items.item(i).getElementsByTagName("logoImage").item(0).textContent,
                desc: items.item(i).getElementsByTagName("shortDescription").item(0).textContent,
                deadline: items.item(i).getElementsByTagName("deadline").item(0).textContent,
                prize: items.item(i).getElementsByTagName("totalPrize").item(0).textContent,
                hash: items.item(i).getElementsByTagName("downloadHash").item(0).textContent,
                pstruct: items.item(i).getElementsByTagName("prizeStruct").item(0).textContent
            };
            dataStore.push(row);
        }
        xml = null;
        xmldoc = null;
        o.success && o.success(dataStore);
    };
    xhr.onerror = function(e) {
        if (o.error) {
            console.log(e);
            o.error();
        }
    };
    o.start && o.start();
    xhr.send();
};

exports.getItem = function(id) {
    return dataStore[id];
};

exports.getAll = function() {
    return dataStore;
};