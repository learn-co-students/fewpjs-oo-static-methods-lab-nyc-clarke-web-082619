class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ']+/g, '');
  }

  static titleize(string) {
    let alwaysLower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let oldStringArray = 
    string.split(' ')
    let newArr = []
    for (let i = 0; i < oldStringArray.length; i+=1) {
      if (i == 0) {
        newArr.push(this.capitalize(oldStringArray[i]))
      } else {
        if (alwaysLower.includes(oldStringArray[i])) {
          newArr.push(oldStringArray[i])
        } else {
          newArr.push(this.capitalize(oldStringArray[i]))
        }
      }
    }
    return newArr.join(' ')
  }
}