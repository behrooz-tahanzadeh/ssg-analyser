var Helper = 
{
	AddHttp: function(url)
	{
		url = url.trim();
		var r = /^https?:\/\//i;
		return r.test(url) ? url : "http://"+url;
	},//eof

	
	
	AddForwardSlash: function(url)
	{
		url = url.trim();
		var r = /\/$/gi;
		return r.test(url) ? url : url+"/";
	},//eof
	
	
	
	RemoveForwardSlash: function(url)
	{
		url = url.trim();
		var r = /(.*?)\/$/i;
		
		return r.test(url) ? r.exec(url)[1] : url;
	},//eof
	
	

	GetValidFileName: function(str)
	{
		return str.replace(/[~\\\/:\*\?"<>\|]/i, "").trim();
	},//eof
	
	
	GetFileName: function(str)
	{
		str = str.trim();
		
		var r = /.*[\\\/]([^\\\/]+)\.([\d\w]+).*?$/i;
			
		var o = r.exec(str);
		
		return [ o[1]+'.'+o[2], o[1], o[2]];
	}
};//eoc