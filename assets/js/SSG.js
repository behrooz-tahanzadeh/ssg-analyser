var SSG = 
{
	Analysers: [],
	
	
	
	
	GetAnalyserNameByUrl: function(url)
	{
		for(var i=0; i<this.Analysers.length; i++)
			if(this.Analysers[i].isValidUrl(url))
				return this.Analysers[i].getName();
		
		return false;
	},//eof
	
	
	
	
	GetAnalyserByName: function(name)
	{
		for(var i=0; i<this.Analysers.length; i++)
			if(this.Analysers[i].getName() == name)
				return this.Analysers[i];
		
		return false;
	},//eof
	
	
	
	
	GetValidUrl: function(name, url)
	{
		var a = this.GetAnalyserByName(name);
		
		if(!a) return false;
		
		return a.getValidUrl(url);
	},//eof
	
	
	
	
	AnalyseContent: function(name, str)
	{
		var a = this.GetAnalyserByName(name);
		return a.analyseContent(str);
	}//eof
	
};//eoc