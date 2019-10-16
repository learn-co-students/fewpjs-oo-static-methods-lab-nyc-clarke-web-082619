class Formatter {
  //add static methods here


  static capitalize(str){
    let splitStr = str.split('');

    splitStr[0] = splitStr[0].toUpperCase();

    return splitStr.join('')
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str){
    let blacklist = 'the a an but of and for at by from'.split(' ');

    let splitStr = str.split(' ');

    splitStr[0] = this.capitalize(splitStr[0]);

    let newStr;

    newStr = splitStr.map((word) => {
      if (blacklist.includes(word)){
        return word;
      } else {
        return this.capitalize(word)
      }
    })
    
    return newStr.join(' ')
  }
}