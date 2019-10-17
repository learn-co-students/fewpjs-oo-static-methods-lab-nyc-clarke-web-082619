class Formatter {
  //add static methods here

  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  static sanitize(string) {
    // removes non-alphanumeric characters except for dash, single quote and space:
    return string.replace(/[^A-Za-z0-9-'\s]/g, '');   //       \s == / /
  }

  static titleize(string) {
    let wordArr = string.split(" ");
    let answer = [];
    let dontCapitalize = new Set();
    ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from'].forEach(word => dontCapitalize.add(word));
    for(let i = 0; i < wordArr.length; ++i) {
      answer.push(dontCapitalize.has(wordArr[i])? wordArr[i] : this.capitalize(wordArr[i])); 
    }
    return this.capitalize(answer.join(" "));
  }
}