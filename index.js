class Formatter {
  //add static methods here
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) {
    let words = sentence.split(' ');
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from' ];
    let newArray = [];
    for ( let i = 0; i < words.length; i++) {
      if (i === 0) {
        newArray.push(this.capitalize( words[i]))
      } else {
        if ( exceptions.includes( words[i])) {
          newArray.push( words[i]) 
        } else {
          newArray.push( this.capitalize( words[i]))
        }
      }
    }
    return newArray.join(" ")
  }

}