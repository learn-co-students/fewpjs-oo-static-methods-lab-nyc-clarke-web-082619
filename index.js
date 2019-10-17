class Formatter {
  static capitalize(string){
    return string.charAt(string[0]).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-" "']+/g, '');
  }
  static titleize(string){
    let newString = ''
      for(const word of string.split(' ')){
        if (!['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)){
          newString += ' ' + Formatter.capitalize(word);
        }
        else{
          newString += ' ' + word;
        }
      }
      return Formatter.capitalize(newString.slice(1));
    }
}