function jqueryAutoComplete(request, response)
{
	var result = [];
	var url = request.url;
	var path = getURLPath(url);
	var params = getURLQuery(url);
	var classname = path[1];
	var attname = path[2];
	var value = params.term;
	
	if (value != null && attname != null && classname != null)
	{
		var arr = ds[classname].query(attname+" == :1", value+"*").toArray(attname, "withKey", 0,20);
		arr.forEach(function(elem) {
			var v = elem[attname];
			result.push({id: elem.__KEY, label:v, value:v});
		});
	}
	
	response.contentType = 'application/json';
    response.body = JSON.stringify(result);
}

