  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function sayHi() {
    if (NODE_ENV === 'development') {
      console.log('test name');
    }
    return this.name;
  };

  module.exports = User;

    