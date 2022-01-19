Array.prototype.inThis = function(str) {
  return str !== null ? this.indexOf(str || '') !== -1 : false;
};
String.prototype.capitalize = function() {
  return this.at(0).toUpperCase() + this.slice(1, this.length);
};
String.prototype.regexMatch = function(pattern) {
  return this !== null && this !== '' ? (this.match(pattern) || []).inThis(this) : true;
};
