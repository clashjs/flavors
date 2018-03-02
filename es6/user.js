class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getId() {
    return this.id;
  }
  getFirstName() {
    return this.firstName;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }
  getLastName() {
    return this.lastName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
}
