var PhoneNumber = function(phoneNo) {
  this.phoneNo = phoneNo.replace(/[^0-9]/g, '')
}

PhoneNumber.prototype.number = function() {
  if(this.phoneNo.length === 10) {
    return this.phoneNo;
  } else if(this.phoneNo.length === 11 && this.phoneNo.charAt(0) === '1') {
    return this.phoneNo.substr(1)
  }

  return "0000000000";
}

PhoneNumber.prototype.areaCode = function() {
  return this.phoneNo.substr(0, 3)
}
PhoneNumber.prototype.toString = function() {
  return "("+this.areaCode()+") "+this.phoneNo.substr(3, 3)+"-"+this.phoneNo.substr(6, this.phoneNo.length - 1)
}
module.exports = PhoneNumber;
