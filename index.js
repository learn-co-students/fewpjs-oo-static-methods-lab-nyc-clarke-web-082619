class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let array = string.split(' ');
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capWord;

    let capArray = array.map( word => {
      if (!exception.includes(word)){
        capWord = word.charAt(0).toUpperCase() + word.slice(1);
      }else {
        capWord = word;
      }
      return capWord;
    })
    let capSentence = capArray.join(' ');
    capSentence = capSentence.charAt(0).toUpperCase() + capSentence.slice(1);
    return capSentence;
  }
}
