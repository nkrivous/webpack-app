function User(name) {
  this.name = name;
}

User.prototype.sayHi = function sayHi() {
  console.log(process.env.USER);
  if (NODE_ENV === 'production') {
    return this.name;
  }
  return 'test name';
};

export default User;
