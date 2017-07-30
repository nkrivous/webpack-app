(function (window) {
  function ExternalGlobal() { }

  ExternalGlobal.prototype.logExternal = function logExternal() {
    console.log('external2.js');
  };

  window.externalGlobal = new ExternalGlobal();
}(window));
