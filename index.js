class Formatter {
 
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^\w\s,'-]/g, '')
  }

  static titleize(string){
    let [firstWord, ...restOfTheWords] = string.split(' ');
    let nonCapitalWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedString = []
    titleizedString.push(this.capitalize(firstWord))
    restOfTheWords.forEach(word => {
        nonCapitalWords.includes(word) ? titleizedString.push(word) : titleizedString.push(this.capitalize(word))
        // titleizedString.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    )
    return titleizedString.join(' ')
  }

}