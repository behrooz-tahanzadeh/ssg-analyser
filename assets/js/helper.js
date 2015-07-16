var Helper = 
{
	AddHttp: function(url)
	{
		url = url.trim();
		var r = /^http:\/\//i;
		return r.test(url) ? url : "http://"+url;
	},//eof

	
	
	AddForwardSlash: function(url)
	{
		url = url.trim();
		var r = /\/$/gi;
		return r.test(url) ? url : url+"/";
	}//eof
};//eoc