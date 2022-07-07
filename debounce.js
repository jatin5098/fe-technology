    this.debounce = function (func, timeout) {
      console.info('Debounce call: ' + new Date);
      this.initialize();
      var timer;
      return function(args) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          func.apply(this, args);
        }, timeout);
      }.bind(this);;
    }

    this.throttle = function(func, delay) {
      var timeout = null
      return function(args) {
        if (!timeout) {
          timeout = setTimeout(function() {
            func.call(this, args)
            timeout = null
          }, delay)
        }
      }
    }