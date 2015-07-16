function Archdaily()
{
}//eoc




Archdaily.prototype.analyseContent = function(str)
{
	var output = {};
	
	//Title
	
	var re = /<title>\s*?(.*?)\s*?\|\s*?archdaily\s*?<\/title>/i;
	
	if((m = re.exec(str)) !== null)
	{
		output.title = re.exec(str)[1];
		output.title = output.title.replace(/[\/|\:|\\]/i,"-").trim();
	}
	
	
	//Directory
	
	output.dir =  'archdaily.com/'+Helper.GetValidFileName(output.title);
	
	
	
	//Content
	
	var j = jQuery(str).find('#the_content');
	j.find('script').remove();
	j.find('img').remove();
	j.find('figure').remove();
	j.find('div').remove();
	j.find('.minis').remove();
	j.find(':empty').remove();
	
	
	output.content =	'<html><meta charset="utf-8"><title>'
						+output.title
						+'</title></head>'
						+j.html()
						+'</body></html>';
	
	
	//ContentFileName
	
	output.contentFileName = Helper.GetValidFileName(output.title)+'.html';
	
	
	//Urls
	
	re = /NIMROD\.galleryContent\s*=\s*\"([^\"]+)/i;
	
	if((m = re.exec(str)) !== null)
	{
	    var j = jQuery(m[1]);
	    
	    j = j.find('img');
	    
	    var images = [];
	    
	    for(var i=0; i<j.length; ++i)
	    {
	    	var obj = {};
	    	
	    	var str = j.eq(i).attr('src');
	    	str = str.replace('thumb_jpg', 'slideshow');
	    	
	    	obj.src = str;
	    	obj.fileName = Helper.GetFileName(str)[0];
	    	
	    	images.push(obj);
	    }
	}
	
	output.urls = images;
	
	return output;
}//eof





Archdaily.prototype.isValidUrl = function(url)
{
	var reg = /^.*www.archdaily.com\/\d+?(\/[\w\-%]+\/?)?\s*$/i;
	
	return reg.test(url);
};//eof




Archdaily.prototype.getValidUrl = function(url)
{
	if(!this.isValidUrl(url)) return false;
	
	url = Helper.AddHttp(url);
	url = Helper.AddForwardSlash(url);
	
	return url;
};




Archdaily.prototype.getName = function()
{
	return 'archdaily.com';
};//eof




SSG.Analysers.push(new Archdaily());