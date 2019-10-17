class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1,string.length);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(' ').map((word,index) => !exceptions.includes(word) || index == 0 ? Formatter.capitalize(word) : word).join(" ");
  }

}