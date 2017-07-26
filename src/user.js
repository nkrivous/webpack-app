function User(name) {
  this.name = name;
}

User.prototype.sayHi = function sayHi() {
  if (NODE_ENV === 'production') {
    return this.name;
  }
  return 'test name';
};

export default User;
