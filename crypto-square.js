// create our crypto class
// it takes a string as an argument
var Crypto = function(text) {
		// store the string for use elesewhere
		this.message = text;


};

Crypto.prototype.normalizePlaintext = function () {
 	return this.message.replace (/[\W)]/g,"").toLowerCase();
 

};

Crypto.prototype.size = function () {
		var length = this.normalizePlaintext().length;
		return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();
	for (var i = 0; i < npt.length; i+= size) {
		segments.push(npt.substr(i,size));

		}

		return segments;
};

Crypto.prototype.ciphertext = function () {
	var ct = "",
		size = this.size(),
		segs = this.plaintextSegments();

	// loop trhough the column 
	for (var i = 0; i < size; i += 1) {
		//loop through the rows
		for ( var j = 0; j < segs.length; j += 1) {
			ct += segs[j].charAt(i);

		}

	}
	//represents a string that represents
	// the cipher text, i.e. the encoded message
	return ct;
};



module.exports = Crypto;



