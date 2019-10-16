class Formatter {
  //add static methods here
    static capitalize(string){
      return string[0].toUpperCase() + string.slice(1)
    }

    static sanitize(string){
      return string.replace(/[^A-Za-z0-9-'\ ]+/g, '')
    }
    
    static titleize(string){
      let array = string.split(" ");
      let dontTitlelize = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"];
      let newArray = [];
      for(let i = 0; i < array.length; i++){
        let word = array[i]
        if (i === 0 || (!dontTitlelize.includes(word)))
        {
          newArray.push(Formatter.capitalize(word));
        } else
        newArray.push(word);
        }
      
        return newArray.join(" ");
    }
  }