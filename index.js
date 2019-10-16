class Formatter {
    static capitalize(string) { 
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) { 
      return string.replace(/[^A-Za-z0-9-' ]+/g, '');
    }

    static titleize(string) { 
      let newArray = [];
      let exceptArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      let oldArray = string.split(' ');
      for (let i = 0; i < oldArray.length; i++) { 
        if(exceptArray.includes(oldArray[i])){
          newArray.push(oldArray[i])
        } else { 
          let capitalizeWord = this.capitalize(oldArray[i])
          newArray.push(capitalizeWord)
        }
      }
      return this.capitalize(newArray.join(" "))
    }
}