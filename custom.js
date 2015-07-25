(function(Javapoli) {
	Javapoli = Javapoli || {};
		
		Javapoli.is_debt = function(index) {		
		if(this.fields[index].status == "credit")
			this.updateHtml("<li>"+this.fields[index].getName()+" is used for a credit currently.</li>");
		else 
			this.updateHtml("<li>"+this.fields[index].getName()+" is not used for a credit currently</li>");
		};
		Javapoli.allowed_funcs = Javapoli.allowed_funcs || [];
		Javapoli.allowed_funcs.push("is_debt");

return Javapoli;
})(Javapoli);
