'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon : function(){
    return true;
  },
  hintingEnabled: function() {
    return false;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);
  },

};
