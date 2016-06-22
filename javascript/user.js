function User(id, firstName, lastName) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype = {
  getId: function() {
    return this.id;
  },
  getFirstName: function() {
    return this.firstName;
  },
  setFirstName: function(firstName) {
    this.firstName = firstName;
  },
  getLastName: function() {
    return this.lastName;
  },
  setLastName: function(lastName) {
    this.lastName = lastName;
  }
};
