class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let arr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let s = string.split(" ");
    let a = s.map(elem => {
      if(arr.includes(elem)){
        return elem
      }
      else{
        return Formatter.capitalize(elem);
      }

    })
    a[0] = Formatter.capitalize(a[0]);
    return a.join(" ");
  }
}