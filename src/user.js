function User(name) {
  this.name = name;
}

User.prototype.sayHi = function sayHi() {
  return this.name;
};
export default User;
