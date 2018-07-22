
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */

function toCamelCase(sentence) {

	var camelCaseOutput = "";
	var sentence = sentence.toLowerCase();
  	var sentence = sentence.split(" ");
  
  	camelCaseOutput += sentence[0];

	for (var i = 1; i<sentence.length; i++) {
	    var word = sentence[i];
	    var wordFirstCap = "";
	    var firstLetter = word[0];
    
	    if (firstLetter === firstLetter.toLowerCase()) {
	        firstLetter = firstLetter.toUpperCase();
	        wordFirstCap += firstLetter;
	    }
	    for (var j=1; j<word.length; j++) {
	      wordFirstCap += word[j];
	    }
    camelCaseOutput += wordFirstCap;   
    }  
  return camelCaseOutput;
}



//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
