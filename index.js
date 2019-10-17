class Formatter {
  //add static methods here

  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  static sanitize(string) {
    // removes non-alphanumeric characters except for dash, single quote and space:
    return string.replace(/[^A-Za-z0-9-'\s]/g, '');
  }

  static titleize(){

  }
}