class User {
  private id: number;
  private firstName: string;
  private lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getId(): number {
    return this.id;
  }
  getFirstName(): string {
    return this.firstName;
  }
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
}
