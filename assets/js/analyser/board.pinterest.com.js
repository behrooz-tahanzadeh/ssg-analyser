function PinterestBoard()
{
}//eoc




PinterestBoard.prototype.analyseContent = function(str)
{
	var output = {};
	
	var xml = jQuery.parseXML(str);
	xml = jQuery(xml)
	
	//Title
	output.title = xml.find('channel>title').text();
	
	
	//Directory
	var re = /^.*?(pinterest.*?)\/?$/i;
	var str = xml.find("channel>link").text();
	output.dir = re.exec(str)[1];
	
	
	
	//Content
	output.content =	'<html><meta charset="utf-8"><title>'
						+output.title
						+'</title></head>'
						+'<a href="'+str+'">Open board...</a><br>'
						+xml.find("channel>description").text()
						+'</body></html>';
	
	
	//ContentFileName
	
	output.contentFileName = Helper.GetValidFileName(output.title)+'.html';
	
	
	//Urls
	//{src, fileName}
	var images = [];
	
	xml = xml.find('item>description');
	
    for(var i=0; i<xml.length; ++i)
    {
    	var obj = {};
    	
    	var j = jQuery(xml.eq(i).text());
    	var u = j.find('img').attr('src');
    	u = u.replace('236x', '736x');
    	
    	obj.src = u;
    	obj.fileName = Helper.GetFileName(u)[0];
    	
    	images.push(obj);
    }
	
	output.urls = images;
	
	return output;
}//eof





PinterestBoard.prototype.isValidUrl = function(url)
{
	var reg = /^.*pinterest.com\/[\d\w\-]+\/[\d\w\-]+\/?\s*$/i;
	
	return reg.test(url);
};//eof




PinterestBoard.prototype.getValidUrl = function(url)
{
	if(!this.isValidUrl(url)) return false;
	
	url = Helper.AddHttp(url);
	url = Helper.RemoveForwardSlash(url);
	
	return url+".rss";
};




PinterestBoard.prototype.getName = function()
{
	return 'pinterest.com';
};//eof




SSG.Analysers.push(new PinterestBoard());