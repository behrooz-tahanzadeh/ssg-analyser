function Archdaily()
{
}//eoc




Archdaily.prototype.analyseContent = function(str)
{	
	var re = /NIMROD\.galleryContent\s*=\s*\"([^\"]+)/i;
	
	if((m = re.exec(str)) !== null)
	{
	    var j = jQuery(m[1]);
	    
	    j = j.find('img');
	    
	    var images = [];
	    
	    for(var i=0; i<j.length; ++i)
	    {
	    	var str = j.eq(i).attr('src');
	    	str = str.replace('thumb_jpg', 'slideshow');
	    	
	    	images.push(str);
	    }
	    
	    return images;
	}
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